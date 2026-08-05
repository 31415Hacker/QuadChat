import { Plus, Trash2 } from "lucide-react";
import { SCHEDULE_DAYS } from "../utils/schedule.js";

export default function ScheduleEditor({ schedule, setSchedule }) {
  const updateDay = (day, field, value) => {
    setSchedule((current) => ({
      ...current,
      weekly: {
        ...current.weekly,
        [day]: { ...current.weekly[day], [field]: value }
      }
    }));
  };

  const addOverride = () => {
    setSchedule((current) => ({
      ...current,
      overrides: [
        ...current.overrides,
        { date: "", start: "09:00", end: "17:00", enabled: true }
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
              <label>
                <input
                  checked={day.enabled}
                  onChange={(event) => updateDay(key, "enabled", event.target.checked)}
                  type="checkbox"
                />
                <span>{label}</span>
              </label>
              <input
                aria-label={`${label} start time`}
                disabled={!day.enabled}
                onChange={(event) => updateDay(key, "start", event.target.value)}
                type="time"
                value={day.start}
              />
              <span className="schedule-separator">to</span>
              <input
                aria-label={`${label} end time`}
                disabled={!day.enabled}
                onChange={(event) => updateDay(key, "end", event.target.value)}
                type="time"
                value={day.end}
              />
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
          <p className="settings-note">No changes for specific days.</p>
        ) : schedule.overrides.map((override, index) => (
          <div className="schedule-override" key={`${override.date}-${index}`}>
            <input
              aria-label="Schedule exception date"
              onChange={(event) => updateOverride(index, "date", event.target.value)}
              type="date"
              value={override.date}
            />
            <input
              aria-label="Schedule exception start time"
              onChange={(event) => updateOverride(index, "start", event.target.value)}
              type="time"
              value={override.start}
            />
            <span className="schedule-separator">to</span>
            <input
              aria-label="Schedule exception end time"
              onChange={(event) => updateOverride(index, "end", event.target.value)}
              type="time"
              value={override.end}
            />
            <button type="button" className="schedule-remove" onClick={() => removeOverride(index)} aria-label="Remove date change">
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
