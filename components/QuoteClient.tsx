'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
  updateDraft,
  resetDraft,
  setSubmitting,
  setSubmitSuccess,
  setSubmitError,
} from '@/store/quoteSlice';
import {
  Phone,
  Clock,
  FileText,
  UploadCloud,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';

export function QuoteClient() {
  const dispatch = useDispatch();
  const { draft, isSubmitting, submitSuccess, error } = useSelector(
    (state: RootState) => state.quote
  );

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!draft.name.trim()) errs.name = 'Full name is required.';
    if (!draft.email.trim() || !/^\S+@\S+\.\S+$/.test(draft.email)) {
      errs.email = 'Valid corporate or personal email is required.';
    }
    if (!draft.phone.trim() || draft.phone.length < 7) {
      errs.phone = 'Contact phone number is required.';
    }
    if (!draft.projectDetails.trim() || draft.projectDetails.length < 10) {
      errs.projectDetails =
        'Please provide at least 10 characters detailing your parts, materials, and quantities.';
    }
    setClientErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(setSubmitting(true));
    dispatch(setSubmitError(null));

    try {
      const formData = new FormData();
      formData.append('name', draft.name);
      formData.append('email', draft.email);
      formData.append('phone', draft.phone);
      formData.append('projectDetails', draft.projectDetails);
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      const response = await fetch('/api/quotes', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request. Please try again.');
      }

      dispatch(setSubmitSuccess(true));
    } catch (err: any) {
      dispatch(setSubmitError(err.message || 'An unexpected error occurred.'));
    } finally {
      dispatch(setSubmitting(false));
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
            <FileText size={14} />
            <span>RFQ Engineering Intake</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Request a Quote</h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              maxWidth: '750px',
              lineHeight: '1.6',
            }}
          >
            Upload your prints and CAD files. Our San Diego engineering team will review your
            specifications for material yield, tooling, and turnaround time.
          </p>
        </div>
      </section>

      {/* SECTION 2: FORM / INFO */}
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
            {/* Left: Form */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem',
              }}
            >
              {submitSuccess ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid #22c55e',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22c55e',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '1rem' }}>
                    Quote Request Received!
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#94a3b8',
                      lineHeight: '1.7',
                      marginBottom: '2rem',
                    }}
                  >
                    Thank you, <strong style={{ color: '#fff' }}>{draft.name}</strong>. Your RFQ has
                    been routed directly to our estimating department. Our team will review your CAD
                    models and specifications and follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      dispatch(resetDraft());
                      setSelectedFile(null);
                    }}
                    className="btn-secondary"
                  >
                    Submit Another RFQ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: '#ffffff',
                      marginBottom: '1.75rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      paddingBottom: '0.75rem',
                    }}
                  >
                    Project Specifications & Prints
                  </h3>

                  {error && (
                    <div
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #ef4444',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        color: '#fca5a5',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.9rem',
                      }}
                    >
                      <AlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Robert Miller"
                      value={draft.name}
                      onChange={(e) => dispatch(updateDraft({ name: e.target.value }))}
                    />
                    {clientErrors.name && (
                      <span style={{ color: '#f87171', fontSize: '0.8rem' }}>
                        {clientErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="name@company.com"
                      value={draft.email}
                      onChange={(e) => dispatch(updateDraft({ email: e.target.value }))}
                    />
                    {clientErrors.email && (
                      <span style={{ color: '#f87171', fontSize: '0.8rem' }}>
                        {clientErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(619) 000-0000"
                      value={draft.phone}
                      onChange={(e) => dispatch(updateDraft({ phone: e.target.value }))}
                    />
                    {clientErrors.phone && (
                      <span style={{ color: '#f87171', fontSize: '0.8rem' }}>
                        {clientErrors.phone}
                      </span>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="projectDetails">
                      Project Details & Quantities *
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={5}
                      className="form-textarea"
                      placeholder="Please specify materials (e.g. 5052-H32 aluminum, 304 stainless), estimated quantities, finish requirements (anodizing, powder coat), and target delivery timeframe..."
                      value={draft.projectDetails}
                      onChange={(e) =>
                        dispatch(updateDraft({ projectDetails: e.target.value }))
                      }
                    />
                    {clientErrors.projectDetails && (
                      <span style={{ color: '#f87171', fontSize: '0.8rem' }}>
                        {clientErrors.projectDetails}
                      </span>
                    )}
                  </div>

                  {/* File Upload */}
                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label" htmlFor="fileUpload">
                      Attach CAD Drawing / Print (Optional)
                    </label>
                    <div
                      style={{
                        border: '2px dashed var(--border-strong)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.75rem 1rem',
                        textAlign: 'center',
                        background: 'var(--bg-surface-elevated)',
                        cursor: 'pointer',
                        position: 'relative',
                      }}
                    >
                      <input
                        id="fileUpload"
                        type="file"
                        accept=".pdf,.dxf,.dwg,.step,.stp,.sldprt,.iges,.igs,.zip,.png,.jpg"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          cursor: 'pointer',
                        }}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setSelectedFile(e.target.files[0]);
                          }
                        }}
                      />
                      <UploadCloud
                        size={32}
                        style={{ color: 'var(--accent-orange)', margin: '0 auto 0.75rem' }}
                      />
                      <div style={{ fontSize: '0.9rem', color: '#f1f5f9', fontWeight: 600 }}>
                        {selectedFile
                          ? selectedFile.name
                          : 'Click or drag CAD drawing here to upload'}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-dim)',
                          marginTop: '0.35rem',
                        }}
                      >
                        Accepted formats: STEP, SLDPRT, DXF, DWG, IGES, PDF, ZIP (Max 25MB)
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{ width: '100%', padding: '1rem', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? (
                      <span>Submitting Quote Request...</span>
                    ) : (
                      <>
                        <span>Submit for Estimation</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                }}
              >
                <div className="badge-tag">
                  <Clock size={14} />
                  <span>Estimating Department</span>
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#ffffff' }}>
                  Fast, Accurate Estimating
                </h3>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                  }}
                >
                  Our estimating engineers leverage our integrated MIETrak Pro ERP database
                  containing decades of sheet metal forming, laser cutting speed tables, and
                  machine cycle metrics.
                </p>

                <div
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 94, 20, 0.08)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--accent-orange)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Need Immediate Assistance?
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={22} style={{ color: 'var(--accent-orange)' }} />
                    <a
                      href="tel:6194235544"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                      }}
                    >
                      (619) 423-5544
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                      <strong>NDAs Respected:</strong> All CAD files and customer drawings are treated
                      under strict proprietary confidentiality protocols.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                      <strong>DFM Feedback:</strong> We flag potential manufacturing cost drivers
                      early to save you money before production begins.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                      <strong>Turnaround Time:</strong> Standard RFQs returned within 24 to 48 business
                      hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuoteClient;
