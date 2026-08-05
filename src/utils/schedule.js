export const SCHEDULE_DAYS = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" }
];

function defaultDay() {
  return { enabled: false, start: "09:00", end: "17:00" };
}

export function createDefaultSchedule(timezone = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return {
    timezone,
    weekly: Object.fromEntries(SCHEDULE_DAYS.map(({ key }) => [key, defaultDay()])),
    overrides: []
  };
}

export function normalizeSchedule(schedule) {
  const base = createDefaultSchedule(schedule?.timezone);
  if (!schedule || typeof schedule !== "object") return base;

  return {
    timezone: typeof schedule.timezone === "string" && schedule.timezone
      ? schedule.timezone
      : base.timezone,
    weekly: Object.fromEntries(
      SCHEDULE_DAYS.map(({ key }) => [
        key,
        {
          ...base.weekly[key],
          ...(schedule.weekly?.[key] || {})
        }
      ])
    ),
    overrides: Array.isArray(schedule.overrides)
      ? schedule.overrides.filter((override) => override && typeof override.date === "string").slice(0, 31)
      : []
  };
}
