import React, { useState } from "react";
import { ExternalLink, Plus, GripHorizontal } from "lucide-react";

const EMPTY_CARD = {
  type: "game_session_card",
  title: "",
  googleMeetLink: "",
  note: "",
  tableData: {
    headers: ["Details", "Information"],
    rows: []
  }
};

export default function GameSessionCard({ data, isEditingMode, onChange }) {
  const card = data || EMPTY_CARD;
  const [newLabel, setNewLabel] = useState("");
  const [newDetail, setNewDetail] = useState("");

  function update(field, value) {
    onChange?.({ ...card, [field]: value });
  }

  function updateTable(table) {
    onChange?.({ ...card, tableData: table });
  }

  function addRow() {
    if (!newLabel.trim() && !newDetail.trim()) return;
    const rows = [...card.tableData.rows, [newLabel.trim(), newDetail.trim()]];
    updateTable({ ...card.tableData, rows });
    setNewLabel("");
    setNewDetail("");
  }

  function removeRow(index) {
    const rows = card.tableData.rows.filter((_, i) => i !== index);
    updateTable({ ...card.tableData, rows });
  }

  function updateRow(index, col, value) {
    const rows = card.tableData.rows.map((row, i) => {
      if (i !== index) return row;
      const next = [...row];
      next[col] = value;
      return next;
    });
    updateTable({ ...card.tableData, rows });
  }

  function renderMeetButton() {
    return (
      <a
        href={card.googleMeetLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-bold text-base " +
          "bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] " +
          "text-white transition-all duration-150 " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 " +
          (!card.googleMeetLink ? "opacity-40 pointer-events-none" : "")
        }
      >
        <ExternalLink size={18} />
        Join Google Meet
      </a>
    );
  }

  /* ============= EDIT MODE ============= */

  if (isEditingMode) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 space-y-5 text-slate-100">
        {/* Title */}
        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-lg font-bold text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={card.title}
          onChange={(e) => update("title", e.target.value)}
          placeholder="Session title"
        />

        {/* Google Meet link */}
        <input
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={card.googleMeetLink}
          onChange={(e) => update("googleMeetLink", e.target.value)}
          placeholder="Google Meet link"
        />

        {/* Note textarea */}
        <textarea
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-400 resize-y min-h-[72px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={card.note}
          onChange={(e) => update("note", e.target.value)}
          placeholder="Add a note..."
        />

        {/* Editable table */}
        {(card.tableData?.rows?.length ?? 0) > 0 && (
          <div className="overflow-hidden rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700/60">
                  {card.tableData?.headers?.map((h, i) => (
                    <th key={i} className="px-3 py-2 text-left font-semibold text-slate-300">
                      {h}
                    </th>
                  ))}
                  <th className="w-10" />
                </tr>
              </thead>
              <tbody>
                {card.tableData.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-slate-700">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-3 py-1.5">
                        <input
                          className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none"
                          value={cell}
                          onChange={(e) => updateRow(ri, ci, e.target.value)}
                          placeholder={card.tableData.headers[ci] || ""}
                        />
                      </td>
                    ))}
                    <td className="px-2 py-1.5 text-center">
                      <button
                        type="button"
                        onClick={() => removeRow(ri)}
                        className="text-slate-500 hover:text-red-400 transition-colors text-xs"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add-row panel */}
        <div className="flex items-end gap-2">
          <div className="flex-1 space-y-1">
            <label className="text-xs text-slate-400 font-medium">Label</label>
            <input
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              placeholder="e.g. 🕹️ Game"
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-xs text-slate-400 font-medium">Detail</label>
            <input
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newDetail}
              onChange={(e) => setNewDetail(e.target.value)}
              placeholder="e.g. Bed Wars"
            />
          </div>
          <button
            type="button"
            onClick={addRow}
            disabled={!newLabel.trim() && !newDetail.trim()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white text-sm font-semibold transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        {/* Meet button (preview) */}
        {renderMeetButton()}
      </div>
    );
  }

  /* ============= VIEW MODE ============= */

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden text-slate-100">
      <div className="p-5 space-y-4">
        {/* Header / drag handle */}
        <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
          <GripHorizontal size={14} />
          <span>{card.title || "Game Session"}</span>
        </div>

        {/* Note */}
        {card.note && (
          <blockquote className="border-l-4 border-indigo-500 bg-slate-800/50 pl-4 py-2 pr-3 text-sm text-slate-300 leading-relaxed italic">
            {card.note}
          </blockquote>
        )}

        {/* Table */}
        {card.tableData?.rows?.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <tbody>
                {card.tableData.rows.map((row, ri) => (
                  <tr key={ri} className={ri > 0 ? "border-t border-slate-700" : ""}>
                    <td className="px-3 py-2.5 font-semibold text-slate-300 whitespace-nowrap w-1/3 align-top">
                      {row[0]}
                    </td>
                    <td className="px-3 py-2.5 text-slate-100">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Meet button */}
      <div className="px-5 pb-5">
        {renderMeetButton()}
      </div>
    </div>
  );
}
