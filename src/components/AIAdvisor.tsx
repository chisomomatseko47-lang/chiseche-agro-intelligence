import { useState, useRef, useEffect } from 'react';
import { FarmStore } from '../lib/types';
import { getGrowthPhase } from '../lib/store';
import { callClaude, getFarmSystemPrompt } from '../lib/api';
import { Bot, Send, Loader, Zap } from 'lucide-react';

interface AdvisorProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; batchDay: number; }

export default function AIAdvisor({ store, updateStore, batchDay }: AdvisorProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const phase = getGrowthPhase(batchDay);
  const totalFeedKg = store.feedLogs.reduce((s, l) => s + l.totalKg, 0);
  const totalMortality = store.mortalityLogs.reduce((s, l) => s + l.count, 0);
  const latestWeight = store.weightLogs.length > 0
    ? [...store.weightLogs].sort((a, b) => b.batchDay - a.batchDay)[0].avgWeight : 0;
  const totalCosts = store.costs.reduce((s, c) => s + c.amount, 0);
  const totalRevenue = store.revenues.reduce((s, r) => s + r.total, 0);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [store.chatHistory]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    const history = [...(store.chatHistory || []), { role: 'user' as const, content: userMsg, timestamp: new Date().toISOString() }];
    updateStore({ chatHistory: history });
    setLoading(true);
    try {
      const systemPrompt = getFarmSystemPrompt({ batchDay, phase: phase.name, totalFeedKg, totalMortality, latestWeight, totalCosts, totalRevenue });
      const response = await callClaude(
        history.map(m => ({ role: m.role, content: m.content })),
        systemPrompt, 1000
      );
      updateStore({ chatHistory: [...history, { role: 'assistant', content: response, timestamp: new Date().toISOString() }] });
    } catch {
      updateStore({ chatHistory: [...history, { role: 'assistant', content: 'Unable to connect to AI. Please check your Anthropic API key configuration.', timestamp: new Date().toISOString() }] });
    }
    setLoading(false);
  };

  const quickPrompts = [
    `Give me a Week ${phase.week} performance assessment for my batch`,
    `What is my estimated break-even price per kg based on current costs?`,
    `Should I be concerned about anything right now on Day ${batchDay}?`,
    'How can I maximize my margin on this harvest?',
    'What marketing should I be doing right now?',
    'Give me a combo product idea using my chickens and goats',
  ];

  return (
    <div className="h-screen flex flex-col" style={{ background: '#0a0805' }}>
      {/* Header */}
      <div className="p-5 border-b border-[#2a2010]" style={{ background: '#1a1205' }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)' }}>
            <Bot size={18} className="text-[#F5F0E8]" />
          </div>
          <div>
            <div className="text-[#F5F0E8] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Chiseche Agro AI Advisor</div>
            <div className="text-[#4A7C24] text-xs">Zambian Farm Intelligence · Day {batchDay} · {phase.name}</div>
          </div>
        </div>

        {/* Farm snapshot */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Alive', value: `${1000 - totalMortality}` },
            { label: 'Feed Used', value: `${totalFeedKg.toFixed(0)}kg` },
            { label: 'Cost', value: `K${totalCosts.toLocaleString()}` },
            { label: 'Revenue', value: `K${totalRevenue.toLocaleString()}` },
          ].map((s, i) => (
            <div key={i} className="rounded-lg p-2 text-center" style={{ background: '#0f0d09' }}>
              <div className="text-[#F5F0E8] text-sm font-bold">{s.value}</div>
              <div className="text-[#4a4030] text-[9px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {(store.chatHistory || []).length === 0 && (
          <div className="py-4">
            <div className="rounded-xl p-5 mb-5" style={{ background: '#1a1205', border: '1px solid #2D5016' }}>
              <div className="flex items-center gap-2 mb-3">
                <Zap size={14} className="text-[#D4831A]" />
                <span className="text-[#D4831A] text-xs font-bold uppercase tracking-wider">Your Farm Intelligence Advisor</span>
              </div>
              <div className="text-[#c8b898] text-sm leading-relaxed">
                I have full context on your farm: Batch A ({1000 - totalMortality} birds alive, Day {batchDay}), 300 older broilers, 15 goats, your costs and revenue data. Ask me anything about operations, health, sales, pricing, marketing, or strategy.
              </div>
            </div>
            <div className="text-[#4a4030] text-xs uppercase tracking-wider mb-3">Suggested questions</div>
            <div className="space-y-2">
              {quickPrompts.map((q, i) => (
                <button key={i} onClick={() => setInput(q)}
                  className="w-full text-left p-3 rounded-lg text-xs text-[#8a8070] hover:text-[#c8b898] transition-all hover:border-[#3a3020]"
                  style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {(store.chatHistory || []).map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 mt-1 flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)' }}>
                <Bot size={12} className="text-[#F5F0E8]" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
              m.role === 'user' ? 'text-[#F5F0E8] rounded-tr-sm' : 'text-[#c8b898] rounded-tl-sm'
            }`}
              style={m.role === 'user'
                ? { background: 'linear-gradient(135deg, #2D5016, #3a6a1a)' }
                : { background: '#1a1205', border: '1px solid #2a2010' }}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center mr-2 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)' }}>
              <Bot size={12} className="text-[#F5F0E8]" />
            </div>
            <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#4A7C24] animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[#2a2010]" style={{ background: '#1a1205' }}>
        <div className="flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
            placeholder="Ask your farm advisor anything..."
            className="flex-1 bg-[#0f0d09] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none placeholder-[#4a4030]"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
            style={{ background: input.trim() && !loading ? 'linear-gradient(135deg, #2D5016, #4A7C24)' : '#1e1a0f' }}>
            {loading ? <Loader size={16} className="animate-spin text-[#4A7C24]" /> : <Send size={16} className="text-[#F5F0E8]" />}
          </button>
        </div>
        <div className="text-center mt-2">
          <span className="text-[#2a2010] text-[9px]">Powered by Anthropic Claude · Chiseche Agro Intelligence</span>
        </div>
      </div>
    </div>
  );
}
