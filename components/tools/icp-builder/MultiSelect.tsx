"use client";

import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, Search } from "lucide-react";

interface MultiSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  max?: number;
  searchable?: boolean;
}

/**
 * Generic multi-select: pill tags for selected items, click-to-open
 * dropdown (with an optional search box), and an "Other" option (if present
 * in `options`) that reveals a free-text input for custom, comma-separated
 * values. Custom values are merged straight into the same `selected` array
 * as the fixed options, since the data model has no separate "other" field,
 * anything in `selected` that isn't one of `options` is, by definition, a
 * custom value the user typed in.
 */
export function MultiSelect({ label, options, selected, onChange, max, searchable = false }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  // Seed from `selected` (not a bare `false`) so this survives a remount:
  // the parent ICP card unmounts this component entirely when collapsed
  // (rendered via `isOpen && (...)`), and without this, reopening the card
  // after custom "Other" values were entered would show the pill tags
  // (they come from the still-persisted `selected` prop) but make the free
  // -text editor look like it had reset/lost them.
  const [otherActive, setOtherActive] = useState(() => selected.some((s) => !options.includes(s)));
  const containerRef = useRef<HTMLDivElement>(null);
  const otherInputRef = useRef<HTMLInputElement>(null);
  const wasOtherActive = useRef(false);

  const hasOtherOption = options.includes("Other");
  const fixedSelected = selected.filter((s) => options.includes(s));
  const customValues = selected.filter((s) => !options.includes(s));
  const customText = customValues.join(", ");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (otherActive && !wasOtherActive.current) {
      otherInputRef.current?.focus();
    }
    wasOtherActive.current = otherActive;
  }, [otherActive]);

  const atMax = typeof max === "number" && selected.length >= max;
  const filteredOptions = search
    ? options.filter((o) => o.toLowerCase().includes(search.toLowerCase()))
    : options;

  const toggleOption = (option: string) => {
    if (option === "Other") {
      setOtherActive(true);
      setOpen(false);
      return;
    }
    if (fixedSelected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      if (atMax) return;
      onChange([...selected, option]);
    }
  };

  const removeOption = (option: string) => {
    onChange(selected.filter((s) => s !== option));
  };

  const handleOtherTextChange = (text: string) => {
    const newCustomValues = text
      .split(",")
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
    onChange([...fixedSelected, ...newCustomValues]);
  };

  return (
    <div className="space-y-2" ref={containerRef}>
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">{label}</label>
        {typeof max === "number" && (
          <span className="text-xs text-gray-400">Max {max} selected</span>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-3 text-sm text-left"
          style={{ border: "1px solid #E8E2D9" }}
        >
          <span className="text-gray-500">
            {selected.length > 0 ? `${selected.length} selected` : `Select ${label.toLowerCase()}...`}
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div
            className="absolute z-20 mt-2 w-full max-h-64 overflow-y-auto rounded-lg bg-white shadow-lg"
            style={{ border: "1px solid #E8E2D9" }}
          >
            {searchable && (
              <div className="sticky top-0 bg-white p-2" style={{ borderBottom: "1px solid #F0EDE7" }}>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-8 pr-2 py-1.5 text-sm rounded-md outline-none"
                    style={{ border: "1px solid #E8E2D9" }}
                    autoFocus
                  />
                </div>
              </div>
            )}
            {filteredOptions.length === 0 && (
              <p className="px-4 py-3 text-sm text-gray-400">No matches.</p>
            )}
            {filteredOptions.map((option) => {
              const isSelected = option === "Other" ? otherActive : fixedSelected.includes(option);
              const disabled = option !== "Other" && !isSelected && atMax;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOption(option)}
                  disabled={disabled}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors ${
                    disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                    style={{
                      border: isSelected ? "none" : "1.5px solid #E8E2D9",
                      backgroundColor: isSelected ? "#F5B731" : "transparent",
                    }}
                  >
                    {isSelected && <span className="text-black text-xs font-black">✓</span>}
                  </span>
                  <span className="text-gray-800">{option}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "#FEF9EC", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}
            >
              {item}
              <button type="button" onClick={() => removeOption(item)} aria-label={`Remove ${item}`}>
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {hasOtherOption && otherActive && (
        <input
          ref={otherInputRef}
          type="text"
          defaultValue={customText}
          onChange={(e) => handleOtherTextChange(e.target.value)}
          placeholder="Enter your own, comma-separated"
          className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none"
          style={{ border: "1px solid #E8E2D9" }}
        />
      )}
    </div>
  );
}
