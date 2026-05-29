import { NavModule } from '../App';
import { FarmStore } from '../lib/types';
import { getGrowthPhase } from '../lib/store';
import { format } from 'date-fns';
import {
  LayoutDashboard, Settings2, Calculator, ShoppingCart,
  Palette, TrendingUp, FileText, Share2, BookOpen, Bot,
  ChevronLeft, ChevronRight, Leaf
} from 'lucide-react';

interface SidebarProps {
  activeModule: NavModule;
  setActiveModule: (m: NavModule) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  batchDay: number;
  store: FarmStore;
}

const navItems: { id: NavModule; label: string; icon: any; shortLabel: string }[] = [
  { id: 'dashboard', label: 'Command Center', shortLabel: 'Home', icon: LayoutDashboard },
  { id: 'operations', label: 'Operations', shortLabel: 'Ops', icon: Settings2 },
  { id: 'accounting', label: 'Accounting', shortLabel: 'Finance', icon: Calculator },
  { id: 'sales', label: 'Sales', shortLabel: 'Sales', icon: ShoppingCart },
  { id: 'playbook', label: 'Playbook', shortLabel: 'Guide', icon: BookOpen },
  { id: 'brand', label: 'Brand Hub', shortLabel: 'Brand', icon: Palette },
  { id: 'marketing', label: 'Marketing', shortLabel: 'Mktg', icon: TrendingUp },
  { id: 'content', label: 'Content', shortLabel: 'Create', icon: FileText },
  { id: 'social', label: 'Social Media', shortLabel: 'Social', icon: Share2 },
  { id: 'advisor', label: 'AI Advisor', shortLabel: 'AI', icon: Bot },
];

export default function Sidebar({ activeModule, setActiveModule, isOpen, setIsOpen, batchDay, store }: SidebarProps) {
  const phase = getGrowthPhase(batchDay);
  const totalMortality = store.mortalityLogs.reduce((s, l) => s + l.count, 0);
  const mortalityPct = ((totalMortality / 1000) * 100).toFixed(1);

  return (
    <aside className={`relative flex flex-col transition-all duration-300 ${isOpen ? 'w-56' : 'w-16'} flex-shrink-0`}
      style={{ background: 'linear-gradient(180deg, #1a1205 0%, #0f0d09 100%)', borderRight: '1px solid #2a2010' }}>

      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#2a2010]">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)' }}>
          <Leaf size={16} className="text-[#F5F0E8]" />
        </div>
        {isOpen && (
          <div>
            <div className="text-[#F5F0E8] font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Chiseche Agro</div>
            <div className="text-[#D4831A] text-[10px] font-medium tracking-wide">INTELLIGENCE</div>
          </div>
        )}
      </div>

      {/* Batch Status Badge */}
      {isOpen && (
        <div className="mx-3 mt-3 mb-1 rounded-lg p-3" style={{ background: '#1e1a0f', border: '1px solid #2a2010' }}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#D4831A] text-[10px] font-bold tracking-widest uppercase">Batch A</span>
            <span className="text-[#F5F0E8] text-[10px] font-mono">Day {batchDay}/38</span>
          </div>
          <div className="w-full bg-[#2a2010] rounded-full h-1.5 mb-2">
            <div className="h-1.5 rounded-full transition-all" style={{
              width: `${Math.min(100, (batchDay / 38) * 100)}%`,
              background: 'linear-gradient(90deg, #4A7C24, #D4831A)'
            }} />
          </div>
          <div className="text-[#8a8070] text-[9px]">{phase.name}</div>
          <div className="flex justify-between mt-1">
            <span className="text-[#8a8070] text-[9px]">Mortality</span>
            <span className={`text-[9px] font-mono ${parseFloat(mortalityPct) > 3 ? 'text-red-400' : 'text-[#4A7C24]'}`}>{mortalityPct}%</span>
          </div>
        </div>
      )}

      {/* Nav Items */}
      <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left group ${
                isActive
                  ? 'text-[#F5F0E8]'
                  : 'text-[#8a8070] hover:text-[#c8b898]'
              }`}
              style={isActive ? {
                background: 'linear-gradient(90deg, rgba(74,124,36,0.25), rgba(212,131,26,0.1))',
                borderLeft: '2px solid #4A7C24'
              } : {
                borderLeft: '2px solid transparent'
              }}
            >
              <Icon size={16} className={`flex-shrink-0 ${isActive ? 'text-[#4A7C24]' : 'text-[#6a6050] group-hover:text-[#D4831A]'}`} />
              {isOpen && (
                <span className="text-xs font-medium">{item.label}</span>
              )}
              {item.id === 'advisor' && isOpen && (
                <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded" style={{ background: '#2D5016', color: '#90c060' }}>AI</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="px-4 py-3 border-t border-[#2a2010]">
          <div className="text-[#4a4030] text-[9px] text-center">
            {format(new Date(), 'EEE d MMM yyyy')}
          </div>
          <div className="text-[#4a4030] text-[9px] text-center mt-0.5">
            {store.settings.farmLocation}
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full flex items-center justify-center border border-[#2a2010] hover:border-[#4A7C24] transition-colors z-10"
        style={{ background: '#1a1205' }}
      >
        {isOpen ? <ChevronLeft size={12} className="text-[#8a8070]" /> : <ChevronRight size={12} className="text-[#8a8070]" />}
      </button>
    </aside>
  );
}
