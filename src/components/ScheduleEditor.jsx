import { Plus, Trash2 } from "lucide-react";
import { SCHEDULE_DAYS } from "../utils/schedule.js";

export default function ScheduleEditor({ schedule, setSchedule }) {
  const updateDay = (day, value) => {
    setSchedule((current) => ({
      ...current,
      weekly: {
        ...current.weekly, [day]: value
      }
    }));
  };

  const updateDaySlot = (day, index, field, value) => {
    updateDay(day, {
      ...schedule.weekly[day],
      slots: schedule.weekly[day].slots.map((slot, slotIndex) =>
        slotIndex === index ? { ...slot, [field]: value } : slot
      )
    });
  };

  const addDaySlot = (day) => {
    const currentDay = schedule.weekly[day];
    if (currentDay.slots.length >= 8) return;
    updateDay(day, {
      ...currentDay,
      enabled: true,
      slots: [...currentDay.slots, { start: "18:00", end: "21:00" }]
    });
  };

  const removeDaySlot = (day, index) => {
    const currentDay = schedule.weekly[day];
    updateDay(day, {
      ...currentDay,
      slots: currentDay.slots.filter((_, slotIndex) => slotIndex !== index)
    });
  };

  const addOverride = () => {
    setSchedule((current) => ({
        ...current,
        overrides: [
          ...current.overrides,
        { date: "", slots: [{ start: "09:00", end: "17:00" }], enabled: true }
      ].slice(0, 31)
    }));
  };

  const updateOverride = (index, field, value) => {
    setSchedule((current) => ({
      ...current,
      overrides: current.overrides.map((override, overrideIndex) =>
        overrideIndex === index ? { ...override, [field]: value } : override
      )
    }));
  };

  const removeOverride = (index) => {
    setSchedule((current) => ({
      ...current,
      overrides: current.overrides.filter((_, overrideIndex) => overrideIndex !== index)
    }));
  };

  const updateOverrideSlots = (index, slots) => {
    updateOverride(index, "slots", slots);
  };

  return (
    <section className="settings-section-box schedule-editor">
      <div className="schedule-editor-heading">
        <div>
          <h3>Schedule</h3>
          <p>Share when you are usually online and add date-specific changes.</p>
        </div>
        <span className="schedule-timezone">{schedule.timezone}</span>
      </div>
      <div className="schedule-weekly">
        {SCHEDULE_DAYS.map(({ key, label }) => {
          const day = schedule.weekly[key];
          return (
            <div className="schedule-day" key={key}>
              <div className="schedule-day-header">
              <label>
                <input
                  checked={day.enabled}
                  onChange={(event) => updateDay(key, { ...day, enabled: event.target.checked })}
                  type="checkbox"
                />
                <span>{label}</span>
              </label>
                <button type="button" onClick={() => addDaySlot(key)} disabled={!day.enabled || day.slots.length >= 8}>
                  <Plus size={14} />
                  <span>Add time</span>
                </button>
              </div>
              {day.enabled ? day.slots.map((slot, index) => (
                <div className="schedule-slot" key={`${key}-${index}`}>
                  <input aria-label={`${label} start time ${index + 1}`} onChange={(event) => updateDaySlot(key, index, "start", event.target.value)} type="time" value={slot.start} />
                  <span className="schedule-separator">to</span>
                  <input aria-label={`${label} end time ${index + 1}`} onChange={(event) => updateDaySlot(key, index, "end", event.target.value)} type="time" value={slot.end} />
                  <button className="schedule-remove" type="button" onClick={() => removeDaySlot(key, index)} disabled={day.slots.length === 1} aria-label={`Remove ${label} time ${index + 1}`}>
                    <Trash2 size={14} />
                  </button>
                </div>
              )) : <span className="schedule-offline">Offline</span>}
            </div>
          );
        })}
      </div>
      <div className="schedule-overrides">
        <div className="schedule-overrides-heading">
          <strong>Date-specific changes</strong>
          <button type="button" onClick={addOverride} disabled={schedule.overrides.length >= 31}>
            <Plus size={15} />
            <span>Add date</span>
          </button>
        </div>
        {schedule.overrides.length === 0 ? (
          <p className="schedule-empty">No changes for specific days.</p>
        ) : schedule.overrides.map((override, index) => (
          <div className="schedule-override" key={`${override.date}-${index}`}>
            <div className="schedule-override-header">
            <input
              aria-label="Schedule exception date"
              onChange={(event) => updateOverride(index, "date", event.target.value)}
              type="date"
              value={override.date}
            />
              <label className="schedule-override-toggle">
                <input checked={override.enabled !== false} onChange={(event) => updateOverride(index, "enabled", event.target.checked)} type="checkbox" />
                <span>Online</span>
              </label>
            <button type="button" className="schedule-remove" onClick={() => removeOverride(index)} aria-label="Remove date change">
              <Trash2 size={15} />
            </button>
            </div>
            {override.enabled !== false ? (
              <div className="schedule-override-slots">
                {override.slots.map((slot, slotIndex) => (
                  <div className="schedule-slot" key={`${override.date}-${slotIndex}`}>
                    <input aria-label="Schedule exception start time" onChange={(event) => updateOverrideSlots(index, override.slots.map((currentSlot, currentIndex) => currentIndex === slotIndex ? { ...currentSlot, start: event.target.value } : currentSlot))} type="time" value={slot.start} />
                    <span className="schedule-separator">to</span>
                    <input aria-label="Schedule exception end time" onChange={(event) => updateOverrideSlots(index, override.slots.map((currentSlot, currentIndex) => currentIndex === slotIndex ? { ...currentSlot, end: event.target.value } : currentSlot))} type="time" value={slot.end} />
                  </div>
                ))}
              </div>
            ) : <span className="schedule-offline">Offline all day</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
