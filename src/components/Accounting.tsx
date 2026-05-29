import { useState } from 'react';
import { FarmStore, CostEntry, RevenueEntry } from '../lib/types';
import { format } from 'date-fns';
import { Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface AcctProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; }

type Tab = 'summary' | 'costs' | 'revenue';

export default function Accounting({ store, updateStore }: AcctProps) {
  const [tab, setTab] = useState<Tab>('summary');
  const [showCostForm, setShowCostForm] = useState(false);
  const [showRevenueForm, setShowRevenueForm] = useState(false);

  const totalCosts = store.costs.reduce((s, c) => s + c.amount, 0);
  const totalRevenue = store.revenues.reduce((s, r) => s + r.total, 0);
  const profit = totalRevenue - totalCosts;

  const costByCategory = store.costs.reduce((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + c.amount;
    return acc;
  }, {} as Record<string, number>);

  const totalAlive = 1000 - store.mortalityLogs.reduce((s, l) => s + l.count, 0);
  const costPerBird = totalAlive > 0 ? totalCosts / totalAlive : 0;
  const breakEven = costPerBird > 0 ? (costPerBird / 2.3).toFixed(2) : '0';

  const tabs = [{ id: 'summary' as Tab, label: 'P&L Summary' }, { id: 'costs' as Tab, label: 'Costs' }, { id: 'revenue' as Tab, label: 'Revenue' }];

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5">
        <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Accounting</h2>
        <p className="text-[#8a8070] text-sm">Batch A — Financial Overview</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Total Costs', value: `K${totalCosts.toLocaleString()}`, icon: TrendingDown, color: '#ef4444' },
          { label: 'Total Revenue', value: `K${totalRevenue.toLocaleString()}`, icon: TrendingUp, color: '#4A7C24' },
          { label: profit >= 0 ? 'Profit' : 'Loss', value: `K${Math.abs(profit).toLocaleString()}`, icon: DollarSign, color: profit >= 0 ? '#4A7C24' : '#ef4444' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
              <Icon size={14} style={{ color: s.color }} className="mb-2" />
              <div className="text-[#F5F0E8] font-bold text-base">{s.value}</div>
              <div className="text-[#6a6050] text-xs">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-1 mb-5">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${tab === t.id ? 'text-[#F5F0E8]' : 'text-[#6a6050] hover:text-[#c8b898]'}`}
            style={tab === t.id ? { background: '#2D5016' } : { background: '#1a1205' }}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'summary' && (
        <div className="space-y-4">
          <div className="rounded-xl p-5" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            <div className="text-[#8a8070] text-xs uppercase tracking-wider mb-4">Cost Breakdown</div>
            {Object.entries(costByCategory).length === 0 ? (
              <div className="text-[#4a4030] text-sm text-center py-4">No costs logged yet</div>
            ) : (
              Object.entries(costByCategory).sort((a, b) => b[1] - a[1]).map(([cat, amount]) => (
                <div key={cat} className="flex items-center gap-3 mb-3">
                  <div className="text-[#c8b898] text-xs w-24 capitalize">{cat}</div>
                  <div className="flex-1 bg-[#2a2010] rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#4A7C24]" style={{ width: `${(amount / totalCosts) * 100}%` }} />
                  </div>
                  <div className="text-[#F5F0E8] text-xs font-mono w-20 text-right">K{amount.toLocaleString()}</div>
                </div>
              ))
            )}
          </div>
          <div className="rounded-xl p-5 grid grid-cols-2 gap-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
            {[
              { label: 'Birds Alive', value: `${totalAlive}` },
              { label: 'Cost per Bird', value: `K${costPerBird.toFixed(2)}` },
              { label: 'Break-even Price', value: `K${breakEven}/kg`, sub: 'at 2.3kg live weight' },
              { label: 'Margin at K45/kg', value: `K${Math.max(0, 45 - parseFloat(breakEven)).toFixed(2)}/kg` },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[#6a6050] text-xs">{s.label}</div>
                <div className="text-[#F5F0E8] font-bold">{s.value}</div>
                {s.sub && <div className="text-[#4a4030] text-xs">{s.sub}</div>}
              </div>
            ))}
          </div>
          <div className="rounded-xl p-4" style={{ background: 'rgba(212,131,26,0.08)', border: '1px solid rgba(212,131,26,0.3)' }}>
            <div className="text-[#D4831A] text-xs font-bold mb-1">💡 Margin Tip</div>
            <div className="text-[#c8b898] text-xs">Dressed birds at K65–70/kg vs K38–42/kg live doubles your margin. At {totalAlive} birds × 2.3kg × 75% dressed yield, processing could add K{Math.round(totalAlive * 2.3 * 0.75 * 25).toLocaleString()} to revenue.</div>
          </div>
        </div>
      )}

      {tab === 'costs' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-[#F5F0E8] font-bold">K{totalCosts.toLocaleString()} total</div>
            <button onClick={() => setShowCostForm(!showCostForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Add Cost
            </button>
          </div>
          {showCostForm && <CostForm store={store} updateStore={updateStore} onClose={() => setShowCostForm(false)} />}
          <div className="space-y-2">
            {[...store.costs].reverse().map(c => (
              <div key={c.id} className="rounded-lg p-3 flex items-center justify-between"
                style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                <div>
                  <div className="text-[#F5F0E8] text-sm">{c.description}</div>
                  <div className="text-[#8a8070] text-xs capitalize">{c.category} · {c.date}</div>
                </div>
                <div className="text-[#ef4444] font-bold text-sm">K{c.amount.toLocaleString()}</div>
              </div>
            ))}
            {store.costs.length === 0 && <div className="text-[#4a4030] text-sm text-center py-8">No costs logged yet</div>}
          </div>
        </div>
      )}

      {tab === 'revenue' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-[#F5F0E8] font-bold">K{totalRevenue.toLocaleString()} total</div>
            <button onClick={() => setShowRevenueForm(!showRevenueForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Add Revenue
            </button>
          </div>
          {showRevenueForm && <RevenueForm store={store} updateStore={updateStore} onClose={() => setShowRevenueForm(false)} />}
          <div className="space-y-2">
            {[...store.revenues].reverse().map(r => (
              <div key={r.id} className="rounded-lg p-3 flex items-center justify-between"
                style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                <div>
                  <div className="text-[#F5F0E8] text-sm">{r.description}</div>
                  <div className="text-[#8a8070] text-xs">{r.customer} · {r.quantity} {r.type === 'live-birds' ? 'live' : 'dressed'} · {r.date}</div>
                </div>
                <div className="text-[#4A7C24] font-bold text-sm">K{r.total.toLocaleString()}</div>
              </div>
            ))}
            {store.revenues.length === 0 && <div className="text-[#4a4030] text-sm text-center py-8">No revenue logged yet</div>}
          </div>
        </div>
      )}
    </div>
  );
}

function CostForm({ store, updateStore, onClose }: { store: FarmStore; updateStore: any; onClose: () => void }) {
  const [form, setForm] = useState({ date: format(new Date(), 'yyyy-MM-dd'), category: 'feed' as CostEntry['category'], description: '', amount: 0, batch: 'A' as CostEntry['batch'] });
  const submit = () => {
    if (!form.description || form.amount <= 0) return;
    updateStore({ costs: [...store.costs, { id: Date.now().toString(), ...form }] });
    onClose();
  };
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Add Cost Entry</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Date</label>
          <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Category</label>
          <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value as any }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none">
            {['chicks', 'feed', 'vaccine', 'medication', 'labour', 'utilities', 'equipment', 'other'].map(c => (
              <option key={c} value={c} className="bg-[#0f0d09] capitalize">{c}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-[#6a6050] text-xs block mb-1">Description</label>
          <input type="text" value={form.description} placeholder="e.g. 10 bags Novatek Starter"
            onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Amount (ZMW)</label>
          <input type="number" value={form.amount} onChange={e => setForm(p => ({ ...p, amount: parseFloat(e.target.value) || 0 }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}

function RevenueForm({ store, updateStore, onClose }: { store: FarmStore; updateStore: any; onClose: () => void }) {
  const [form, setForm] = useState({ date: format(new Date(), 'yyyy-MM-dd'), type: 'dressed-birds' as RevenueEntry['type'], description: '', quantity: 0, unitPrice: 0, customer: '', batch: 'A' as RevenueEntry['batch'] });
  const total = form.quantity * form.unitPrice;
  const submit = () => {
    if (!form.description || form.quantity <= 0) return;
    updateStore({ revenues: [...store.revenues, { id: Date.now().toString(), ...form, total }] });
    onClose();
  };
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Add Revenue Entry</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Date</label>
          <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Sale Type</label>
          <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value as any }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none">
            {['live-birds', 'dressed-birds', 'goats', 'eggs', 'other'].map(t => (
              <option key={t} value={t} className="bg-[#0f0d09]">{t.replace('-', ' ')}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-[#6a6050] text-xs block mb-1">Description</label>
          <input type="text" value={form.description} placeholder="e.g. 20 dressed broilers to Kamoto Restaurant"
            onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Quantity</label>
          <input type="number" value={form.quantity} onChange={e => setForm(p => ({ ...p, quantity: parseFloat(e.target.value) || 0 }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Price per Unit (K)</label>
          <input type="number" value={form.unitPrice} onChange={e => setForm(p => ({ ...p, unitPrice: parseFloat(e.target.value) || 0 }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Customer</label>
          <input type="text" value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
        </div>
      </div>
      <div className="text-[#4A7C24] text-sm font-bold">Total: K{total.toLocaleString()}</div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}
