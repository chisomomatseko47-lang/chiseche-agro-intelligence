import { useState, useRef, useEffect } from 'react';
import { FarmStore, Customer, Order } from '../lib/types';
import { callClaude, getSalesSystemPrompt } from '../lib/api';
import { format } from 'date-fns';
import { Plus, Send, Loader, ShoppingCart, User } from 'lucide-react';

interface SalesProps { store: FarmStore; updateStore: (u: Partial<FarmStore>) => void; }

export default function Sales({ store, updateStore }: SalesProps) {
  const [tab, setTab] = useState<'pipeline' | 'customers' | 'advisor'>('pipeline');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiChat, setAiChat] = useState<{role:'user'|'assistant';content:string}[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [aiChat]);

  const totalCosts = store.costs.reduce((s, c) => s + c.amount, 0);
  const confirmedOrders = store.orders.filter(o => ['confirmed','paid','delivered'].includes(o.status));
  const totalBirdsPreSold = confirmedOrders.reduce((s, o) => s + o.quantity, 0);

  const statusColors: Record<string,string> = {
    interested: '#6b7280', confirmed: '#D4831A', paid: '#4A7C24', delivered: '#2D5016'
  };

  const sendAI = async () => {
    if (!aiInput.trim() || aiLoading) return;
    const msg = aiInput.trim();
    setAiInput('');
    const history = [...aiChat, { role: 'user' as const, content: msg }];
    setAiChat(history);
    setAiLoading(true);
    try {
      const res = await callClaude(history, getSalesSystemPrompt(totalCosts), 600);
      setAiChat([...history, { role: 'assistant', content: res }]);
    } catch {
      setAiChat([...history, { role: 'assistant', content: 'API connection needed.' }]);
    }
    setAiLoading(false);
  };

  return (
    <div className="min-h-screen p-6" style={{ background: '#0a0805' }}>
      <div className="mb-5">
        <h2 className="text-[#F5F0E8] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Sales Management</h2>
        <p className="text-[#D4831A] text-sm">{totalBirdsPreSold} birds pre-sold · Target: 700 pre-sold before slaughter</p>
      </div>

      <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(212,131,26,0.08)', border: '1px solid rgba(212,131,26,0.3)' }}>
        <div className="text-[#D4831A] text-xs font-bold mb-1">💡 Pricing Strategy</div>
        <div className="text-[#c8b898] text-xs">Live birds: K38–42/kg · Dressed birds: K65–70/kg · Dressed yield ~75% of live weight. Processing doubles your margin.</div>
      </div>

      <div className="flex gap-1 mb-5">
        {[{id:'pipeline',label:'Pipeline'},{id:'customers',label:'Customers'},{id:'advisor',label:'Sales AI'}].map(t => (
          <button key={t.id} onClick={() => setTab(t.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${tab === t.id ? 'text-[#F5F0E8]' : 'text-[#6a6050] hover:text-[#c8b898]'}`}
            style={tab === t.id ? { background: '#2D5016' } : { background: '#1a1205' }}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'pipeline' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="grid grid-cols-4 gap-2">
                {['interested','confirmed','paid','delivered'].map(status => {
                  const count = store.orders.filter(o => o.status === status).reduce((s,o) => s + o.quantity, 0);
                  return (
                    <div key={status} className="rounded-lg p-3 text-center" style={{ background: '#1a1205', border: `1px solid ${statusColors[status]}44` }}>
                      <div className="font-bold text-lg" style={{ color: statusColors[status] }}>{count}</div>
                      <div className="text-[#6a6050] text-[9px] capitalize">{status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button onClick={() => setShowOrderForm(!showOrderForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
              style={{ background: '#2D5016', color: '#F5F0E8' }}>
              <Plus size={14} /> Add Order
            </button>
          </div>

          {showOrderForm && <OrderForm store={store} updateStore={updateStore} onClose={() => setShowOrderForm(false)} />}

          <div className="space-y-2">
            {[...store.orders].reverse().map(order => {
              const customer = store.customers.find(c => c.id === order.customerId);
              return (
                <div key={order.id} className="rounded-lg p-4 flex items-center justify-between"
                  style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
                  <div>
                    <div className="text-[#F5F0E8] text-sm font-semibold">{customer?.name || 'Unknown'}</div>
                    <div className="text-[#8a8070] text-xs">{order.quantity} {order.type} birds · K{order.pricePerUnit}/bird · {order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#F5F0E8] font-bold text-sm">K{order.total.toLocaleString()}</div>
                    <div className="text-xs px-2 py-0.5 rounded mt-1 capitalize font-medium" style={{ background: `${statusColors[order.status]}22`, color: statusColors[order.status] }}>{order.status}</div>
                  </div>
                </div>
              );
            })}
            {store.orders.length === 0 && <div className="text-[#4a4030] text-center py-8 text-sm">No orders yet. Start building your pre-order list!</div>}
          </div>
        </div>
      )}

      {tab === 'customers' && (
        <div className="space-y-3">
          {store.customers.map(c => (
            <div key={c.id} className="rounded-xl p-4" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#2D5016' }}>
                  <User size={14} className="text-[#F5F0E8]" />
                </div>
                <div>
                  <div className="text-[#F5F0E8] font-semibold text-sm">{c.name}</div>
                  <div className="text-[#8a8070] text-xs">{c.phone} · {c.preferredCut}</div>
                </div>
              </div>
            </div>
          ))}
          {store.customers.length === 0 && <div className="text-[#4a4030] text-center py-8 text-sm">No customers yet. Add your first buyer.</div>}
        </div>
      )}

      {tab === 'advisor' && (
        <div className="flex flex-col" style={{ height: 'calc(100vh - 350px)' }}>
          <div className="flex-1 overflow-y-auto space-y-3 mb-3">
            {aiChat.length === 0 && (
              <div className="space-y-2 py-4">
                {['How should I price this batch?','Generate a WhatsApp broadcast to my buyers','How do I build a pre-order list?','What margin can I expect on dressed birds?'].map((q, i) => (
                  <button key={i} onClick={() => setAiInput(q)}
                    className="w-full text-left p-3 rounded-lg text-xs text-[#8a8070] hover:text-[#c8b898]"
                    style={{ background: '#1a1205', border: '1px solid #2a2010' }}>"{q}"</button>
                ))}
              </div>
            )}
            {aiChat.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${m.role === 'user' ? 'text-[#F5F0E8]' : 'text-[#c8b898]'}`}
                  style={m.role === 'user' ? { background: '#2D5016' } : { background: '#1a1205', border: '1px solid #2a2010' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {aiLoading && <div className="flex justify-start"><div className="rounded-xl px-4 py-3" style={{ background: '#1a1205', border: '1px solid #2a2010' }}><Loader size={14} className="animate-spin text-[#4A7C24]" /></div></div>}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-2">
            <input value={aiInput} onChange={e => setAiInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendAI()}
              placeholder="Ask your sales advisor..." className="flex-1 bg-[#1a1205] border border-[#2a2010] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
            <button onClick={sendAI} disabled={aiLoading || !aiInput.trim()} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#2D5016' }}>
              {aiLoading ? <Loader size={14} className="animate-spin text-white" /> : <Send size={14} className="text-white" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function OrderForm({ store, updateStore, onClose }: { store: FarmStore; updateStore: any; onClose: () => void }) {
  const [form, setForm] = useState({ customerName: '', customerPhone: '', date: format(new Date(), 'yyyy-MM-dd'), quantity: 0, type: 'dressed' as 'live'|'dressed', unitPrice: 0, status: 'confirmed' as Order['status'], batch: 'A' as Order['batch'], notes: '' });
  const submit = () => {
    // Auto-create customer
    let customerId = store.customers.find(c => c.name === form.customerName)?.id;
    let newCustomers = store.customers;
    if (!customerId) {
      const newCustomer: Customer = { id: Date.now().toString(), name: form.customerName, phone: form.customerPhone, location: '', preferredCut: form.type === 'live' ? 'live' : 'dressed', notes: '' };
      newCustomers = [...store.customers, newCustomer];
      customerId = newCustomer.id;
    }
    const order: Order = { id: Date.now().toString(), customerId, date: form.date, quantity: form.quantity, type: form.type, pricePerUnit: form.unitPrice, total: form.quantity * form.unitPrice, status: form.status, batch: form.batch, notes: form.notes };
    updateStore({ orders: [...store.orders, order], customers: newCustomers });
    onClose();
  };
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: '#1e1a0f', border: '1px solid #3a3020' }}>
      <div className="text-[#F5F0E8] text-sm font-semibold">Add Order</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Customer Name', key: 'customerName', type: 'text' },
          { label: 'Phone', key: 'customerPhone', type: 'text' },
          { label: 'Date', key: 'date', type: 'date' },
          { label: 'Quantity (birds)', key: 'quantity', type: 'number' },
          { label: 'Price per Bird (K)', key: 'unitPrice', type: 'number' },
        ].map(f => (
          <div key={f.key}>
            <label className="text-[#6a6050] text-xs block mb-1">{f.label}</label>
            <input type={f.type} value={(form as any)[f.key]}
              onChange={e => setForm(p => ({ ...p, [f.key]: f.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value }))}
              className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none" />
          </div>
        ))}
        <div>
          <label className="text-[#6a6050] text-xs block mb-1">Type</label>
          <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value as any }))}
            className="w-full bg-[#0f0d09] border border-[#2a2010] rounded-lg px-3 py-2 text-[#F5F0E8] text-sm focus:border-[#4A7C24] outline-none">
            <option value="dressed">Dressed</option><option value="live">Live</option>
          </select>
        </div>
      </div>
      <div className="text-[#4A7C24] text-sm">Total: K{(form.quantity * form.unitPrice).toLocaleString()}</div>
      <div className="flex gap-2">
        <button onClick={submit} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#2D5016', color: '#F5F0E8' }}>Save</button>
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-[#6a6050]" style={{ background: '#1a1205' }}>Cancel</button>
      </div>
    </div>
  );
}
