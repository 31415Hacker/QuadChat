import { useMemo } from "react";
import { BarChart3, Plus } from "lucide-react";

export default function PollCard({ poll, sessionUserId, onVote }) {
  const votes = poll.pollVotes || {};
  const mine = Array.isArray(votes[sessionUserId]) ? votes[sessionUserId] : [];
  const counts = useMemo(() => poll.pollOptions.map((_, index) => Object.values(votes).filter((choices) => Array.isArray(choices) && choices.includes(index)).length), [poll.pollOptions, votes]);
  const total = Object.keys(votes).length;
  const maxCount = Math.max(...counts, 1);
  return <section className="poll-card">
    <header><span className="poll-card-icon"><BarChart3 size={17} /></span><strong>{poll.pollQuestion}</strong></header>
    <div className="poll-options">
      {poll.pollOptions.map((option, index) => <button key={`${option}-${index}`} type="button" className={mine.includes(index) ? "poll-option poll-option--mine" : "poll-option"} onClick={() => onVote(poll, index)}>
        <span className="poll-option-fill" style={{ width: `${(counts[index] / maxCount) * 100}%` }} /><span className="poll-option-label">{option}</span><b>{counts[index]}</b>
      </button>)}
    </div>
    {poll.pollAllowCustom ? <button className="poll-custom-button" type="button" onClick={() => { const response = window.prompt("Your response"); if (response?.trim()) onVote(poll, `custom:${response.trim().slice(0, 120)}`); }}><Plus size={15} /> Add custom response</button> : null}
    <footer>{total} voter{total === 1 ? "" : "s"}<span>Choose up to {poll.pollMaxChoices || 1}</span></footer>
  </section>;
}
