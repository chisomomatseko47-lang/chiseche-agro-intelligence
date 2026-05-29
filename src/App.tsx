import { useState, useEffect } from 'react';
import { FarmStore, EMPTY_STORE } from './lib/types';
import { loadStore, saveStore, generateSystemReminders, getBatchDay } from './lib/store';
import Sidebar from './components/Sidebar';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import Operations from './components/Operations';
import Accounting from './components/Accounting';
import Sales from './components/Sales';
import BrandHub from './components/BrandHub';
import Marketing from './components/Marketing';
import ContentCreation from './components/ContentCreation';
import SocialMedia from './components/SocialMedia';
import Playbook from './components/Playbook';
import AIAdvisor from './components/AIAdvisor';

export type NavModule = 'dashboard' | 'operations' | 'accounting' | 'sales' | 'brand' | 'marketing' | 'content' | 'social' | 'playbook' | 'advisor';

export default function App() {
  const [store, setStore] = useState<FarmStore>(EMPTY_STORE);
  const [activeModule, setActiveModule] = useState<NavModule>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const loaded = loadStore();
    if (loaded.settings.onboardingComplete && loaded.reminders.filter(r => r.isSystem).length === 0) {
      loaded.reminders = [...loaded.reminders, ...generateSystemReminders(loaded.settings.batchAStartDate)];
    }
    setStore(loaded);
  }, []);

  const updateStore = (updates: Partial<FarmStore>) => {
    setStore(prev => {
      const next = { ...prev, ...updates };
      saveStore(next);
      return next;
    });
  };

  const handleOnboardingComplete = (settings: FarmStore['settings']) => {
    const reminders = generateSystemReminders(settings.batchAStartDate);
    const newStore = { ...store, settings: { ...settings, onboardingComplete: true }, reminders };
    setStore(newStore);
    saveStore(newStore);
  };

  if (!store.settings.onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const batchDay = getBatchDay(store.settings.batchAStartDate);

  return (
    <div className="flex h-screen bg-[#0f0d09] overflow-hidden" style={{fontFamily: "'DM Sans', sans-serif"}}>
      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        batchDay={batchDay}
        store={store}
      />
      <main className="flex-1 overflow-auto">
        {activeModule === 'dashboard' && <Dashboard store={store} updateStore={updateStore} batchDay={batchDay} setActiveModule={setActiveModule} />}
        {activeModule === 'operations' && <Operations store={store} updateStore={updateStore} batchDay={batchDay} />}
        {activeModule === 'accounting' && <Accounting store={store} updateStore={updateStore} />}
        {activeModule === 'sales' && <Sales store={store} updateStore={updateStore} />}
        {activeModule === 'brand' && <BrandHub store={store} updateStore={updateStore} />}
        {activeModule === 'marketing' && <Marketing store={store} updateStore={updateStore} batchDay={batchDay} />}
        {activeModule === 'content' && <ContentCreation store={store} updateStore={updateStore} />}
        {activeModule === 'social' && <SocialMedia store={store} updateStore={updateStore} />}
        {activeModule === 'playbook' && <Playbook store={store} updateStore={updateStore} batchDay={batchDay} />}
        {activeModule === 'advisor' && <AIAdvisor store={store} updateStore={updateStore} batchDay={batchDay} />}
      </main>
    </div>
  );
}
