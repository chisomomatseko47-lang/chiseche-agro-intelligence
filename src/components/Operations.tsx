import { useState } from 'react';
import { FarmStore, MortalityLog, FeedLog, WeightLog } from '../lib/types';
import { getGrowthPhase, getTargetWeight, getDailyTasks, getTemperatureTarget, getFeedPhase } from '../lib/store';
import { format } from 'date-fns';
import { Activity, Plus, AlertTriangle, Scale, Droplets, Bell, CheckSquare, Square } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface OpsProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; batchDay: number; }

type Tab = 'overview' | 'mortality' | 'feed' | 'weights' | 'reminders';

export default function Operations({ store, updateStore, batchDay }: OpsProps) {
  const [tab, setTab] = useState<Tab>('overview');
  const [showMortalityForm, setShowMortalityForm] = useState(false);
  const [showFeedForm, setShowFeedForm] = useState(false);
  const [showWeightForm, setShowWeightForm] = useState(false);

  const phase = getGrowthPhase(batchDay);
  const todayTasks = getDailyTasks(batchDay);
  const totalMortality = store.mortalityLogs.reduce((s, l) => s + l.count, 0);
  const totalFeedKg = store.feedLogs.reduce((s, l) => s + l.totalKg, 0);
  const latestWeight = store.weightLogs.length > 0
    ? [...store.weightLogs].sort((a, b) => b.batchDay - a.batchDay)[0]
    : null;

  // Weight chart data
  const weightChartData = Array.from({ length: 38 }, (_, i) => {
    const day = i + 1;
    const actual = store.weightLogs.find(w => w.batchDay === day && w.batch === 'A');
    return {
      day, target: getTargetWeight(day),
      actual: actual?.avgWeight || null,
    };
  }).filter(d => d.day <= batchDay + 5);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'mortality', label: 'Mortality' },
    { id: 'feed', label: 'Feed' },
    { id: 'weights', label: 'Weights' },
    { id: 'reminders', label: 'Reminders' },
  ];

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5">
        <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Operations</h2>
        <p className="text-[#D4831A] text-sm">Day {batchDay} · {phase.name}</p>
      </div>

      {/* Phase Banner */}
      <div className="rounded-xl p-4 mb-5 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #1a2a10, #2a1a05)', border: '1px solid #3a3020' }}>
        <div>
          <div className="text-[#4A7C24] text-xs font-bold uppercase tracking-wider mb-1">Week {phase.week}: {phase.name}</div>
          <div className="flex gap-4 text-sm">
            <span className="text-[#c8b898]">🌡️ {getTemperatureTarget(batchDay)}</span>
            <span className="text-[#c8b898]">🌾 {getFeedPhase(batchDay)}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[#F5F0E8] text-lg font-bold font-mono">{batchDay}/38</div>
          <div className="text-[#8a8070] text-xs">batch days</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-[#6a6050] mb-1">
          {['W1\nGut Dev', 'W2\nFrame', 'W3\nGrowth', 'W4\nFatten', 'W5\nFinish', 'W5.5\nHarvest'].map((l, i) => (
            <span key={i} className={`text-center text-[9px] ${Math.ceil(batchDay / 7) >= i + 1 ? 'text-[#D4831A]' : ''}`} style={{ whiteSpace: 'pre-line' }}>{l}</span>
          ))}
        </div>
        <div className="w-full bg-[#2a2010] rounded-full h-2">
          <div className="h-2 rounded-full transition-all" style={{ width: `${(batchDay / 38) * 100}%`, background: 'linear-gradient(90deg, #2D5016, #4A7C24, #D4831A)' }} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 overflow-x-auto">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${tab === t.id ? 'text-[#F5F0E8]' : 'text-[#6a6050] hover:text-[#c8b898]'}`}
            style={tab === t.id ? { background: '#2D5016' } : { background: '#1a1205' }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {tab === 'overview' && (
        <div className="space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Alive', value: 1000 - totalMortality, sub: 'birds in house', icon: Activity, color: '#4A7C24' },
              { label: 'Mortality', value: `${totalMortality} (${((totalMortality / 1000) * 100).toFixed(1)}%)`, sub: totalMortality > 30 ? '⚠️ Above 3%' : 'Within target', icon: AlertTriangle, color: totalMortality > 30 ? '#ef4444' : '#4A7C24' },
              { label: 'Feed Used', value: `${totalFeedKg.toFixed(1)}kg`, sub: `${(totalFeedKg / Math.max(1, 1000 - totalMortality)).toFixed(2)}kg/bird`, icon: Droplets, color: '#D4831A' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                  <Icon size={14} style={{ color: s.color }} className="mb-2" />
                  <div className="text-[#F5F0E8] font-bold text-base">{s.value}</div>
                  <div className="text-[#6a6050] text-[10px]">{s.label}</div>
                  <div className="text-[#4a4030] text-[9px] mt-0.5">{s.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Today's Tasks */}
          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare size={14} className="text-[#4A7C24]" />
              <span className="text-[#F5F0E8] text-sm font-semibold">Day {batchDay} Tasks</span>
            </div>
            <div className="space-y-2">
              {todayTasks.slice(0, 10).map((task, i) => (
                <div key={i} className={`flex items-start gap-2 p-2 rounded-lg ${task.critical ? 'border border-red-900/50' : ''}`}
                  style={{ background: task.critical ? 'rgba(239,68,68,0.05)' : '#0f0d09' }}>
                  <Square size={11} className={`mt-0.5 flex-shrink-0 ${task.critical ? 'text-red-400' : 'text-[#4a4030]'}`} />
                  <span className={`text-xs leading-relaxed ${task.critical ? 'text-[#fca5a5]' : 'text-[#c8b898]'}`}>{task.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MORTALITY TAB */}
      {tab === 'mortality' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[#F5F0E8] font-bold">{totalMortality} birds lost</div>
              <div className={`text-xs ${totalMortality > 30 ? 'text-red-400' : 'text-[#4A7C24]'}`}>
                {((totalMortality / 1000) * 100).toFixed(1)}% — Target: &lt;3%
              </div>
            </div>
            <button onClick={() => setShowMortalityForm(!showMortalityForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Log Mortality
            </button>
          </div>

          {showMortalityForm && <MortalityForm store={store} updateStore={updateStore} onClose={() => setShowMortalityForm(false)} />}

          <div className="space-y-2">
            {[...store.mortalityLogs].reverse().map(log => (
              <div key={log.id} className="rounded-lg p-3 flex items-center justify-between"
                style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                <div>
                  <div className="text-[#F5F0E8] text-sm font-semibold">{log.count} bird{log.count > 1 ? 's' : ''}</div>
                  <div className="text-[#8a8070] text-xs">{log.cause} · Batch {log.batch}</div>
                </div>
                <div className="text-[#4a4030] text-xs">{log.date}</div>
              </div>
            ))}
            {store.mortalityLogs.length === 0 && (
              <div className="text-center text-[#4a4030] py-8 text-sm">No mortality logged yet. Great start!</div>
            )}
          </div>
        </div>
      )}

      {/* FEED TAB */}
      {tab === 'feed' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[#F5F0E8] font-bold">{totalFeedKg.toFixed(1)}kg total feed used</div>
              <div className="text-[#4A7C24] text-xs">Current phase: {getFeedPhase(batchDay)}</div>
            </div>
            <button onClick={() => setShowFeedForm(!showFeedForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Log Feed
            </button>
          </div>

          {showFeedForm && <FeedForm store={store} updateStore={updateStore} batchDay={batchDay} onClose={() => setShowFeedForm(false)} />}

          <div className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-3">Feed Schedule — Novatek Super Broiler</div>
            {[
              { range: 'Days 1–10', feed: 'Pre-Starter Crumbles', active: batchDay <= 10 },
              { range: 'Days 11–24', feed: 'Super Broiler Starter', active: batchDay > 10 && batchDay <= 24 },
              { range: 'Days 25–38', feed: 'Super Broiler Finisher Pellets', active: batchDay > 24 },
            ].map((f, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg mb-2 ${f.active ? 'border border-[#4A7C24]' : ''}`}
                style={{ background: f.active ? 'rgba(74,124,36,0.1)' : '#0f0d09' }}>
                <div>
                  <div className={`text-sm font-semibold ${f.active ? 'text-[#F5F0E8]' : 'text-[#6a6050]'}`}>{f.feed}</div>
                  <div className="text-[#4a4030] text-xs">{f.range}</div>
                </div>
                {f.active && <span className="text-[10px] px-2 py-1 rounded" style={{ background: '#2D5016', color: '#90c060' }}>ACTIVE</span>}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[...store.feedLogs].reverse().slice(0, 10).map(log => (
              <div key={log.id} className="rounded-lg p-3 flex items-center justify-between"
                style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                <div>
                  <div className="text-[#F5F0E8] text-sm font-semibold">{log.totalKg}kg</div>
                  <div className="text-[#8a8070] text-xs">{log.bags} bags × {log.kgPerBag}kg — {log.phase}</div>
                </div>
                <div>
                  <div className="text-[#D4831A] text-sm text-right">K{log.costPerBag * log.bags}</div>
                  <div className="text-[#4a4030] text-xs text-right">{log.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WEIGHTS TAB */}
      {tab === 'weights' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[#F5F0E8] font-bold">
                {latestWeight ? `${latestWeight.avgWeight}g` : 'No weights logged'}
              </div>
              <div className="text-[#D4831A] text-xs">Target Day {batchDay}: {getTargetWeight(batchDay)}g</div>
            </div>
            <button onClick={() => setShowWeightForm(!showWeightForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Log Weight
            </button>
          </div>

          {showWeightForm && <WeightForm store={store} updateStore={updateStore} batchDay={batchDay} onClose={() => setShowWeightForm(false)} />}

          <div className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-3">Weight vs Target (grams)</div>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={weightChartData}>
                <XAxis dataKey="day" stroke="#4a4030" tick={{ fontSize: 10, fill: '#6a6050' }} />
                <YAxis stroke="#4a4030" tick={{ fontSize: 10, fill: '#6a6050' }} />
                <Tooltip contentStyle={{ background: '#1a1205', border: '1px solid #2a2010', borderRadius: 8, fontSize: 11 }} labelStyle={{ color: '#F5F0E8' }} />
                <Line type="monotone" dataKey="target" stroke="#D4831A" strokeWidth={1.5} dot={false} strokeDasharray="4 4" name="Target" />
                <Line type="monotone" dataKey="actual" stroke="#4A7C24" strokeWidth={2} dot={{ r: 4, fill: '#4A7C24' }} connectNulls={false} name="Actual" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-3">Weight Benchmarks</div>
            {[
              { day: 7, target: 200 }, { day: 14, target: 380 }, { day: 21, target: 1150 },
              { day: 28, target: 1350 }, { day: 35, target: 2200 }, { day: 38, target: 2500 },
            ].map((b, i) => {
              const actual = store.weightLogs.find(w => Math.abs(w.batchDay - b.day) <= 2 && w.batch === 'A');
              const isPast = batchDay > b.day;
              const isCurrent = Math.abs(batchDay - b.day) <= 2;
              return (
                <div key={i} className={`flex items-center justify-between p-2 rounded mb-1 ${isCurrent ? 'border border-[#D4831A]' : ''}`}
                  style={{ background: isCurrent ? 'rgba(212,131,26,0.1)' : 'transparent' }}>
                  <span className="text-[#8a8070] text-xs">Day {b.day}</span>
                  <span className="text-[#c8b898] text-xs">{b.target}g target</span>
                  <span className={`text-xs font-mono ${actual ? (actual.avgWeight >= b.target * 0.9 ? 'text-[#4A7C24]' : 'text-red-400') : isPast ? 'text-[#4a4030]' : 'text-[#4a4030]'}`}>
                    {actual ? `${actual.avgWeight}g ✓` : isPast ? 'Not logged' : '—'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* REMINDERS TAB */}
      {tab === 'reminders' && (
        <div className="space-y-3">
          <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-4">Vaccination & Medication Schedule</div>
          {store.reminders.filter(r => r.batch === 'A' || r.batch === 'goats').sort((a, b) => a.dueDate.localeCompare(b.dueDate)).map(r => {
            const isOverdue = r.dueDate < format(new Date(), 'yyyy-MM-dd') && !r.completed;
            const isToday = r.dueDate === format(new Date(), 'yyyy-MM-dd');
            const colorMap: Record<string, string> = { vaccination: '#8b5cf6', medication: '#f59e0b', management: '#4A7C24', financial: '#D4831A', custom: '#6b7280' };
            return (
              <div key={r.id} className={`rounded-xl p-4 flex items-start gap-3 ${isOverdue ? 'border border-red-900' : isToday ? 'border border-[#D4831A]' : ''}`}
                style={{ background: isOverdue ? 'rgba(239,68,68,0.05)' : isToday ? 'rgba(212,131,26,0.05)' : '#1a1205', border: isOverdue ? '1px solid #7f1d1d' : isToday ? '1px solid #D4831A' : '1px solid #2a2010' }}>
                <button onClick={() => {
                  const updated = store.reminders.map(rem => rem.id === r.id ? { ...rem, completed: !rem.completed } : rem);
                  updateStore({ reminders: updated });
                }} className={r.completed ? 'text-[#4A7C24]' : 'text-[#4a4030]'}>
                  {r.completed ? <CheckSquare size={16} /> : <Bell size={16} />}
                </button>
                <div className="flex-1">
                  <div className={`text-sm ${r.completed ? 'line-through text-[#4a4030]' : isOverdue ? 'text-[#fca5a5]' : 'text-[#F5F0E8]'}`}>{r.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: `${colorMap[r.category]}22`, color: colorMap[r.category] }}>{r.category}</span>
                    <span className="text-[#6a6050] text-[10px]">{r.dueDate}</span>
                    {isOverdue && !r.completed && <span className="text-red-400 text-[9px] font-bold">OVERDUE</span>}
                    {isToday && !r.completed && <span className="text-[#D4831A] text-[9px] font-bold">TODAY</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MortalityForm({ store, updateStore, onClose }: { store: FarmStore; updateStore: any; onClose: () => void }) {
  const [form, setForm] = useState({ date: format(new Date(), 'yyyy-MM-dd'), batch: 'A' as 'A' | '300', count: 1, cause: 'Unknown', notes: '' });
  const submit = () => {
    const log: MortalityLog = { id: Date.now().toString(), ...form };
    updateStore({ mortalityLogs: [...store.mortalityLogs, log] });
    onClose();
  };
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Log Mortality</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Date', type: 'date', key: 'date' },
          { label: 'Count', type: 'number', key: 'count' },
          { label: 'Cause', type: 'text', key: 'cause' },
          { label: 'Notes', type: 'text', key: 'notes' },
        ].map(f => (
          <div key={f.key}>
            <label className="text-[#6a6050] text-xs block mb-1">{f.label}</label>
            <input type={f.type} value={(form as any)[f.key]}
              onChange={e => setForm(p => ({ ...p, [f.key]: f.type === 'number' ? parseInt(e.target.value) || 0 : e.target.value }))}
              className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}

function FeedForm({ store, updateStore, batchDay, onClose }: { store: FarmStore; updateStore: any; batchDay: number; onClose: () => void }) {
  const getPhase = (d: number): FeedLog['phase'] => d <= 10 ? 'pre-starter' : d <= 24 ? 'starter' : 'finisher';
  const [form, setForm] = useState({ date: format(new Date(), 'yyyy-MM-dd'), batch: 'A' as 'A' | '300', phase: getPhase(batchDay), bags: 1, kgPerBag: 50, costPerBag: 350 });
  const submit = () => {
    const log: FeedLog = { id: Date.now().toString(), ...form, totalKg: form.bags * form.kgPerBag };
    updateStore({ feedLogs: [...store.feedLogs, log] });
    onClose();
  };
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Log Feed Purchase/Use</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Date', type: 'date', key: 'date' },
          { label: 'Bags', type: 'number', key: 'bags' },
          { label: 'Kg per Bag', type: 'number', key: 'kgPerBag' },
          { label: 'Cost per Bag (K)', type: 'number', key: 'costPerBag' },
        ].map(f => (
          <div key={f.key}>
            <label className="text-[#6a6050] text-xs block mb-1">{f.label}</label>
            <input type={f.type} value={(form as any)[f.key]}
              onChange={e => setForm(p => ({ ...p, [f.key]: f.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value }))}
              className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          </div>
        ))}
      </div>
      <div className="text-[#D4831A] text-sm">Total: K{form.bags * form.costPerBag} · {form.bags * form.kgPerBag}kg</div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}

function WeightForm({ store, updateStore, batchDay, onClose }: { store: FarmStore; updateStore: any; batchDay: number; onClose: () => void }) {
  const [form, setForm] = useState({ date: format(new Date(), 'yyyy-MM-dd'), batch: 'A' as 'A' | '300', batchDay, avgWeight: 0, sampleSize: 5 });
  const submit = () => {
    const log: WeightLog = { id: Date.now().toString(), ...form };
    updateStore({ weightLogs: [...store.weightLogs, log] });
    onClose();
  };
  const target = getTargetWeight(batchDay);
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Log Weight Sample</div>
      <div className="text-[#D4831A] text-xs">Day {batchDay} target: {target}g {form.avgWeight > 0 && form.avgWeight < target * 0.9 ? '⚠️ Below target!' : ''}</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Date', type: 'date', key: 'date' },
          { label: 'Sample Size', type: 'number', key: 'sampleSize' },
          { label: 'Avg Weight (grams)', type: 'number', key: 'avgWeight' },
          { label: 'Batch Day', type: 'number', key: 'batchDay' },
        ].map(f => (
          <div key={f.key}>
            <label className="text-[#6a6050] text-xs block mb-1">{f.label}</label>
            <input type={f.type} value={(form as any)[f.key]}
              onChange={e => setForm(p => ({ ...p, [f.key]: f.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value }))}
              className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}
