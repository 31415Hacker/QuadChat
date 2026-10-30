import { useState } from "react";
import { BarChart3, Plus, Trash2 } from "lucide-react";

export default function PollModal({ onClose, onCreate }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [maxChoices, setMaxChoices] = useState(1);
  const [allowCustom, setAllowCustom] = useState(false);
  const valid = question.trim() && options.filter((option) => option.trim()).length >= 2;
  return <div className="modal-backdrop"><form className="modal poll-modal" onSubmit={(event) => { event.preventDefault(); if (valid) onCreate({ question: question.trim(), options: options.map((option) => option.trim()).filter(Boolean), maxChoices: Math.max(1, Number(maxChoices) || 1), allowCustom }); }}>
    <header><span><BarChart3 size={20} /></span><div><h2>Create poll</h2><p>Ask the group and collect their picks.</p></div></header>
    <label className="poll-field"><span>Question</span><input autoFocus placeholder="What should we play tonight?" value={question} maxLength={250} onChange={(event) => setQuestion(event.target.value)} /></label>
    <div className="poll-modal-options"><span>Options <em>{options.length}/20</em></span>{options.map((option, index) => <div key={index}><input placeholder={`Option ${index + 1}`} value={option} maxLength={120} onChange={(event) => setOptions((current) => current.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} />{options.length > 2 ? <button aria-label="Remove option" type="button" onClick={() => setOptions((current) => current.filter((_, itemIndex) => itemIndex !== index))}><Trash2 size={16} /></button> : null}</div>)}</div>
    {options.length < 20 ? <button className="poll-add-option" type="button" onClick={() => setOptions((current) => [...current, ""])}><Plus size={16} /> Add option</button> : null}
    <div className="poll-settings"><label>Choices per person <input type="number" min="1" max={options.filter(Boolean).length || 1} value={maxChoices} onChange={(event) => setMaxChoices(event.target.value)} /></label><label className="poll-toggle"><input type="checkbox" checked={allowCustom} onChange={(event) => setAllowCustom(event.target.checked)} /> Allow custom responses</label></div>
    <div className="modal-actions"><button type="button" onClick={onClose}>Cancel</button><button disabled={!valid} type="submit">Post poll</button></div>
  </form></div>;
}
