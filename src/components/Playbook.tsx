import { useState, useRef, useEffect } from 'react';
import { FarmStore } from '../lib/types';
import { callClaude, getPlaybookSystemPrompt } from '../lib/api';
import { BookOpen, Send, Loader, ChevronDown, ChevronRight } from 'lucide-react';

interface PlaybookProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; batchDay: number; }

const WEEKS = [
  {
    week: 1, days: '1–7', title: 'Gut Development Phase',
    temp: '33–35°C', feed: 'Pre-Starter Crumbles (ad libitum)', light: '24 hours bright (20–30 lux)',
    keyTasks: [
      '🔴 WATER FIRST: Vitamin water 2–3 hours before first feed (Day 1)',
      'Dip each chick beak in water before placing down',
      '3–4 brooding circles (~3m diameter) for 1,000 birds',
      'NIGHT CHECK 10 PM–2 AM: 90%+ birds must be awake and eating',
      'Watch chick behavior — not just the thermometer',
      'Remove cardboard tray feeders on Day 3 (prevent mold)',
    ],
    vaccinations: ['Day 7: Newcastle Disease (Lasota) + Infectious Bronchitis — in water (withdraw 1hr first)'],
    watch: 'Huddled + loud chirping = TOO COLD. Spread to edges + panting = TOO HOT. Evenly spread, eating quietly = PERFECT.',
    target: '~200g at Day 7',
    color: '#4A7C24',
  },
  {
    week: 2, days: '8–14', title: 'Frame Building Phase',
    temp: '30–31°C (reduce 1–2°C from Week 1)', feed: 'Transition Day 8–9: 50% Pre-Starter/50% Starter → Day 10: 100% Novatek Starter', light: '18–24 hours',
    keyTasks: [
      'Raise feeders and drinkers to back-height of birds',
      'Remove vitamin packs — plain clean water only',
      'Expand brooding area. Remove circles on Day 14.',
      'Monitor Chisamba cold nights — check at 2 AM',
      'Litter check: remove wet patches, add fresh dry shavings',
    ],
    vaccinations: [
      'Day 10: Anti-coccidial PREVENTATIVE (Toltrazuril or Amprolium) — do NOT wait for symptoms',
      'Day 12–14: Gumboro (IBD) vaccine in water — CRUCIAL in Zambia (withdraw 1hr first)',
    ],
    watch: 'Watch for respiratory signs. Cold nights can cause temperature crashes. Check litter — wet litter = ammonia = stunted growth.',
    target: '~350g at Day 14',
    color: '#5a8c2e',
  },
  {
    week: 3, days: '15–21', title: 'Rapid Growth Phase',
    temp: '27–28°C — turn stoves OFF during hot afternoon (11 AM–3 PM), reignite at 4 PM', feed: '100% Novatek Starter', light: 'Reduce to 20 hours (off midnight–4 AM)',
    keyTasks: [
      'Litter management: turn and add fresh shavings where damp',
      'Ensure roof-level ventilation — ammonia escapes top',
      'Monitor for coccidiosis: bloody/watery droppings',
      'Lighting reduction prevents Sudden Death Syndrome',
      'Sunday weight check: 5 random birds before feeding',
    ],
    vaccinations: ['Day 18: Newcastle Disease (Lasota) BOOSTER in water (withdraw 1hr first)'],
    watch: 'If weight at Day 21 is <900g, your feed quality or temperature management is FAILING. Act immediately.',
    target: '~1.1–1.2kg at Day 21',
    color: '#D4831A',
  },
  {
    week: 4, days: '22–28', title: 'Fattening Phase',
    temp: '24–25°C — charcoal only at night now', feed: 'Transition Day 22–23: 50/50 → Day 24: 100% Novatek Finisher Pellets', light: '20 hours',
    keyTasks: [
      '🔑 FEED PUSH: Feeders 100% full at 4–6 PM EVERY DAY — this is when weight is built',
      'Twice-weekly litter management',
      'Watch for wet litter → breast blisters/hock burns → Zambeef downgrades',
      'Monitor ammonia — roof vents must be fully open',
      'Heat stress watch: panting, reduced appetite → maximize ventilation',
    ],
    vaccinations: [
      'Day 25: Second anti-coccidial dose (Toltrazuril/Amprolium)',
      'Day 24–26: Gumboro booster if program requires',
    ],
    watch: 'Day 28: begin identifying buyers. Goal: pre-sell 70% of batch before slaughter day.',
    target: '~1.2–1.4kg at Day 28',
    color: '#c4730a',
  },
  {
    week: 5, days: '29–35', title: 'Finish Line',
    temp: '22–24°C — no charcoal during day, light heat at night only if freezing', feed: '100% Novatek Finisher Pellets — maximize availability', light: '18 hours (off 10 PM–4 AM)',
    keyTasks: [
      '🔴 Day 33: STOP ALL MEDICATIONS — 5–7 day withdrawal before slaughter',
      'Avoid stressing birds — minimize disturbances',
      'Finisher pellets always available, clean water at all times',
      'Day 35: Confirm full buyer list and quantities',
      'Begin marketing and advertising the harvest',
      'Book or prepare slaughter area / processor',
    ],
    vaccinations: ['NO medications after Day 33 (withdrawal period)'],
    watch: 'Meat must be safe for human consumption. Any antibiotic residue = Zambeef rejection. Do not skip withdrawal.',
    target: '~2.0–2.3kg at Day 35',
    color: '#2D5016',
  },
  {
    week: 6, days: '36–38', title: 'Market Ready — HARVEST WEEK',
    temp: '22°C ambient', feed: 'Withheld 6–8 hours before slaughter (water continues)', light: 'Normal, dim for catching',
    keyTasks: [
      '🔴 CATCH AT NIGHT (10–11 PM) using dim solar light — darkness calms birds',
      '🔴 HOLD BY LEGS ONLY — NEVER wings. Wing breaks = Zambeef downgrade.',
      'Final weight sample: target 2.3–2.5kg (aim 2.8kg)',
      'Ensure transport has adequate ventilation — heat kills birds in stationary trucks',
      'After harvest: calculate final FCR, mortality %, and batch profit',
      'Clean and prepare house for next batch',
    ],
    vaccinations: [],
    watch: 'Chisamba to Lusaka is short but a stationary truck in heat kills fast. Ensure vehicle is ventilated and moving.',
    target: '2.3–2.5kg at harvest (target 2.8kg)',
    color: '#1A1205',
  },
];

const SECRETS = [
  { title: 'The "Water First" Rule', icon: '💧', content: 'On Day 1, do NOT put feed out immediately. Let chicks drink vitamin water for 2–3 hours first. This hydrates the gut, flushes toxins from the yolk sac, and dramatically reduces early mortality. This is one of the most impactful things you can do on Day 1.', color: '#3b82f6' },
  { title: 'The Night Check', icon: '🌙', content: 'Walk into the house quietly at 10 PM – 2 AM. Are 90%+ of chicks awake and eating? If they are sleeping, they are losing weight. Global commercial farmers ensure birds eat heavily at night. This check is non-negotiable in Weeks 1–2.', color: '#8b5cf6' },
  { title: 'Litter = Weight = Money', icon: '🌾', content: 'Wet litter causes ammonia buildup, which burns the birds\' throats and lungs — they stop eating. Wet litter also causes breast blisters and hock burns, which Zambeef downgrades or rejects. Check litter daily. Remove wet patches immediately. Add fresh dry wood shavings.', color: '#D4831A' },
  { title: 'Prevent Coccidiosis', icon: '💊', content: 'Use Toltrazuril or Amprolium in water on Day 10 AND Day 25. Preventatively. Do not wait for bloody droppings. Coccidiosis thrives in warm wet litter (common in winter houses). Cost of prevention is tiny vs cost of an outbreak destroying your gut lining.', color: '#f59e0b' },
  { title: 'Winter Ventilation Art', icon: '💨', content: 'Never seal the house completely. Chickens produce massive moisture and ammonia. The TOP of the walls (just under the roof) must have permanent small openings. Heat rises — floor stays warm. Toxic ammonia escapes at the top. If you seal the house to keep warmth in, you\'re slowly poisoning your birds.', color: '#4A7C24' },
  { title: '4–6 PM Feed Pushing Window', icon: '⏰', content: 'In Chisamba afternoons when it cools down, chickens naturally eat significantly more. Ensure ALL feeders are 100% full from 4–6 PM every day in Weeks 4–5. This is when heavy weight is built. Missing this window daily costs you hundreds of grams per bird by harvest.', color: '#D4831A' },
  { title: 'Night Catching Only', icon: '🔦', content: 'Catch birds only at night (10–11 PM) using dim solar lighting. Darkness calms birds dramatically. ALWAYS hold by the legs — NEVER the wings. Wing fractures lead to downgrades or rejection at Zambeef abattoir. Catching in daylight causes stress, injury, and potential heart attacks in already-full birds.', color: '#ef4444' },
  { title: 'Biosecurity = Profit Protection', icon: '🛡️', content: 'Keep a footbath at the door with strong disinfectant (Virkon or Jik). Change it daily. Wear dedicated boots and clothes only for the poultry house. No casual visitors inside. One disease introduction can wipe an entire batch. Global commercial farms lose millions through biosecurity negligence.', color: '#6b7280' },
];

export default function Playbook({ store, updateStore, batchDay }: PlaybookProps) {
  const [section, setSection] = useState<'schedule' | 'secrets' | 'metrics' | 'feed' | 'chat'>('schedule');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(Math.ceil(batchDay / 7));
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentWeek = Math.min(6, Math.ceil(batchDay / 7));

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [store.playbookChatHistory]);

  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    const history = [...(store.playbookChatHistory || []), { role: 'user' as const, content: userMsg, timestamp: new Date().toISOString() }];
    updateStore({ playbookChatHistory: history });
    setChatLoading(true);
    try {
      const response = await callClaude(
        history.map(m => ({ role: m.role, content: m.content })),
        getPlaybookSystemPrompt(), 800
      );
      updateStore({ playbookChatHistory: [...history, { role: 'assistant', content: response, timestamp: new Date().toISOString() }] });
    } catch {
      updateStore({ playbookChatHistory: [...history, { role: 'assistant', content: 'API connection needed. Check your Anthropic API key.', timestamp: new Date().toISOString() }] });
    }
    setChatLoading(false);
  };

  const navItems = [
    { id: 'schedule', label: 'Week Schedule' },
    { id: 'secrets', label: 'Big Player Secrets' },
    { id: 'feed', label: 'Feed Strategy' },
    { id: 'metrics', label: 'Success Metrics' },
    { id: 'chat', label: 'Ask Playbook AI' },
  ];

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5 flex items-start gap-3">
        <BookOpen size={20} className="text-[#D4831A] mt-1" />
        <div>
          <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>The Zambian Broiler Playbook</h2>
          <p className="text-[#8a8070] text-sm">Expert knowledge for your 1,000-bird batch — currently Week {currentWeek}</p>
        </div>
      </div>

      {/* Current week highlight */}
      <div className="rounded-xl p-4 mb-5 flex items-center gap-4" style={{ background: 'linear-gradient(135deg, rgba(74,124,36,0.15), rgba(212,131,26,0.1))', border: '1px solid rgba(212,131,26,0.3)' }}>
        <div className="text-2xl">📍</div>
        <div>
          <div className="text-[#D4831A] text-xs font-bold uppercase tracking-wider">You Are Here — Day {batchDay}</div>
          <div className="text-[#F5F0E8] font-semibold">{WEEKS[currentWeek - 1]?.title || 'Harvest Week'}</div>
          <div className="text-[#8a8070] text-xs">{WEEKS[currentWeek - 1]?.watch}</div>
        </div>
      </div>

      {/* Section nav */}
      <div className="flex gap-1 mb-5 overflow-x-auto flex-wrap gap-y-1">
        {navItems.map(n => (
          <button key={n.id} onClick={() => setSection(n.id as any)}
            className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${section === n.id ? 'text-[#F5F0E8]' : 'text-[#6a6050] hover:text-[#c8b898]'}`}
            style={section === n.id ? { background: '#2D5016' } : { background: '#1a1205' }}>
            {n.label}
          </button>
        ))}
      </div>

      {/* WEEK SCHEDULE */}
      {section === 'schedule' && (
        <div className="space-y-3">
          {WEEKS.map(week => {
            const isCurrent = week.week === currentWeek;
            const isPast = week.week < currentWeek;
            const isExpanded = expandedWeek === week.week;
            return (
              <div key={week.week}
                className={`rounded-xl overflow-hidden ${isCurrent ? 'ring-1 ring-[#D4831A]' : ''}`}
                style={{ background: '#1a1205', border: `1px solid ${isCurrent ? '#D4831A' : '#2a2010'}` }}>
                <button className="w-full p-4 flex items-center justify-between text-left"
                  onClick={() => setExpandedWeek(isExpanded ? null : week.week)}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-[#F5F0E8]"
                      style={{ background: week.color }}>W{week.week}</div>
                    <div>
                      <div className={`font-semibold text-sm ${isCurrent ? 'text-[#F5F0E8]' : isPast ? 'text-[#6a6050]' : 'text-[#c8b898]'}`}>
                        {week.title}
                      </div>
                      <div className="text-[#4a4030] text-xs">Days {week.days} · Target: {week.target}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCurrent && <span className="text-[8px] px-2 py-1 rounded font-bold" style={{ background: '#D4831A22', color: '#D4831A' }}>ACTIVE</span>}
                    {isPast && <span className="text-[8px] px-2 py-1 rounded" style={{ background: '#2D501622', color: '#4A7C24' }}>DONE</span>}
                    {isExpanded ? <ChevronDown size={14} className="text-[#6a6050]" /> : <ChevronRight size={14} className="text-[#6a6050]" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-4 border-t border-[#2a2010]">
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[
                        { label: '🌡️ Temperature', value: week.temp },
                        { label: '🌾 Feed', value: week.feed },
                        { label: '💡 Lighting', value: week.light },
                      ].map((info, i) => (
                        <div key={i} className="rounded-lg p-3" style={{ background: '#0f0d09' }}>
                          <div className="text-[#6a6050] text-[9px] uppercase tracking-wider mb-1">{info.label}</div>
                          <div className="text-[#c8b898] text-xs leading-relaxed">{info.value}</div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="text-[#4A7C24] text-[10px] font-bold uppercase tracking-wider mb-2">Key Daily Tasks</div>
                      <div className="space-y-1.5">
                        {week.keyTasks.map((task, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#c8b898] p-2 rounded" style={{ background: '#0f0d09' }}>
                            <span className="text-[#4a4030] mt-0.5">›</span> {task}
                          </div>
                        ))}
                      </div>
                    </div>

                    {week.vaccinations.length > 0 && (
                      <div>
                        <div className="text-[#8b5cf6] text-[10px] font-bold uppercase tracking-wider mb-2">💉 Vaccinations & Medications</div>
                        {week.vaccinations.map((v, i) => (
                          <div key={i} className="text-xs p-2 rounded mb-1 text-[#c4b0f8]" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>{v}</div>
                        ))}
                      </div>
                    )}

                    <div className="rounded-lg p-3" style={{ background: 'rgba(212,131,26,0.08)', border: '1px solid rgba(212,131,26,0.2)' }}>
                      <div className="text-[#D4831A] text-[9px] font-bold uppercase tracking-wider mb-1">⚠️ Watch For</div>
                      <div className="text-[#c8b898] text-xs">{week.watch}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* SECRETS */}
      {section === 'secrets' && (
        <div className="space-y-4">
          <p className="text-[#8a8070] text-sm">Techniques used by high-performance commercial operations globally — adapted for Zambia.</p>
          {SECRETS.map((s, i) => (
            <div key={i} className="rounded-xl p-5" style={{ background: '#1a1205', border: `1px solid ${s.color}44` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <div className="font-semibold text-[#F5F0E8] text-sm">{s.title}</div>
              </div>
              <div className="text-[#c8b898] text-sm leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>
      )}

      {/* FEED STRATEGY */}
      {section === 'feed' && (
        <div className="space-y-4">
          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#D4831A] text-sm font-bold mb-3">Why "Low Cost" Feed is a False Economy</div>
            <div className="text-[#c8b898] text-sm leading-relaxed mb-4">Feed accounts for 70% of total broiler costs. Buying cheap feed ruins gut health, resulting in poor absorption and light birds. The real "low cost" strategy is buying the highest quality feed with the best Feed Conversion Ratio (FCR) so every gram of feed converts efficiently to meat.</div>
            <div className="rounded-lg p-4" style={{ background: 'rgba(74,124,36,0.1)', border: '1px solid rgba(74,124,36,0.3)' }}>
              <div className="text-[#4A7C24] font-bold text-sm mb-2">✅ Recommended: NOVATEK Super Broiler Range</div>
              <div className="text-[#c8b898] text-xs leading-relaxed">Novatek has the most consistent particle size and amino acid profile in Zambia, specifically formulated for the Cobb/Ross breeds dominant in Zambian hatcheries (Zambeef or Novatek hatcheries). It gives you the FCR advantage you need to hit 2.3–2.5kg by Day 38.</div>
            </div>
          </div>

          {[
            { phase: 'Pre-Starter Crumbles', days: 'Days 1–10', why: 'Critical for early gut development. Crumble size allows small chicks to eat easily. Maximizes Day 1–7 intake which determines Week 5 weight.', color: '#4A7C24', active: batchDay <= 10 },
            { phase: 'Super Broiler Starter', days: 'Days 11–24', why: 'Higher protein for skeleton and muscle development. Transition slowly (50/50 for 2 days). Plain clean water from Day 10 onwards.', color: '#D4831A', active: batchDay > 10 && batchDay <= 24 },
            { phase: 'Super Broiler Finisher Pellets', days: 'Days 25–38', why: 'High energy pellets. Pellets reduce feed wastage vs crumbles. Fill feeders at 4–6 PM every day — this is the peak eating window. This phase builds the final 1kg of weight.', color: '#c4730a', active: batchDay > 24 },
          ].map((f, i) => (
            <div key={i} className={`rounded-xl p-5 ${f.active ? 'ring-1 ring-[#D4831A]' : ''}`} style={{ background: '#1a1205', border: `1px solid ${f.active ? '#D4831A' : '#2a2010'}` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-[#F5F0E8] text-sm">{f.phase}</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#8a8070] text-xs">{f.days}</span>
                  {f.active && <span className="text-[9px] px-2 py-0.5 rounded font-bold" style={{ background: '#D4831A22', color: '#D4831A' }}>ACTIVE NOW</span>}
                </div>
              </div>
              <div className="text-[#c8b898] text-xs leading-relaxed">{f.why}</div>
            </div>
          ))}

          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#F5F0E8] font-bold text-sm mb-3">FCR: Feed Conversion Ratio Explained</div>
            <div className="text-[#c8b898] text-sm mb-3">FCR = Total Feed Consumed (kg) ÷ Total Live Weight Gained (kg)</div>
            <div className="text-[#c8b898] text-xs mb-3">Target FCR: 1.6. This means 1.6kg of feed produces 1kg of meat. At 2.3kg average weight per bird, each bird should eat approximately 3.6–3.8kg of feed total over 38 days.</div>
            <div className="space-y-2">
              {[
                { fcr: '1.4–1.6', rating: '⭐ Excellent', color: '#4A7C24' },
                { fcr: '1.7–1.9', rating: '✅ Good (industry average)', color: '#4A7C24' },
                { fcr: '2.0–2.2', rating: '⚠️ Acceptable — review management', color: '#D4831A' },
                { fcr: '2.3+', rating: '🔴 Poor — feed quality or health issue', color: '#ef4444' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded" style={{ background: '#0f0d09' }}>
                  <span className="text-[#c8b898] text-xs font-mono">{r.fcr}</span>
                  <span className="text-xs" style={{ color: r.color }}>{r.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* METRICS */}
      {section === 'metrics' && (
        <div className="space-y-4">
          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#F5F0E8] font-bold text-sm mb-4">Batch Success Targets</div>
            {[
              { metric: 'Day 7 Weight', target: '~200g', importance: 'Predicts Week 5 outcome' },
              { metric: 'Day 21 Weight', target: '~1.1–1.2kg', importance: 'ALERT if <900g' },
              { metric: 'Day 28 Weight', target: '~1.2–1.4kg', importance: 'Begin buyer outreach' },
              { metric: 'Day 35 Weight', target: '~2.0–2.3kg', importance: 'Confirm all buyers' },
              { metric: 'Day 38 Weight', target: '2.3–2.5kg', importance: 'Target: 2.8kg' },
              { metric: 'Mortality Rate', target: '<3%', importance: 'Max 30 birds from 1,000' },
              { metric: 'Feed per Bird', target: '~3.6–3.8kg', importance: 'Over 38 days total' },
              { metric: 'FCR Target', target: '1.6', importance: 'Feed efficiency benchmark' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-[#1e1a0f] last:border-0">
                <div>
                  <div className="text-[#c8b898] text-sm">{m.metric}</div>
                  <div className="text-[#4a4030] text-xs">{m.importance}</div>
                </div>
                <div className="text-[#D4831A] font-mono text-sm font-bold">{m.target}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#F5F0E8] font-bold text-sm mb-4">Zambia-Specific Intelligence</div>
            <div className="space-y-3">
              {[
                { title: 'Zambeef Abattoir Standards', detail: 'Breast blisters and hock burns caused by wet litter result in downgrades or rejection. Manage litter daily.' },
                { title: 'ZESCO Load-Shedding Risk', detail: 'Power cuts can raise brooder costs 40%. Solar/inverter backup for brooder circuit is critical in Weeks 1–2.' },
                { title: 'Local Feed Sourcing', detail: 'Novatek Super Broiler Range available at major agrovets in Lusaka and Chisamba. Buy in bulk for better pricing.' },
                { title: 'Vaccine Sourcing', detail: 'Newcastle, Gumboro, IB vaccines available at Vetagro and Lafarge agrovets. Pre-order to ensure availability.' },
                { title: 'Market Pricing (Lusaka 2025–26)', detail: 'Live birds: K38–42/kg. Dressed birds: K65–70/kg. Dressed yield = ~75% of live weight. Processing dramatically increases margin.' },
                { title: 'Chisamba Winter Nights', detail: 'Cold nights require 2 AM temperature checks in Weeks 1–2. Charcoal stoves must compensate for drops. CO safety: always ventilate the top eaves.' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: '#0f0d09' }}>
                  <div className="text-[#D4831A] text-xs font-bold mb-1">{item.title}</div>
                  <div className="text-[#8a8070] text-xs leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PLAYBOOK AI CHAT */}
      {section === 'chat' && (
        <div className="flex flex-col" style={{ height: 'calc(100vh - 280px)' }}>
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {(store.playbookChatHistory || []).length === 0 && (
              <div className="text-center py-8">
                <BookOpen size={32} className="text-[#2a2010] mx-auto mb-3" />
                <div className="text-[#6a6050] text-sm mb-4">Ask anything about broiler farming in Zambia</div>
                <div className="space-y-2">
                  {[
                    `What should I be doing on Day ${batchDay}?`,
                    'My birds weighed 850g at Day 21. What do I do?',
                    'How do I prevent coccidiosis in winter?',
                    'What FCR should I be targeting?',
                  ].map((q, i) => (
                    <button key={i} onClick={() => setChatInput(q)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-xs text-[#8a8070] hover:text-[#c8b898] transition-colors"
                      style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                      "{q}"
                    </button>
                  ))}
                </div>
              </div>
            )}
            {(store.playbookChatHistory || []).map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${m.role === 'user' ? 'text-[#F5F0E8]' : 'text-[#c8b898]'}`}
                  style={m.role === 'user' ? { background: '#2D5016' } : { background: '#1a1205', border: '1px solid #2a2010' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {chatLoading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-4 py-3" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                  <Loader size={14} className="animate-spin text-[#4A7C24]" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-2">
            <input value={chatInput} onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendChat()}
              placeholder="Ask about your broiler batch..."
              className="flex-1 bg-[#1a1205] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
            <button onClick={sendChat} disabled={chatLoading || !chatInput.trim()}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
              style={{ background: chatInput.trim() ? '#2D5016' : '#1a1205' }}>
              {chatLoading ? <Loader size={16} className="animate-spin text-[#4A7C24]" /> : <Send size={16} className="text-[#F5F0E8]" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
