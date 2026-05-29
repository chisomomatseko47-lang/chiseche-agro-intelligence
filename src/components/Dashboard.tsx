import { useState, useEffect } from 'react';
import { FarmStore, ChecklistItem } from '../lib/types';
import { getBatchDay, getGrowthPhase, getTargetWeight, getTemperatureTarget, getFeedPhase, generateTodayChecklist } from '../lib/store';
import { callClaude, getFarmSystemPrompt } from '../lib/api';
import { format, parseISO } from 'date-fns';
import { NavModule } from '../App';
import {
  Activity, AlertTriangle, TrendingUp, Droplets, CheckSquare,
  Square, Zap, Target, Thermometer, Scale, BarChart2, RefreshCw
} from 'lucide-react';

interface DashboardProps {
  store: FarmStore;
  updateStore: (u: Partial<FarmStore>) => void;
  batchDay: number;
  setActiveModule: (m: NavModule) => void;
}

export default function Dashboard({ store, updateStore, batchDay, setActiveModule }: DashboardProps) {
  const [aiInsight, setAiInsight] = useState('');
  const [insightLoading, setInsightLoading] = useState(false);
  const [todayChecklist, setTodayChecklist] = useState<{ task: string; category: string; critical?: boolean; done: boolean }[]>([]);

  const phase = getGrowthPhase(batchDay);
  const totalMortality = store.mortalityLogs.reduce((s, l) => s + l.count, 0);
  const mortalityPct = ((totalMortality / 1000) * 100).toFixed(1);
  const totalFeedKg = store.feedLogs.reduce((s, l) => s + l.totalKg, 0);
  const totalCosts = store.costs.reduce((s, c) => s + c.amount, 0);
  const totalRevenue = store.revenues.reduce((s, r) => s + r.total, 0);
  const latestWeight = store.weightLogs.length > 0
    ? store.weightLogs.sort((a, b) => b.batchDay - a.batchDay)[0].avgWeight
    : 0;
  const daysToHarvest = Math.max(0, 38 - batchDay);
  const today = format(new Date(), 'yyyy-MM-dd');

  // Load today's checklist
  useEffect(() => {
    const taskDefs = generateTodayChecklist(store.settings.batchAStartDate);
    const savedItems = store.checklists.filter(c => c.date === today);
    const merged = taskDefs.map((t, i) => {
      const saved = savedItems.find(s => s.task === t.task);
      return { ...t, done: saved?.completed ?? false };
    });
    setTodayChecklist(merged);
  }, [batchDay, store.checklists]);

  const toggleTask = (idx: number) => {
    const updated = [...todayChecklist];
    updated[idx].done = !updated[idx].done;
    setTodayChecklist(updated);
    // Save to store
    const other = store.checklists.filter(c => c.date !== today);
    const newItems: ChecklistItem[] = updated.map((t, i) => ({
      id: `${today}-${i}`,
      date: today,
      task: t.task,
      category: t.category,
      completed: t.done,
      isSystem: true,
    }));
    updateStore({ checklists: [...other, ...newItems] });
  };

  const completedCount = todayChecklist.filter(t => t.done).length;
  const completionPct = todayChecklist.length > 0 ? Math.round((completedCount / todayChecklist.length) * 100) : 0;

  const fetchInsight = async () => {
    setInsightLoading(true);
    try {
      const systemPrompt = getFarmSystemPrompt({
        batchDay, phase: phase.name, totalFeedKg, totalMortality, latestWeight, totalCosts, totalRevenue
      });
      const insight = await callClaude(
        [{ role: 'user', content: `Give me one sharp, specific farm intelligence insight or alert for Day ${batchDay} of my broiler batch. Be very concise (2-3 sentences max). Focus on what matters most RIGHT NOW.` }],
        systemPrompt, 400
      );
      setAiInsight(insight);
    } catch (e) {
      setAiInsight('Connect your API key to get live AI insights for your farm.');
    }
    setInsightLoading(false);
  };

  useEffect(() => { fetchInsight(); }, [batchDay]);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const statusCards = [
    {
      icon: Activity, label: 'Batch Progress', value: `Day ${batchDay}`, sub: `${daysToHarvest} days to harvest`,
      color: '#4A7C24', bg: 'rgba(74,124,36,0.1)',
      bar: { value: (batchDay / 38) * 100, color: 'linear-gradient(90deg,#4A7C24,#D4831A)' }
    },
    {
      icon: AlertTriangle, label: 'Mortality', value: `${totalMortality} birds`,
      sub: `${mortalityPct}% of batch`,
      color: parseFloat(mortalityPct) > 3 ? '#ef4444' : '#4A7C24',
      bg: parseFloat(mortalityPct) > 3 ? 'rgba(239,68,68,0.1)' : 'rgba(74,124,36,0.1)',
    },
    {
      icon: Scale, label: 'Latest Weight', value: latestWeight ? `${latestWeight}g` : 'Not logged',
      sub: `Target: ${getTargetWeight(batchDay)}g`,
      color: '#D4831A', bg: 'rgba(212,131,26,0.1)',
    },
    {
      icon: Thermometer, label: 'Temp Target', value: getTemperatureTarget(batchDay),
      sub: 'At chick height', color: '#D4831A', bg: 'rgba(212,131,26,0.1)',
    },
    {
      icon: Droplets, label: 'Feed Phase', value: getFeedPhase(batchDay).split(' ')[0] + ' ' + getFeedPhase(batchDay).split(' ')[1],
      sub: `${totalFeedKg.toFixed(1)}kg consumed`, color: '#4A7C24', bg: 'rgba(74,124,36,0.1)',
    },
    {
      icon: BarChart2, label: 'Financials', value: `K${totalRevenue.toLocaleString()}`,
      sub: `K${totalCosts.toLocaleString()} costs`, color: totalRevenue > totalCosts ? '#4A7C24' : '#D4831A',
      bg: 'rgba(74,124,36,0.1)',
    },
  ];

  const categoryColors: Record<string, string> = {
    Critical: '#ef4444', Vaccine: '#8b5cf6', Medication: '#f59e0b',
    Feed: '#4A7C24', Temperature: '#D4831A', Water: '#3b82f6',
    Weight: '#D4831A', Management: '#6b7280', Sales: '#10b981',
    Marketing: '#ec4899', Lighting: '#f59e0b', Litter: '#92400e',
    Goats: '#8b5cf6', Setup: '#6b7280', Harvest: '#ef4444',
  };

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[#F5F0E8] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {greeting()}, Chisomo.
            </h1>
            <p className="text-[#D4831A] text-sm mt-1 font-medium">
              Day {batchDay} of Batch A — {phase.name}
            </p>
            <p className="text-[#4a4030] text-xs mt-0.5">
              {format(new Date(), 'EEEE, d MMMM yyyy')} · {store.settings.farmLocation}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[#4A7C24] text-xs font-bold uppercase tracking-wider">Week {phase.week}</div>
            <div className="text-[#F5F0E8] text-lg font-bold">{daysToHarvest}</div>
            <div className="text-[#8a8070] text-xs">days to harvest</div>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {statusCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: card.bg }}>
                  <Icon size={13} style={{ color: card.color }} />
                </div>
                <span className="text-[#6a6050] text-[10px] uppercase tracking-wider font-medium">{card.label}</span>
              </div>
              <div className="text-[#F5F0E8] font-bold text-base leading-tight">{card.value}</div>
              <div className="text-[#6a6050] text-xs mt-0.5">{card.sub}</div>
              {card.bar && (
                <div className="mt-2 w-full bg-[#2a2010] rounded-full h-1">
                  <div className="h-1 rounded-full" style={{ width: `${Math.min(100, card.bar.value)}%`, background: card.bar.color }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* AI Insight */}
        <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2D5016' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#D4831A]" />
              <span className="text-[#D4831A] text-xs font-bold uppercase tracking-wider">Daily Intelligence</span>
            </div>
            <button onClick={fetchInsight} disabled={insightLoading}
              className="text-[#4a4030] hover:text-[#D4831A] transition-colors">
              <RefreshCw size={13} className={insightLoading ? 'animate-spin' : ''} />
            </button>
          </div>
          <div className="text-[#c8b898] text-sm leading-relaxed">
            {insightLoading ? (
              <div className="space-y-2">
                {[100, 80, 60].map(w => (
                  <div key={w} className="h-3 rounded animate-pulse bg-[#2a2010]" style={{ width: `${w}%` }} />
                ))}
              </div>
            ) : aiInsight || 'Loading farm intelligence...'}
          </div>
          <button onClick={() => setActiveModule('advisor')}
            className="mt-3 text-[#4A7C24] text-xs hover:text-[#D4831A] transition-colors flex items-center gap-1">
            <TrendingUp size={11} /> Ask the AI Advisor →
          </button>
        </div>

        {/* Today's Checklist */}
        <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target size={14} className="text-[#4A7C24]" />
              <span className="text-[#F5F0E8] text-xs font-bold uppercase tracking-wider">Today's Checklist</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4831A] text-xs font-mono">{completedCount}/{todayChecklist.length}</span>
              <div className="w-16 bg-[#2a2010] rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-[#4A7C24] transition-all" style={{ width: `${completionPct}%` }} />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
            {todayChecklist.map((task, i) => (
              <button key={i} onClick={() => toggleTask(i)}
                className="w-full flex items-start gap-2.5 text-left p-2 rounded-lg hover:bg-[#1e1a0f] transition-colors group">
                <div className={`mt-0.5 flex-shrink-0 transition-colors ${task.done ? 'text-[#4A7C24]' : task.critical ? 'text-[#ef4444]' : 'text-[#4a4030] group-hover:text-[#8a8070]'}`}>
                  {task.done ? <CheckSquare size={13} /> : <Square size={13} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs leading-tight ${task.done ? 'line-through text-[#4a4030]' : task.critical ? 'text-[#fca5a5]' : 'text-[#c8b898]'}`}>
                    {task.task}
                  </div>
                  <div className="text-[9px] mt-0.5 font-medium" style={{ color: categoryColors[task.category] || '#6a6050' }}>
                    {task.category}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button onClick={() => setActiveModule('operations')}
            className="mt-3 text-[#4A7C24] text-xs hover:text-[#D4831A] transition-colors">
            View full operations →
          </button>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-5 grid grid-cols-4 gap-3">
        {[
          { label: 'Log Mortality', module: 'operations' as NavModule, color: '#ef4444' },
          { label: 'Log Feed', module: 'operations' as NavModule, color: '#4A7C24' },
          { label: 'Log Sale', module: 'sales' as NavModule, color: '#D4831A' },
          { label: 'Ask AI Advisor', module: 'advisor' as NavModule, color: '#8b5cf6' },
        ].map((btn, i) => (
          <button key={i} onClick={() => setActiveModule(btn.module)}
            className="py-3 rounded-xl text-xs font-semibold transition-all hover:opacity-90"
            style={{ background: `${btn.color}22`, color: btn.color, border: `1px solid ${btn.color}44` }}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
