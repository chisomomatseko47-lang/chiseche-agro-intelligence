import { useState } from 'react';
import { FarmStore } from '../lib/types';
import { Leaf, ChevronRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: (settings: FarmStore['settings']) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    batchAStartDate: '2026-06-04',
    batch300Age: 28,
    goatDoes: 10,
    goatBucks: 2,
    goatKids: 3,
    openingBalance: 0,
    farmLocation: 'Chisamba, Zambia',
    onboardingComplete: false,
  });

  const steps = [
    {
      title: 'Welcome to Chiseche Agro Intelligence',
      subtitle: '"Grown with purpose. Raised with pride."',
      fields: null,
    },
    {
      title: 'Batch A: 1,000 Day-Old Chicks',
      subtitle: 'Set the arrival date for your new batch',
      fields: (
        <div className="space-y-4">
          <div>
            <label className="block text-[#8a8070] text-xs mb-1 uppercase tracking-wider">Chick Arrival Date</label>
            <input type="date" value={form.batchAStartDate}
              onChange={e => setForm(p => ({ ...p, batchAStartDate: e.target.value }))}
              className="w-full bg-[#1e1a0f] border border-[#2a2010] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#4A7C24] outline-none text-sm" />
            <p className="text-[#4a4030] text-xs mt-1">Default: June 4, 2026</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Existing 300-Bird Batch',
      subtitle: 'Tell us about your older flock',
      fields: (
        <div>
          <label className="block text-[#8a8070] text-xs mb-1 uppercase tracking-wider">Current Age (Days)</label>
          <input type="number" value={form.batch300Age} min={1} max={38}
            onChange={e => setForm(p => ({ ...p, batch300Age: parseInt(e.target.value) || 0 }))}
            className="w-full bg-[#1e1a0f] border border-[#2a2010] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#4A7C24] outline-none text-sm" />
        </div>
      ),
    },
    {
      title: 'Your Goat Herd (15 Total)',
      subtitle: 'Break down the herd composition',
      fields: (
        <div className="space-y-4">
          {[
            { key: 'goatDoes', label: 'Does (Females)', hint: 'Adult female goats' },
            { key: 'goatBucks', label: 'Bucks (Males)', hint: 'Adult male goats' },
            { key: 'goatKids', label: 'Kids (Young)', hint: 'Young goats' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-[#8a8070] text-xs mb-1 uppercase tracking-wider">{f.label}</label>
              <input type="number" value={(form as any)[f.key]} min={0}
                onChange={e => setForm(p => ({ ...p, [f.key]: parseInt(e.target.value) || 0 }))}
                className="w-full bg-[#1e1a0f] border border-[#2a2010] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#4A7C24] outline-none text-sm" />
              <p className="text-[#4a4030] text-xs mt-1">{f.hint}</p>
            </div>
          ))}
          <div className="rounded-lg p-3 text-center" style={{ background: '#1e1a0f', border: '1px solid #2a2010' }}>
            <span className="text-[#D4831A] text-sm font-bold">Total: {form.goatDoes + form.goatBucks + form.goatKids} goats</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Opening Cash Balance',
      subtitle: 'Starting capital for this cycle',
      fields: (
        <div className="space-y-4">
          <div>
            <label className="block text-[#8a8070] text-xs mb-1 uppercase tracking-wider">Opening Balance (ZMW)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a4030] text-sm">K</span>
              <input type="number" value={form.openingBalance} min={0}
                onChange={e => setForm(p => ({ ...p, openingBalance: parseFloat(e.target.value) || 0 }))}
                className="w-full bg-[#1e1a0f] border border-[#2a2010] rounded-lg px-4 py-3 pl-8 text-[#F5F0E8] focus:border-[#4A7C24] outline-none text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-[#8a8070] text-xs mb-1 uppercase tracking-wider">Farm Location</label>
            <input type="text" value={form.farmLocation}
              onChange={e => setForm(p => ({ ...p, farmLocation: e.target.value }))}
              className="w-full bg-[#1e1a0f] border border-[#2a2010] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#4A7C24] outline-none text-sm" />
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      onComplete({ ...form, onboardingComplete: true });
    }
  };

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: 'radial-gradient(ellipse at center, #1a1205 0%, #0a0805 100%)' }}>

      {/* Background texture */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #4A7C24 0, #4A7C24 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px'
      }} />

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
            style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)', boxShadow: '0 0 40px rgba(74,124,36,0.3)' }}>
            <Leaf size={28} className="text-[#F5F0E8]" />
          </div>
          <h1 className="text-[#F5F0E8] text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {currentStep.title}
          </h1>
          <p className="text-[#D4831A] text-sm">{currentStep.subtitle}</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-6" style={{ background: '#1a1205', border: '1px solid #2a2010' }}>
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-6">
            {steps.map((_, i) => (
              <div key={i} className={`rounded-full transition-all ${i === step ? 'w-6 h-2 bg-[#4A7C24]' : i < step ? 'w-2 h-2 bg-[#2D5016]' : 'w-2 h-2 bg-[#2a2010]'}`} />
            ))}
          </div>

          {step === 0 ? (
            <div className="text-center py-4">
              <div className="space-y-3 text-left mb-6">
                {[
                  '🐔 1,000 Day-Old Broiler Chicks — arriving June 4',
                  '🐔 300 Broilers — existing flock',
                  '🐐 15 Goats — mixed herd',
                  '📊 Full farm intelligence, reminders & AI advisor',
                  '🌍 Built for Zambian farmers',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: '#0f0d09' }}>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-6">{currentStep.fields}</div>
          )}

          <button onClick={handleNext}
            className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #2D5016, #4A7C24)', color: '#F5F0E8' }}>
            {step === steps.length - 1 ? 'Launch Chiseche Agro Intelligence' : 'Continue'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
