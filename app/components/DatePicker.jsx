// app/components/DatePicker.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';

const LOCALES = { EN: 'en-US', FR: 'fr-FR' };

function toISO(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function fromISO(str) {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function weekdayLabels(locale) {
  // a Monday-starting reference week
  const ref = new Date(2023, 0, 2);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(ref);
    d.setDate(ref.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: 'narrow' });
  });
}

function buildGrid(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false, offset: -1 });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true, offset: 0 });
  }
  let nextDay = 1;
  while (cells.length < 42) {
    cells.push({ day: nextDay++, current: false, offset: 1 });
  }
  return cells;
}

export default function DatePicker({ value, onChange, lang = 'EN', placeholder = 'Select date', hasError = false }) {
  const locale = LOCALES[lang] || 'en-US';
  const selected = fromISO(value);
  const today = new Date();

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState((selected || today).getFullYear());
  const [viewMonth, setViewMonth] = useState((selected || today).getMonth());
  const rootRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const changeMonth = (delta) => {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setViewMonth(m);
    setViewYear(y);
  };

  const pick = (cell) => {
    let m = viewMonth + cell.offset;
    let y = viewYear;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    onChange(toISO(y, m, cell.day));
    if (cell.offset !== 0) {
      setViewMonth(m);
      setViewYear(y);
    }
    setOpen(false);
  };

  const isSelected = (cell) =>
    selected &&
    cell.current &&
    selected.getFullYear() === viewYear &&
    selected.getMonth() === viewMonth &&
    selected.getDate() === cell.day;

  const isToday = (cell) =>
    cell.current &&
    today.getFullYear() === viewYear &&
    today.getMonth() === viewMonth &&
    today.getDate() === cell.day;

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });

  const display = selected
    ? selected.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
    : '';

  const cells = buildGrid(viewYear, viewMonth);
  const labels = weekdayLabels(locale);

  return (
    <div className={'datepicker' + (open ? ' open' : '')} ref={rootRef}>
      <button type="button" className={'datepicker-input' + (hasError ? ' err' : '')} onClick={() => setOpen((o) => !o)}>
        <span className={display ? '' : 'placeholder'}>{display || placeholder}</span>
        <Icon.Calendar />
      </button>

      {open && (
        <div className="datepicker-panel">
          <div className="datepicker-head">
            <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
              <Icon.ChevronLeft />
            </button>
            <span>{monthLabel}</span>
            <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
              <Icon.ChevronRight />
            </button>
          </div>
          <div className="datepicker-weekdays">
            {labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
          <div className="datepicker-grid">
            {cells.map((c, i) => (
              <button
                type="button"
                key={i}
                className={
                  'day' +
                  (!c.current ? ' muted' : '') +
                  (isSelected(c) ? ' selected' : '') +
                  (isToday(c) && !isSelected(c) ? ' today' : '')
                }
                onClick={() => pick(c)}
              >
                {c.day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
