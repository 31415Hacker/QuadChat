import { useEffect, useState } from "react";
import appPackage from "../../package.json";

const QUADCHAT_STARTED_AT = new Date("2026-09-14T12:42:08.000Z");

const applicationLimits = [
  ["Message", "2,500 characters"],
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

function bytes(value) {
  if (value === null || value === undefined) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let amount = Number(value);
  let unit = 0;
  while (amount >= 1024 && unit < units.length - 1) { amount /= 1024; unit += 1; }
  return `${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${units[unit]}`;
}

function date(value) {
  return value ? new Date(value).toLocaleString() : "—";
}

function ProviderSection({ title, description, provider, children }) {
  return (
    <section className="developer-dashboard-section">
      <div className="developer-dashboard-section-heading">
        <div><h2>{title}</h2><p className="developer-dashboard-note">{description}</p></div>
        <span className={`developer-dashboard-status ${provider?.available ? "developer-dashboard-status--available" : ""}`}>
          {provider?.available ? "Connected" : "Not connected"}
        </span>
      </div>
      {provider?.available ? children : <p className="developer-dashboard-note">{provider?.reason || "No data is available."}</p>}
    </section>
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
  const [liveStats, setLiveStats] = useState(null);
  const [liveStatsError, setLiveStatsError] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { auth } = await import("../../firebase.js");
        const token = await auth.currentUser?.getIdToken();
        const response = await fetch("/api/dashboard-stats", { headers: { Authorization: `Bearer ${token || ""}` } });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not load live statistics.");
        if (active) setLiveStats(data);
      } catch (error) {
        if (active) setLiveStatsError(error.message || "Could not load live statistics.");
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <main className="developer-dashboard">
      <header className="developer-dashboard-header">
        <div>
          <p className="developer-dashboard-eyebrow">Developer dashboard</p>
          <h1>QuadChat service overview</h1>
          <p>Live application and provider data. Provider credentials stay server-side and are never returned to the browser.</p>
        </div>
        <button className="ghost-button" onClick={() => { window.location.href = "/"; }} type="button">Back to QuadChat</button>
      </header>

      <section className="developer-dashboard-summary" aria-label="QuadChat summary">
        <article><span>Age</span><strong>{ageLabel()}</strong><small>Started September 14, 2026</small></article>
        <article><span>App version</span><strong>{appPackage.version}</strong><small>Current release</small></article>
        <article><span>Worker objects</span><strong>3</strong><small>Presence, pairing, companion relay</small></article>
        <article><span>Provider data</span><strong>{liveStats ? "Updated" : "Loading"}</strong><small>{liveStats ? new Date(liveStats.asOf).toLocaleTimeString() : "Fetching server-side"}</small></article>
      </section>

      <section className="developer-dashboard-section">
        <h2>Live service statistics</h2>
        {liveStatsError ? <p className="developer-dashboard-note">{liveStatsError}</p> : null}
        {!liveStats && !liveStatsError ? <p className="developer-dashboard-note">Loading live statistics…</p> : null}
        {liveStats ? <>
          <p className="developer-dashboard-note">Updated {new Date(liveStats.asOf).toLocaleString()}.</p>
          <StatTable rows={[
            ["Firebase users", String(liveStats.firebase.users)],
            ["Firestore messages", String(liveStats.firebase.messages)],
            ["Configured group calls", String(liveStats.firebase.configuredCalls)],
            ["Moderation records", `${liveStats.firebase.badMessages} profanity; ${liveStats.firebase.spamIncidents} spam`],
            ["LiveKit", liveStats.livekit.available ? `${liveStats.livekit.activeRooms} active rooms; ${liveStats.livekit.participants} participants` : "Not connected"],
            ["Cloudinary", liveStats.cloudinary.available ? `${liveStats.cloudinary.resources?.usage ?? 0} resources; ${bytes(liveStats.cloudinary.storage?.usage)} stored` : "Not connected"]
          ]} />
        </> : null}
      </section>

      {liveStats ? <>
        <ProviderSection title="Firebase" description="Authentication, Firestore, and Realtime Database application data." provider={{ available: true }}>
          <StatTable rows={[
            ["Project", liveStats.firebase.projectId], ["Users", String(liveStats.firebase.users)],
            ["Messages", String(liveStats.firebase.messages)], ["Configured calls", String(liveStats.firebase.configuredCalls)],
            ["Moderation records", `${liveStats.firebase.badMessages} profanity; ${liveStats.firebase.spamIncidents} spam`]
          ]} />
        </ProviderSection>

        <ProviderSection title="Cloudinary" description="Media storage, bandwidth, transformations, and credits." provider={liveStats.cloudinary}>
          <StatTable rows={[
            ["Cloud", liveStats.cloudinary.cloudName], ["Plan", liveStats.cloudinary.plan || "—"],
            ["Storage", `${bytes(liveStats.cloudinary.storage?.usage)} of ${bytes(liveStats.cloudinary.storage?.limit)}`],
            ["Bandwidth", `${bytes(liveStats.cloudinary.bandwidth?.usage)} of ${bytes(liveStats.cloudinary.bandwidth?.limit)}`],
            ["Requests", `${Number(liveStats.cloudinary.requests?.usage || 0).toLocaleString()} of ${Number(liveStats.cloudinary.requests?.limit || 0).toLocaleString()}`],
            ["Resources", `${Number(liveStats.cloudinary.resources?.usage || 0).toLocaleString()} of ${Number(liveStats.cloudinary.resources?.limit || 0).toLocaleString()}`],
            ["Credits", liveStats.cloudinary.credits?.usage ?? "—"]
          ]} />
        </ProviderSection>

        <ProviderSection title="LiveKit Cloud" description="Current group-call rooms and participants." provider={liveStats.livekit}>
          <StatTable rows={[["Host", liveStats.livekit.host], ["Active rooms", String(liveStats.livekit.activeRooms)], ["Participants", String(liveStats.livekit.participants)]]} />
          {liveStats.livekit.rooms?.length ? <StatTable rows={liveStats.livekit.rooms.map((room) => [room.name, `${room.participants} participants · created ${date(room.createdAt)}`])} /> : <p className="developer-dashboard-note">No active rooms.</p>}
        </ProviderSection>

        <ProviderSection title="Cloudflare" description="Worker scripts and Turnstile configuration." provider={liveStats.cloudflare}>
          <StatTable rows={[["Account", liveStats.cloudflare.accountName], ["Worker scripts", String(liveStats.cloudflare.workerScriptCount)], ["Turnstile", liveStats.cloudflare.turnstileConfigured ? "Configured" : "Not configured"]]} />
          {liveStats.cloudflare.workerScripts?.length ? <StatTable rows={liveStats.cloudflare.workerScripts.map((script) => [script.name, `Last modified ${date(script.modifiedAt)}`])} /> : null}
        </ProviderSection>

        <ProviderSection title="Vercel" description="Project details and five most recent deployments." provider={liveStats.vercel}>
          <StatTable rows={[["Project", liveStats.vercel.project], ["Framework", liveStats.vercel.framework || "—"]]} />
          {liveStats.vercel.latestDeployments?.length ? <StatTable rows={liveStats.vercel.latestDeployments.map((deployment) => [deployment.url, `${deployment.target} · ${deployment.state} · ${date(deployment.createdAt)}`])} /> : null}
        </ProviderSection>

        <ProviderSection title="GitHub Actions" description="Deployment workflow state and latest workflow run." provider={liveStats.github}>
          <StatTable rows={[["Repository", liveStats.github.repository], ...(liveStats.github.workflows || []).map((workflow) => [workflow.name, workflow.lastRun ? `${workflow.lastRun.conclusion || workflow.lastRun.status} · ${date(workflow.lastRun.createdAt)}` : workflow.state])]} />
        </ProviderSection>

        <ProviderSection title="PurgoMalum" description="Profanity moderation service." provider={liveStats.purgomalum}>
          <StatTable rows={[["Endpoint", liveStats.purgomalum.endpoint], ["Usage telemetry", liveStats.purgomalum.telemetry]]} />
        </ProviderSection>
      </> : null}

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

    </main>
  );
}
