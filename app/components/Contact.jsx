// app/components/Contact.jsx
'use client';

import { useState } from 'react';
import { Icon } from './Icons';
import { useLang } from '../lang/LangContext';
import { translations } from '../lang/translations';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    destination: 'Marrakech', start: '', duration: '7-10 days',
    notes: '', travelers: 2
  });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const t = translations[lang].contact;
  const tf = t.form;

  const upd = (k, v) => {
    setForm({ ...form, [k]: v });
    setErrs({ ...errs, [k]: '' });
  };

  const submit = (e) => {
    e.preventDefault();
    const e2 = {};
    if (!form.name.trim()) e2.name = tf.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e2.email = tf.errEmail;
    if (!form.start) e2.start = tf.errDate;
    if (Object.keys(e2).length) {
      setErrs(e2);
      return;
    }
    setSent(true);
  };

  const travellerLabel =
    form.travelers === 1 ? tf.solo
    : form.travelers === 2 ? tf.two
    : tf.many(form.travelers);

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-left reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display">{t.h2[0]}<em>{t.h2[1]}</em></h2>
          <p>{t.desc}</p>

          <div className="contact-info">
            <div className="row">
              <div className="icon"><Icon.Pin /></div>
              <div>
                <div className="k">{t.info.atelier}</div>
                <div className="v">Rue Sidi Fateh, Marrakech 40000, Morocco</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Phone /></div>
              <div>
                <div className="k">{t.info.direct}</div>
                <div className="v">+212 524 440 118</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Mail /></div>
              <div>
                <div className="k">{t.info.writeUs}</div>
                <div className="v">hello@moroccotours.travel</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Clock /></div>
              <div>
                <div className="k">{t.info.responseTime}</div>
                <div className="v">{t.info.responseVal}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          {sent ? (
            <div className="form-success">
              <h3>{t.success.h3(form.name.split(' ')[0])}</h3>
              <p>{t.success.p}</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn ghost" onClick={() => { setSent(false); setForm({ ...form, notes: '' }); }}>
                  {t.success.again}
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="form-head">
                <h3>{tf.h3}</h3>
                <p>{tf.subtitle}</p>
              </div>

              <div className="field-grid">
                <div className="field">
                  <label>{tf.fullName}</label>
                  <input value={form.name} onChange={(e) => upd('name', e.target.value)} placeholder={tf.namePlaceholder} />
                  {errs.name && <div className="err">{errs.name}</div>}
                </div>
                <div className="field">
                  <label>{tf.email}</label>
                  <input type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} placeholder={tf.emailPlaceholder} />
                  {errs.email && <div className="err">{errs.email}</div>}
                </div>
                <div className="field">
                  <label>{tf.phone}</label>
                  <input value={form.phone} onChange={(e) => upd('phone', e.target.value)} placeholder={tf.phonePlaceholder} />
                </div>
                <div className="field">
                  <label>{tf.destination}</label>
                  <select value={form.destination} onChange={(e) => upd('destination', e.target.value)}>
                    <option>Marrakech</option>
                    <option>Ouarzazate &amp; Sahara</option>
                    <option>Fez</option>
                    <option>Tangier</option>
                    <option>Agadir</option>
                    <option>Grand Tour (multi-city)</option>
                  </select>
                </div>
                <div className="field">
                  <label>{tf.startDate}</label>
                  <input type="date" value={form.start} onChange={(e) => upd('start', e.target.value)} />
                  {errs.start && <div className="err">{errs.start}</div>}
                </div>
                <div className="field">
                  <label>{tf.duration}</label>
                  <select value={form.duration} onChange={(e) => upd('duration', e.target.value)}>
                    <option>3-5 days</option>
                    <option>5-7 days</option>
                    <option>7-10 days</option>
                    <option>10-14 days</option>
                    <option>14+ days</option>
                  </select>
                </div>
                <div className="field full">
                  <label>{tf.travellers}</label>
                  <div className="travelers">
                    <button type="button" onClick={() => upd('travelers', Math.max(1, form.travelers - 1))}>−</button>
                    <div className="count">{form.travelers}</div>
                    <button type="button" onClick={() => upd('travelers', form.travelers + 1)}>+</button>
                    <span style={{ marginLeft: 16, fontSize: 13, opacity: 0.65 }}>{travellerLabel}</span>
                  </div>
                </div>
                <div className="field full">
                  <label>{tf.notes}</label>
                  <textarea rows="3" value={form.notes} onChange={(e) => upd('notes', e.target.value)}
                    placeholder={tf.notesPlaceholder}></textarea>
                </div>
              </div>

              <div className="submit-row">
                <div className="fine">{tf.fine}</div>
                <button type="submit" className="btn">{tf.send} <Icon.Arrow className="arrow" /></button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
