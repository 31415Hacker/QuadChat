import { Lightbulb, Megaphone, MessageCircle, Plus } from "lucide-react";
import { CHANNELS } from "../constants.js";
import { dmPartnerId, getDmPartnerName, getInitials } from "../utils/names.js";

export default function ChannelSidebar({
  activeChannel,
  setActiveChannel,
  dmChannels,
  profiles,
  sessionUserId,
  setShowNewDm
}) {
  const activeChannelLabel = CHANNELS.find((channel) => channel.id === activeChannel)?.label ||
    getDmPartnerName(dmChannels.find((dm) => dm.id === activeChannel), profiles, sessionUserId) ||
    "Channel";

  return (
    <aside className="channel-sidebar" aria-label="Channels">
      <div className="channel-sidebar-current" title={activeChannelLabel}>
        <span>Current channel</span>
        <strong>{activeChannelLabel}</strong>
      </div>
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
              const partnerId = dmPartnerId(dm.id, sessionUserId, dm);
              const partnerName = getDmPartnerName(dm, profiles, sessionUserId);
              const partnerProfile = profiles[partnerId];
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
                    {partnerProfile?.photoURL ? (
                      <img src={partnerProfile.photoURL} alt="" />
                    ) : (
                      getInitials(partnerName)
                    )}
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
