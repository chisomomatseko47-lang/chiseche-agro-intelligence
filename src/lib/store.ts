import { FarmStore, EMPTY_STORE, ReminderItem, ChecklistItem } from './types';
import { differenceInDays, addDays, format, parseISO } from 'date-fns';

const STORAGE_KEY = 'chisecheAgro';

export function loadStore(): FarmStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STORE };
    return { ...EMPTY_STORE, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY_STORE };
  }
}

export function saveStore(store: FarmStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getBatchDay(startDate: string): number {
  const start = parseISO(startDate);
  const today = new Date();
  const diff = differenceInDays(today, start);
  return Math.max(1, diff + 1);
}

export function getGrowthPhase(day: number): { week: number; name: string; color: string } {
  if (day <= 7) return { week: 1, name: 'Gut Development Phase', color: '#4A7C24' };
  if (day <= 14) return { week: 2, name: 'Frame Building Phase', color: '#5a8c2e' };
  if (day <= 21) return { week: 3, name: 'Rapid Growth Phase', color: '#D4831A' };
  if (day <= 28) return { week: 4, name: 'Fattening Phase', color: '#c4730a' };
  if (day <= 35) return { week: 5, name: 'Finish Line', color: '#2D5016' };
  return { week: 6, name: 'Market Ready', color: '#1A1205' };
}

export function getTargetWeight(day: number): number {
  // grams
  if (day <= 7) return 200;
  if (day <= 14) return 380;
  if (day <= 21) return 1150;
  if (day <= 28) return 1350;
  if (day <= 35) return 2200;
  return 2500;
}

export function getTemperatureTarget(day: number): string {
  if (day <= 7) return '33–35°C';
  if (day <= 14) return '30–31°C';
  if (day <= 21) return '27–28°C';
  if (day <= 28) return '24–25°C';
  if (day <= 35) return '22–24°C';
  return '22°C';
}

export function getFeedPhase(day: number): string {
  if (day <= 10) return 'Pre-Starter Crumbles';
  if (day <= 24) return 'Novatek Super Broiler Starter';
  return 'Novatek Super Broiler Finisher Pellets';
}

export function getDailyTasks(day: number): { task: string; category: string; critical?: boolean }[] {
  const common = [
    { task: 'Morning temperature check at chick height (5cm off floor)', category: 'Temperature' },
    { task: 'Evening temperature check and log', category: 'Temperature' },
    { task: 'Log feed consumption', category: 'Feed' },
    { task: 'Change and clean all drinkers', category: 'Water' },
    { task: 'Count and log any mortalities', category: 'Health' },
    { task: 'Visual litter condition check (dry/damp/wet)', category: 'Litter' },
  ];

  const byDay: { [key: number]: { task: string; category: string; critical?: boolean }[] } = {
    1: [
      { task: '🔴 WATER FIRST: Vitamin water only for 2–3 hours before first feed', category: 'Critical', critical: true },
      { task: 'Dip each chick\'s beak in water before placing in brooder', category: 'Critical', critical: true },
      { task: 'Set up 3–4 brooding circles (~3m diameter each)', category: 'Setup' },
      { task: 'Add Unilac Stress Pack / Vitabiotics to drinking water', category: 'Water' },
      { task: 'Confirm house temperature 33–35°C at floor level', category: 'Temperature', critical: true },
      { task: 'Place Pre-Starter crumbles on flat cardboard tray feeders', category: 'Feed' },
      { task: '24-hour bright lighting ON (20–30 lux)', category: 'Lighting' },
    ],
    3: [
      { task: 'Remove cardboard tray feeders (prevent mold) — switch to tube feeders', category: 'Feed' },
    ],
    7: [
      { task: '💉 VACCINATION: Newcastle Disease (Lasota) + Infectious Bronchitis in water', category: 'Vaccine', critical: true },
      { task: 'Withdraw water 1 hour before vaccine dose', category: 'Vaccine', critical: true },
      { task: 'Ensure all vaccine water drunk within 1–2 hours', category: 'Vaccine' },
      { task: '📊 WEIGHT CHECK: Weigh 5 random birds. Target: ~200g', category: 'Weight' },
    ],
    8: [
      { task: 'Reduce temperature target to 30–31°C', category: 'Temperature' },
      { task: 'Begin feed transition: 50% Pre-Starter / 50% Novatek Starter', category: 'Feed' },
      { task: 'Remove vitamin packs — plain clean water only from today', category: 'Water' },
      { task: 'Raise feeders and drinkers to back-height of birds', category: 'Management' },
    ],
    10: [
      { task: '💊 ANTI-COCCIDIAL: Toltrazuril or Amprolium in water (vet dosage) — PREVENTATIVE', category: 'Medication', critical: true },
      { task: 'Switch to 100% Novatek Super Broiler Starter', category: 'Feed' },
    ],
    12: [
      { task: '💉 VACCINATION: Gumboro IBD vaccine in drinking water (CRUCIAL in Zambia)', category: 'Vaccine', critical: true },
      { task: 'Withdraw water 1 hour before vaccine dose', category: 'Vaccine', critical: true },
    ],
    14: [
      { task: 'Remove brooding circles — expand living space', category: 'Management' },
      { task: '📊 WEIGHT CHECK: Weigh 5 birds. Target: ~350g', category: 'Weight' },
    ],
    18: [
      { task: '💉 VACCINATION: Newcastle Disease (Lasota) BOOSTER in water', category: 'Vaccine', critical: true },
      { task: 'Withdraw water 1 hour before vaccine dose', category: 'Vaccine' },
    ],
    21: [
      { task: '📊 WEIGHT CHECK: Weigh 5 birds. Target: 1.1–1.2kg. ALERT if <900g!', category: 'Weight', critical: true },
      { task: 'Switch lighting to 20 hours (off midnight–4 AM)', category: 'Lighting' },
      { task: 'Litter deep-check — turn and add fresh shavings where damp', category: 'Litter' },
    ],
    22: [
      { task: 'Reduce temperature to 24–25°C — charcoal only at night now', category: 'Temperature' },
      { task: 'Begin feed transition: 50% Starter / 50% Novatek Finisher Pellets', category: 'Feed' },
    ],
    24: [
      { task: 'Switch to 100% Novatek Super Broiler Finisher Pellets', category: 'Feed' },
      { task: '🔑 FEED PUSH: Ensure feeders 100% full at 4–6 PM (peak eating window)', category: 'Feed', critical: true },
    ],
    25: [
      { task: '💊 ANTI-COCCIDIAL: Second dose — Toltrazuril or Amprolium in water', category: 'Medication', critical: true },
    ],
    28: [
      { task: '📊 WEIGHT CHECK: Weigh 5 birds. Target: 1.2–1.4kg', category: 'Weight' },
      { task: '📢 SALES: Begin identifying buyers and confirming orders', category: 'Sales' },
      { task: 'Plan harvest allocation per buyer', category: 'Sales' },
    ],
    29: [
      { task: 'Switch lighting to 18 hours (off 10 PM–4 AM)', category: 'Lighting' },
      { task: 'No charcoal during the day — only at night if very cold', category: 'Temperature' },
    ],
    33: [
      { task: '🔴 STOP ALL MEDICATIONS AND ANTIBIOTICS — withdrawal period begins', category: 'Critical', critical: true },
      { task: 'Withdrawal period: 5–7 days. Target slaughter Day 36–38.', category: 'Critical', critical: true },
    ],
    35: [
      { task: '📊 FINAL WEIGHT CHECK: Weigh 5 birds. Target: 2.0–2.3kg', category: 'Weight' },
      { task: '📢 Confirm full buyer list and quantities', category: 'Sales', critical: true },
      { task: 'Begin marketing + advertising the harvest (WhatsApp/Facebook)', category: 'Marketing' },
      { task: 'Book or prepare slaughter area / equipment / processor', category: 'Management' },
    ],
    36: [
      { task: '🔴 CATCHING: At night only (10–11 PM). Dim solar lights.', category: 'Harvest', critical: true },
      { task: 'Hold birds by LEGS ONLY — never wings (wing breaks = downgrade)', category: 'Harvest', critical: true },
      { task: 'Withhold feed 6–8 hours before slaughter (water continues)', category: 'Harvest' },
      { task: 'Confirm transport ventilation is adequate', category: 'Harvest' },
    ],
  };

  const weeklyTasks: { [week: number]: { task: string; category: string }[] } = {
    4: [{ task: '🔑 4–6 PM FEED PUSH: Ensure feeders 100% full — peak weight-building window', category: 'Feed' }],
    5: [{ task: '🔑 4–6 PM FEED PUSH: Ensure feeders 100% full — peak weight-building window', category: 'Feed' }],
    6: [{ task: '🔑 4–6 PM FEED PUSH: Ensure feeders 100% full', category: 'Feed' }],
  };

  const phase = getGrowthPhase(day);
  const tasks = [...common];
  if (byDay[day]) tasks.push(...byDay[day]);
  if (day >= 22 && weeklyTasks[phase.week]) tasks.push(...weeklyTasks[phase.week]);

  // Night check reminder for weeks 1-2
  if (day <= 14) {
    tasks.push({ task: '🌙 NIGHT CHECK (10 PM–2 AM): 90%+ birds must be awake and eating', category: 'Critical', critical: true } as { task: string; category: string; critical?: boolean });
  }

  return tasks;
}

export function generateSystemReminders(startDate: string): ReminderItem[] {
  const start = parseISO(startDate);
  const makeDate = (day: number) => format(addDays(start, day - 1), 'yyyy-MM-dd');

  const reminders: ReminderItem[] = [
    { id: 'sys-vacc-1', title: 'Day 7: Newcastle + IB Vaccine in water (withdraw 1hr first)', dueDate: makeDate(7), category: 'vaccination', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-cocci-1', title: 'Day 10: Anti-coccidial (Toltrazuril/Amprolium) in water — PREVENTATIVE', dueDate: makeDate(10), category: 'medication', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-vacc-2', title: 'Day 12–14: Gumboro IBD Vaccine in water — CRUCIAL in Zambia', dueDate: makeDate(12), category: 'vaccination', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-vacc-3', title: 'Day 18: Newcastle Disease Booster (Lasota) in water', dueDate: makeDate(18), category: 'vaccination', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-wt-3', title: 'Day 21: Weekly weight check — target 1.1–1.2kg (ALERT if <900g)', dueDate: makeDate(21), category: 'management', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-cocci-2', title: 'Day 25: Second anti-coccidial dose (Toltrazuril/Amprolium)', dueDate: makeDate(25), category: 'medication', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-wt-4', title: 'Day 28: Weight check target 1.2–1.4kg + begin buyer outreach', dueDate: makeDate(28), category: 'management', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-meds-stop', title: '⚠️ Day 33: STOP ALL MEDICATIONS — withdrawal period starts', dueDate: makeDate(33), category: 'medication', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-wt-5', title: 'Day 35: Final weight check + confirm all buyers', dueDate: makeDate(35), category: 'management', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-harvest', title: 'Day 36–38: HARVEST WEEK — night catching, legs only, no wings', dueDate: makeDate(36), category: 'management', batch: 'A', completed: false, isSystem: true },
    { id: 'sys-goat-deworm', title: 'Goat deworming (rotate: Albendazole → Levamisole → Ivermectin)', dueDate: format(addDays(new Date(), 7), 'yyyy-MM-dd'), category: 'medication', batch: 'goats', recurrence: 'monthly', completed: false, isSystem: true },
    { id: 'sys-goat-hoof', title: 'Goat hoof check (overgrowth, foot rot)', dueDate: format(addDays(new Date(), 3), 'yyyy-MM-dd'), category: 'management', batch: 'goats', recurrence: 'weekly', completed: false, isSystem: true },
  ];

  return reminders;
}

export function generateTodayChecklist(startDate: string): { task: string; category: string; critical?: boolean }[] {
  const batchDay = getBatchDay(startDate);
  const tasks = getDailyTasks(batchDay);
  // Add goat tasks
  tasks.push(
    { task: 'Goats: Fresh water check', category: 'Goats' },
    { task: 'Goats: Morning feed — hay/browse', category: 'Goats' },
    { task: 'Goats: Visual health check (eyes, nose, posture)', category: 'Goats' },
  );
  return tasks;
}
