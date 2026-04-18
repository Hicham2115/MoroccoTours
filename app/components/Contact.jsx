// app/components/Contact.jsx
'use client';

import { useState } from 'react';
import { Icon } from './Icons';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    destination: 'Marrakech', start: '', duration: '7-10 days',
    notes: '', travelers: 2
  });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const upd = (k, v) => {
    setForm({ ...form, [k]: v });
    setErrs({ ...errs, [k]: '' });
  };

  const submit = (e) => {
    e.preventDefault();
    const e2 = {};
    if (!form.name.trim()) e2.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e2.email = 'Valid email, please';
    if (!form.start) e2.start = 'Pick a start date';
    if (Object.keys(e2).length) {
      setErrs(e2);
      return;
    }
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-left reveal">
          <span className="eyebrow">Begin the Conversation</span>
          <h2 className="display">Let&apos;s <em>design</em> your Morocco.</h2>
          <p>
            Share a few lines about what you&apos;re dreaming of. A designer will reply within
            24 hours with a private proposal — no templates, no call centres.
          </p>

          <div className="contact-info">
            <div className="row">
              <div className="icon"><Icon.Pin /></div>
              <div>
                <div className="k">Atelier</div>
                <div className="v">Rue Sidi Fateh, Marrakech 40000, Morocco</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Phone /></div>
              <div>
                <div className="k">Direct</div>
                <div className="v">+212 524 440 118</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Mail /></div>
              <div>
                <div className="k">Write to us</div>
                <div className="v">hello@moroccotours.travel</div>
              </div>
            </div>
            <div className="row">
              <div className="icon"><Icon.Clock /></div>
              <div>
                <div className="k">Reply time</div>
                <div className="v">Within 24 hours, always</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          {sent ? (
            <div className="form-success">
              <h3>Thank you, {form.name.split(' ')[0]}.</h3>
              <p>Your request is on its way to our atelier in Marrakech. Expect a private proposal in your inbox within 24 hours.</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn ghost" onClick={() => { setSent(false); setForm({ ...form, notes: '' }); }}>Send another</button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="form-head">
                <h3>Request a proposal</h3>
                <p>All fields confidential · no obligation</p>
              </div>

              <div className="field-grid">
                <div className="field">
                  <label>Full Name</label>
                  <input value={form.name} onChange={(e) => upd('name', e.target.value)} placeholder="Your name" />
                  {errs.name && <div className="err">{errs.name}</div>}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} placeholder="you@example.com" />
                  {errs.email && <div className="err">{errs.email}</div>}
                </div>
                <div className="field">
                  <label>Phone (optional)</label>
                  <input value={form.phone} onChange={(e) => upd('phone', e.target.value)} placeholder="+1 ..." />
                </div>
                <div className="field">
                  <label>Primary Destination</label>
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
                  <label>Start Date</label>
                  <input type="date" value={form.start} onChange={(e) => upd('start', e.target.value)} />
                  {errs.start && <div className="err">{errs.start}</div>}
                </div>
                <div className="field">
                  <label>Duration</label>
                  <select value={form.duration} onChange={(e) => upd('duration', e.target.value)}>
                    <option>3-5 days</option>
                    <option>5-7 days</option>
                    <option>7-10 days</option>
                    <option>10-14 days</option>
                    <option>14+ days</option>
                  </select>
                </div>
                <div className="field full">
                  <label>Travellers</label>
                  <div className="travelers">
                    <button type="button" onClick={() => upd('travelers', Math.max(1, form.travelers - 1))}>−</button>
                    <div className="count">{form.travelers}</div>
                    <button type="button" onClick={() => upd('travelers', form.travelers + 1)}>+</button>
                    <span style={{ marginLeft: 16, fontSize: 13, opacity: 0.65 }}>
                      {form.travelers === 1 ? 'Solo journey' : form.travelers === 2 ? 'Two travellers' : `${form.travelers} travellers`}
                    </span>
                  </div>
                </div>
                <div className="field full">
                  <label>Tell us about your journey</label>
                  <textarea rows="3" value={form.notes} onChange={(e) => upd('notes', e.target.value)}
                    placeholder="Occasions, pace, must-sees, rooms, anything we should know..."></textarea>
                </div>
              </div>

              <div className="submit-row">
                <div className="fine">By submitting, you agree to be contacted by our team. We never share your details.</div>
                <button type="submit" className="btn">Send Request <Icon.Arrow className="arrow" /></button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
