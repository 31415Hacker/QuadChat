import { useState } from "react";

export default function PollModal({ onClose, onCreate }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [maxChoices, setMaxChoices] = useState(1);
  const [allowCustom, setAllowCustom] = useState(false);
  const valid = question.trim() && options.filter((option) => option.trim()).length >= 2;
  return <div className="modal-backdrop"><form className="modal poll-modal" onSubmit={(event) => { event.preventDefault(); if (valid) onCreate({ question: question.trim(), options: options.map((option) => option.trim()).filter(Boolean), maxChoices: Math.max(1, Number(maxChoices) || 1), allowCustom }); }}>
    <h2>Create poll</h2><input autoFocus placeholder="Question" value={question} maxLength={250} onChange={(event) => setQuestion(event.target.value)} />
    {options.map((option, index) => <input key={index} placeholder={`Option ${index + 1}`} value={option} maxLength={120} onChange={(event) => setOptions((current) => current.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} />)}
    {options.length < 20 ? <button type="button" onClick={() => setOptions((current) => [...current, ""])}>Add option</button> : null}
    <label>Choices per person <input type="number" min="1" max={options.filter(Boolean).length || 1} value={maxChoices} onChange={(event) => setMaxChoices(event.target.value)} /></label>
    <label><input type="checkbox" checked={allowCustom} onChange={(event) => setAllowCustom(event.target.checked)} /> Allow custom responses</label>
    <div className="modal-actions"><button type="button" onClick={onClose}>Cancel</button><button disabled={!valid} type="submit">Post poll</button></div>
  </form></div>;
}
