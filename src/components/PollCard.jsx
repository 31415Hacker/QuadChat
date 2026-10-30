import { useMemo } from "react";

export default function PollCard({ poll, sessionUserId, onVote }) {
  const votes = poll.pollVotes || {};
  const mine = Array.isArray(votes[sessionUserId]) ? votes[sessionUserId] : [];
  const counts = useMemo(() => poll.pollOptions.map((_, index) => Object.values(votes).filter((choices) => Array.isArray(choices) && choices.includes(index)).length), [poll.pollOptions, votes]);
  const total = Object.keys(votes).length;
  return <section className="poll-card">
    <strong>{poll.pollQuestion}</strong>
    <div className="poll-options">
      {poll.pollOptions.map((option, index) => <button key={`${option}-${index}`} type="button" className={mine.includes(index) ? "poll-option poll-option--mine" : "poll-option"} onClick={() => onVote(poll, index)}>
        <span>{option}</span><b>{counts[index]}</b>
      </button>)}
    </div>
    {poll.pollAllowCustom ? <button type="button" onClick={() => { const response = window.prompt("Your response"); if (response?.trim()) onVote(poll, `custom:${response.trim().slice(0, 120)}`); }}>Add custom response</button> : null}
    <small>{total} voter{total === 1 ? "" : "s"} · choose up to {poll.pollMaxChoices || 1}{poll.pollAllowCustom ? " · custom responses allowed" : ""}</small>
  </section>;
}
