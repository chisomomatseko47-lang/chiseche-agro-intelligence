import { useState, useRef } from 'react';
import { FarmStore } from '../lib/types';
import { callClaude, getContentSystemPrompt, getMarketingSystemPrompt } from '../lib/api';
import { Send, Loader, Palette, TrendingUp, FileText, Share2, Copy, Check } from 'lucide-react';

interface BaseProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; }

// ─────────────── BRAND HUB ───────────────
export function BrandHub({ store, updateStore }: BaseProps) {
  const colors = [
    { name: 'Forest', hex: '#2D5016', use: 'Primary dark' },
    { name: 'Growth', hex: '#4A7C24', use: 'Primary mid' },
    { name: 'Harvest', hex: '#D4831A', use: 'Accent warm' },
    { name: 'Cream', hex: '#F5F0E8', use: 'Text & light' },
    { name: 'Soil', hex: '#1A1205', use: 'Deep dark' },
  ];
  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-6 flex items-center gap-3">
        <Palette size={20} className="text-[#D4831A]" />
        <div>
          <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Brand Hub</h2>
          <p className="text-[#8a8070] text-sm">Chiseche Agro Identity System</p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #1a2a10, #2a1a05)', border: '1px solid #3a3020' }}>
          <div className="text-[#F5F0E8] text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Chiseche Agro</div>
          <div className="text-[#D4831A] text-sm tracking-[0.3em] uppercase font-medium">Grown with purpose. Raised with pride.</div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
          <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-4">Brand Palette</div>
          <div className="flex gap-3">
            {colors.map(c => (
              <div key={c.name} className="flex-1 text-center">
                <div className="h-12 rounded-lg mb-2" style={{ background: c.hex }} />
                <div className="text-[#c8b898] text-[9px] font-bold">{c.name}</div>
                <div className="text-[#4a4030] text-[8px] font-mono">{c.hex}</div>
                <div className="text-[#4a4030] text-[8px]">{c.use}</div>
              </div>
            ))}
          </div>
        </div>
        {[
          { label: 'Brand Voice', value: 'Honest. Nourishing. Zambian. Ambitious.' },
          { label: 'Tagline', value: '"Grown with purpose. Raised with pride."' },
          { label: 'Target Audience', value: 'Lusaka households, restaurants, caterers, butcheries, institutions' },
          { label: 'Positioning', value: 'Premium quality Zambian poultry — raised right, priced fairly' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#6a6050] text-xs uppercase tracking-wider mb-1">{item.label}</div>
            <div className="text-[#F5F0E8] text-sm">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────── MARKETING ───────────────
export function Marketing({ store, updateStore, batchDay }: BaseProps & { batchDay: number }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<{role:'user'|'assistant';content:string}[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim(); setInput('');
    const h = [...chat, { role: 'user' as const, content: msg }];
    setChat(h); setLoading(true);
    try {
      const res = await callClaude(h, getMarketingSystemPrompt(batchDay), 800);
      setChat([...h, { role: 'assistant', content: res }]);
    } catch { setChat([...h, { role: 'assistant', content: 'API key needed.' }]); }
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const daysToHarvest = Math.max(0, 38 - batchDay);

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5 flex items-center gap-3">
        <TrendingUp size={20} className="text-[#D4831A]" />
        <div>
          <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Marketing Strategy</h2>
          <p className="text-[#8a8070] text-sm">{daysToHarvest} days until harvest — {batchDay >= 28 ? '🚀 Launch marketing NOW' : `Start campaign at Day 28 (${28 - batchDay} days)`}</p>
        </div>
      </div>

      {batchDay >= 25 && (
        <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(212,131,26,0.1)', border: '1px solid #D4831A' }}>
          <div className="text-[#D4831A] font-bold text-sm mb-2">⚡ Harvest Campaign — Launch Window Active</div>
          <div className="text-[#c8b898] text-xs">You have {daysToHarvest} days until harvest. Goal: pre-sell 70% of your batch (700 birds) before slaughter day. Ask the Marketing AI to generate your campaign now.</div>
        </div>
      )}

      <div className="flex flex-col" style={{ height: 'calc(100vh - 300px)' }}>
        <div className="flex-1 overflow-y-auto space-y-3 mb-3">
          {chat.length === 0 && (
            <div className="space-y-2 py-2">
              {[
                `Generate a harvest campaign for ${1000 - store.mortalityLogs.reduce((s,l)=>s+l.count,0)} broilers ready in ${daysToHarvest} days`,
                'What channels should I use to reach Lusaka restaurants?',
                'Create a 2-week pre-harvest marketing plan',
                'How do I build a WhatsApp broadcast list for buyers?',
              ].map((q, i) => (
                <button key={i} onClick={() => setInput(q)} className="w-full text-left p-3 rounded-lg text-xs text-[#8a8070] hover:text-[#c8b898]" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>"{q}"</button>
              ))}
            </div>
          )}
          {chat.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'text-[#F5F0E8]' : 'text-[#c8b898]'}`}
                style={m.role === 'user' ? { background: '#2D5016' } : { background: '#1a1205', border: '1px solid #2a2010' }}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="flex justify-start"><div className="rounded-xl px-4 py-3" style={{ background: '#1a1205', border: '1px solid #2a2010' }}><Loader size={14} className="animate-spin text-[#4A7C24]" /></div></div>}
          <div ref={chatEndRef} />
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask your marketing strategist..." className="flex-1 bg-[#1a1205] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          <button onClick={send} disabled={loading || !input.trim()} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#2D5016' }}>
            {loading ? <Loader size={14} className="animate-spin text-white" /> : <Send size={14} className="text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── CONTENT CREATION ───────────────
export function ContentCreation({ store, updateStore }: BaseProps) {
  const [contentType, setContentType] = useState('Facebook Post');
  const [topic, setTopic] = useState('');
  const [generated, setGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const contentTypes = ['Facebook Post', 'WhatsApp Broadcast', 'WhatsApp Status', 'Instagram Caption', '30-second Video Script', 'Blog Post', 'Flyer Text'];

  const generate = async () => {
    if (!topic.trim() || loading) return;
    setLoading(true); setGenerated('');
    try {
      const res = await callClaude(
        [{ role: 'user', content: `Create a ${contentType} for Chiseche Agro about: ${topic}. Make it authentic, on-brand, and ready to use.` }],
        getContentSystemPrompt(), 600
      );
      setGenerated(res);
    } catch { setGenerated('API key needed to generate content.'); }
    setLoading(false);
  };

  const copy = () => { navigator.clipboard.writeText(generated); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5 flex items-center gap-3">
        <FileText size={20} className="text-[#D4831A]" />
        <div>
          <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Content Creation</h2>
          <p className="text-[#8a8070] text-sm">AI-powered Chiseche Agro content generator</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-[#6a6050] text-xs uppercase tracking-wider block mb-2">Content Type</label>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map(t => (
              <button key={t} onClick={() => setContentType(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${contentType === t ? 'text-[#F5F0E8]' : 'text-[#6a6050] hover:text-[#c8b898]'}`}
                style={contentType === t ? { background: '#2D5016' } : { background: '#1a1205', border: '1px solid #2a2010' }}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[#6a6050] text-xs uppercase tracking-wider block mb-2">Topic / Brief</label>
          <textarea value={topic} onChange={e => setTopic(e.target.value)} rows={3}
            placeholder="e.g. Our fresh broilers are ready for harvest — targeting Lusaka restaurants and households"
            className="w-full bg-[#1a1205] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none resize-none" />
        </div>
        <button onClick={generate} disabled={loading || !topic.trim()}
          className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
          style={{ background: topic.trim() ? 'linear-gradient(135deg, #2D5016, #4A7C24)' : '#1a1205', color: '#F5F0E8' }}>
          {loading ? <span className="flex items-center justify-center gap-2"><Loader size={14} className="animate-spin" /> Generating...</span> : `Generate ${contentType}`}
        </button>

        {generated && (
          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2D5016' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-[#4A7C24] text-xs font-bold uppercase tracking-wider">{contentType}</div>
              <button onClick={copy} className="flex items-center gap-1 text-xs text-[#8a8070] hover:text-[#D4831A] transition-colors">
                {copied ? <Check size={12} className="text-[#4A7C24]" /> : <Copy size={12} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="text-[#c8b898] text-sm leading-relaxed whitespace-pre-wrap">{generated}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────── SOCIAL MEDIA ───────────────
export function SocialMedia({ store, updateStore }: BaseProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<{role:'user'|'assistant';content:string}[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim(); setInput('');
    const h = [...chat, { role: 'user' as const, content: msg }];
    setChat(h); setLoading(true);
    try {
      const res = await callClaude(h, `You are the Social Media Manager for Chiseche Agro, a premium poultry farm in Zambia. Plan content for Facebook, WhatsApp Business, Instagram, and TikTok targeting Lusaka consumers. Always include relevant hashtags: #ChisecheAgro #ZambianPoultry #FreshFromFarm #LusakaChicken #ZambianFarming #GrownWithPurpose. Give specific, ready-to-use post ideas with captions and optimal Zambian posting times (7AM, 12PM, 6PM work best).`, 700);
      setChat([...h, { role: 'assistant', content: res }]);
    } catch { setChat([...h, { role: 'assistant', content: 'API key needed.' }]); }
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const hashtags = ['#ChisecheAgro', '#ZambianPoultry', '#FreshFromFarm', '#LusakaChicken', '#ZambianFarming', '#GrownWithPurpose', '#ZambianFood', '#LusakaEats'];

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5 flex items-center gap-3">
        <Share2 size={20} className="text-[#D4831A]" />
        <div>
          <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Social Media</h2>
          <p className="text-[#8a8070] text-sm">Facebook · WhatsApp Business · Instagram · TikTok</p>
        </div>
      </div>

      <div className="rounded-xl p-4 mb-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
        <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-2">Brand Hashtags</div>
        <div className="flex flex-wrap gap-2">
          {hashtags.map(h => (
            <span key={h} className="text-xs px-2 py-1 rounded-lg" style={{ background: '#2D501622', color: '#4A7C24', border: '1px solid #2D501644' }}>{h}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col" style={{ height: 'calc(100vh - 370px)' }}>
        <div className="flex-1 overflow-y-auto space-y-3 mb-3">
          {chat.length === 0 && (
            <div className="space-y-2">
              {['Suggest a 2-week content plan to drive broiler pre-orders','Best posting times for Zambian Facebook audiences','Create a TikTok video concept for our farm','Write a WhatsApp status for announcing our harvest'].map((q, i) => (
                <button key={i} onClick={() => setInput(q)} className="w-full text-left p-3 rounded-lg text-xs text-[#8a8070] hover:text-[#c8b898]" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>"{q}"</button>
              ))}
            </div>
          )}
          {chat.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'text-[#F5F0E8]' : 'text-[#c8b898]'}`}
                style={m.role === 'user' ? { background: '#2D5016' } : { background: '#1a1205', border: '1px solid #2a2010' }}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="flex justify-start"><div className="rounded-xl px-4 py-3" style={{ background: '#1a1205', border: '1px solid #2a2010' }}><Loader size={14} className="animate-spin text-[#4A7C24]" /></div></div>}
          <div ref={chatEndRef} />
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask your social media manager..." className="flex-1 bg-[#1a1205] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          <button onClick={send} disabled={loading || !input.trim()} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#2D5016' }}>
            {loading ? <Loader size={14} className="animate-spin text-white" /> : <Send size={14} className="text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
}
