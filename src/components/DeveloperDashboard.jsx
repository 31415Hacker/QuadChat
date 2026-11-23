const QUADCHAT_STARTED_AT = new Date("2026-09-14T12:42:08.000Z");

const services = [
  ["Vercel", "Web app and serverless APIs", "Live request, bandwidth, and function usage are not connected to QuadChat."],
  ["Firebase", "Authentication, Firestore, and Realtime Database", "Live Auth, Firestore, and RTDB quota usage are not connected to QuadChat."],
  ["Cloudflare", "Presence, moderation, and companion Durable Objects", "Live Worker and Durable Object analytics are not connected to QuadChat."],
  ["LiveKit Cloud", "Group-call media rooms", "Live participant, minute, and bandwidth usage are not connected to QuadChat."],
  ["Cloudinary", "Message, voice, and profile uploads", "Live storage and transformation usage are not connected to QuadChat."],
  ["Turnstile + PurgoMalum", "Signup CAPTCHA and profanity checks", "No usage telemetry is collected in QuadChat."],
  ["GitHub Actions", "Worker and Firebase-rules deployments", "Workflow-minute usage is available in GitHub, not QuadChat."]
];

const applicationLimits = [
  ["Message", "500 characters"],
  ["General / voice upload", "50 MB"],
  ["Profile image", "5 MB"],
  ["Group-call title", "50 characters"],
  ["Signup requests", "5 per email / hour"],
  ["Create or invite calls", "10 per user / minute"],
  ["Join a group call", "10 per user / minute; 30 per call / minute"],
  ["LiveKit token / call lease", "60 seconds / 90 seconds"],
  ["Call invite", "Expires after 1 hour"],
  ["Companion sessions", "3 per user"],
  ["Companion connections / messages", "10 connections / minute; 12 messages / minute"],
  ["Spam / duplicate baseline", "3 messages / second; 3 matching messages / 60 seconds"],
  ["Profanity auto-mute", "24 hours"],
  ["Spam mute escalation", "10 seconds through 24 hours"]
];

const cloudflareLimits = [
  ["Worker request quota", "Free: 100,000/day; Paid: unlimited"],
  ["Worker CPU", "Free: 10 ms/request; Paid: 30 sec default, configurable to 5 min"],
  ["Worker memory", "128 MB/isolate"],
  ["Worker subrequests", "Free: 50/request; Paid: 10,000/request"],
  ["Durable Object storage", "Free: 5 GB/account; SQLite object: 10 GB"],
  ["Durable Object WebSocket message", "32 MiB"],
  ["Durable Object throughput", "Soft limit of ~1,000 requests/second/object"]
];

function ageLabel() {
  const days = Math.max(0, Math.floor((Date.now() - QUADCHAT_STARTED_AT.getTime()) / 86_400_000));
  return `${days} day${days === 1 ? "" : "s"}`;
}

function StatTable({ rows }) {
  return (
    <dl className="developer-dashboard-table">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DashboardRestricted() {
  return (
    <main className="developer-dashboard developer-dashboard--restricted">
      <div className="developer-dashboard-card">
        <p className="developer-dashboard-eyebrow">QuadChat</p>
        <h1>Access restricted to a developer account.</h1>
      </div>
    </main>
  );
}

export default function DeveloperDashboard() {
  return (
    <main className="developer-dashboard">
      <header className="developer-dashboard-header">
        <div>
          <p className="developer-dashboard-eyebrow">Developer dashboard</p>
          <h1>QuadChat service overview</h1>
          <p>Configured limits and integration status. Provider usage is intentionally labeled when it is not collected by the app.</p>
        </div>
        <button className="ghost-button" onClick={() => { window.location.href = "/"; }} type="button">Back to QuadChat</button>
      </header>

      <section className="developer-dashboard-summary" aria-label="QuadChat summary">
        <article><span>Age</span><strong>{ageLabel()}</strong><small>Started September 14, 2026</small></article>
        <article><span>App version</span><strong>2.6.10</strong><small>Current release</small></article>
        <article><span>Worker objects</span><strong>3</strong><small>Presence, pairing, companion relay</small></article>
        <article><span>Live provider telemetry</span><strong>Not connected</strong><small>Use each provider dashboard for account usage</small></article>
      </section>

      <section className="developer-dashboard-section">
        <h2>Application limits</h2>
        <StatTable rows={applicationLimits} />
      </section>

      <section className="developer-dashboard-section">
        <div className="developer-dashboard-section-heading">
          <h2>Cloudflare platform limits</h2>
          <a href="https://developers.cloudflare.com/workers/platform/limits/" rel="noreferrer" target="_blank">Current documentation</a>
        </div>
        <StatTable rows={cloudflareLimits} />
      </section>

      <section className="developer-dashboard-section">
        <h2>Connected services</h2>
        <div className="developer-dashboard-services">
          {services.map(([name, purpose, usage]) => (
            <article className="developer-dashboard-card" key={name}>
              <h3>{name}</h3>
              <p>{purpose}</p>
              <small>{usage}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
