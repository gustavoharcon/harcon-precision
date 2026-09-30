'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while transmitting your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* SECTION 1: HEADER */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, #111827 0%, #0a0e17 100%)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div className="badge-tag">
            <Phone size={14} />
            <span>Facility Communications</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              maxWidth: '750px',
              lineHeight: '1.6',
            }}
          >
            Get in touch with our engineering and customer support teams at our San Diego, California
            headquarters.
          </p>
        </div>
      </section>

      {/* SECTION 2: DETAILS / MAP */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Contact info & Quick Form */}
            <div>
              {/* Contact Details Card */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Headquarters Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '0.6rem',
                        background: 'rgba(255, 94, 20, 0.1)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-orange)',
                      }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          color: '#ffffff',
                          fontSize: '1rem',
                        }}
                      >
                        Physical Facility
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                        1790 Dornoch Court
                        <br />
                        San Diego, CA 92154
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '0.6rem',
                        background: 'rgba(56, 189, 248, 0.1)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-steel)',
                      }}
                    >
                      <Phone size={22} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          color: '#ffffff',
                          fontSize: '1rem',
                        }}
                      >
                        Telephone
                      </div>
                      <a
                        href="tel:6194235544"
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--accent-orange)',
                          fontWeight: 600,
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        (619) 423-5544
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '0.6rem',
                        background: 'rgba(245, 158, 11, 0.1)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-amber)',
                      }}
                    >
                      <Clock size={22} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          color: '#ffffff',
                          fontSize: '1rem',
                        }}
                      >
                        Operating Hours
                      </div>
                      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                        Monday – Friday: 7:00 AM – 4:30 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Send a Direct Message
                </h3>

                {submitSuccess ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <CheckCircle
                      size={40}
                      style={{ color: '#22c55e', margin: '0 auto 1rem' }}
                    />
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      Message Dispatched!
                    </h4>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      Thank you for contacting Harcon Precision Metals. A representative will get in
                      touch shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-secondary"
                      style={{ fontSize: '0.85rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid #ef4444',
                          color: '#fca5a5',
                          padding: '0.75rem 1rem',
                          borderRadius: '4px',
                          marginBottom: '1rem',
                          fontSize: '0.85rem',
                        }}
                      >
                        {errorMessage}
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactName">
                        Name *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactEmail">
                        Email Address *
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        className="form-input"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactPhone">
                        Phone
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        className="form-input"
                        placeholder="(619) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactMessage">
                        Message *
                      </label>
                      <textarea
                        id="contactMessage"
                        rows={4}
                        className="form-textarea"
                        placeholder="How can our engineering team assist you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      style={{ width: '100%', padding: '0.9rem' }}
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface-elevated)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Navigation size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: '#fff',
                        textTransform: 'uppercase',
                      }}
                    >
                      San Diego Facility Map
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-steel)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Otay Mesa Industrial Corridor
                  </span>
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '420px',
                    background: '#1a2234',
                    position: 'relative',
                  }}
                >
                  <iframe
                    title="Harcon Precision Metals Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=1790+Dornoch+Court,+San+Diego,+CA+92154&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--bg-surface)' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    Plant Logistics & Freight Access
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    Strategically located near major San Diego freight arteries (CA-905, I-805, and
                    I-5) with dedicated heavy-load semi-truck loading docks, overhead crane bays,
                    and secure pallet storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactClient;
