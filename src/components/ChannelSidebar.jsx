import { Lightbulb, Megaphone, MessageCircle, Plus } from "lucide-react";
import { CHANNELS } from "../constants.js";
import { getDmPartnerName, getInitials } from "../utils/names.js";

export default function ChannelSidebar({
  activeChannel,
  setActiveChannel,
  dmChannels,
  profiles,
  sessionUserId,
  setShowNewDm
}) {
  return (
    <aside className="channel-sidebar" aria-label="Channels">
      <div
        className="channel-tabs"
        role="tablist"
        aria-label="Channels"
      >
        {CHANNELS.map((channel) => (
          <button
            aria-selected={activeChannel === channel.id}
            className={`channel-tab ${
              activeChannel === channel.id ? "active" : ""
            }`}
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            role="tab"
            type="button"
            title={channel.label}
          >
            {channel.id === "group" ? (
              <MessageCircle size={18} />
            ) : channel.id === "updates" ? (
              <Megaphone size={18} />
            ) : (
              <Lightbulb size={18} />
            )}
            <span>{channel.label}</span>
          </button>
        ))}
        <button
          className="channel-tab channel-tab-new-dm"
          type="button"
          onClick={() => setShowNewDm(true)}
          title="Start a private conversation"
        >
          <Plus size={18} />
          <span>New DM</span>
        </button>
        {dmChannels.length > 0 ? (
          <>
            <div className="dm-section-heading">Direct</div>
            {dmChannels.map((dm) => {
              const partnerName = getDmPartnerName(dm, profiles, sessionUserId);
              return (
                <button
                  aria-selected={activeChannel === dm.id}
                  className={`channel-tab ${
                    activeChannel === dm.id ? "active" : ""
                  }`}
                  key={dm.id}
                  onClick={() => setActiveChannel(dm.id)}
                  role="tab"
                  type="button"
                  title={partnerName}
                >
                  <span className="dm-tab-avatar">
                    {getInitials(partnerName)}
                  </span>
                  <span>{partnerName}</span>
                </button>
              );
            })}
          </>
        ) : null}
      </div>
    </aside>
  );
}
