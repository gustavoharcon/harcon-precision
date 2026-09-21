import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  FileText, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle,
  Server,
  UserCheck
} from 'lucide-react';

export function meta() {
  return [
    { title: "Staff Portal | Harcon Precision Metals" }
  ];
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState('admin@harconprecision.com');
  const [password, setPassword] = useState('HarconPrecision2026!');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [apiHealth, setApiHealth] = useState<any>(null);

  const [quotes, setQuotes] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'quotes' | 'messages' | 'health'>('quotes');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check health endpoint
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiHealth(data))
      .catch(() => setApiHealth({ status: 'offline', error: 'Cannot reach backend server' }));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      setToken(data.token);
      loadDashboardData(data.token);
    } catch (err: any) {
      setLoginError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async (authToken: string) => {
    try {
      const [quotesRes, messagesRes] = await Promise.all([
        fetch('/api/quotes', { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch('/api/contact', { headers: { Authorization: `Bearer ${authToken}` } }),
      ]);

      if (quotesRes.ok) {
        const qData = await quotesRes.json();
        setQuotes(qData.quotes || []);
      }
      if (messagesRes.ok) {
        const mData = await messagesRes.json();
        setMessages(mData.messages || []);
      }
    } catch (err) {
      console.error('Failed to load dashboard data', err);
    }
  };

  return (
    <div style={{ padding: '4rem 0 6rem', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="badge-tag">
            <ShieldCheck size={14} />
            <span>Harcon Internal Staff Portal</span>
          </div>
        </div>

        <h1 style={{ marginBottom: '2rem' }}>Management & Submissions</h1>

        {!token ? (
          <div style={{ maxWidth: '440px', margin: '0 auto', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(255, 94, 20, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)', margin: '0 auto 1rem' }}>
                <Lock size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>Staff Authentication</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sign in with authorized administrator credentials.</p>
            </div>

            {loginError && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#fca5a5', padding: '0.75rem', borderRadius: '4px', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label" htmlFor="adminEmail">Email</label>
                <input
                  id="adminEmail"
                  type="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" htmlFor="adminPassword">Password</label>
                <input
                  id="adminPassword"
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%' }}>
                {loading ? 'Authenticating...' : 'Sign In to Portal'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            {/* Dashboard Tabs */}
            <div className="tabs-header">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`tab-btn ${activeTab === 'quotes' ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FileText size={16} />
                <span>RFQ Submissions ({quotes.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Mail size={16} />
                <span>Messages ({messages.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('health')}
                className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Server size={16} />
                <span>System Status</span>
              </button>
            </div>

            {/* Tab: Quotes */}
            {activeTab === 'quotes' && (
              <div>
                {quotes.length === 0 ? (
                  <div className="card-industrial" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>No quote requests submitted yet. Use the Request a Quote page to test.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {quotes.map((q) => (
                      <div key={q.id} className="card-industrial">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                          <div>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{q.name}</h3>
                            <div style={{ fontSize: '0.88rem', color: 'var(--accent-orange)' }}>
                              {q.email} | {q.phone}
                            </div>
                          </div>
                          <span style={{ background: 'rgba(255, 94, 20, 0.1)', color: 'var(--accent-orange)', border: '1px solid var(--border-accent)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'var(--font-display)' }}>
                            {q.status}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: '4px' }}>
                          {q.projectDetails}
                        </p>
                        {q.fileName && (
                          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-steel)' }}>
                            Attached File: {q.fileName}
                          </div>
                        )}
                        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                          Submitted: {new Date(q.createdAt).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab: Messages */}
            {activeTab === 'messages' && (
              <div>
                {messages.length === 0 ? (
                  <div className="card-industrial" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>No contact messages submitted yet.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {messages.map((m) => (
                      <div key={m.id} className="card-industrial">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <h3 style={{ color: '#fff', fontSize: '1.1rem' }}>{m.name} ({m.email})</h3>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                            {new Date(m.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.92rem' }}>{m.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab: System Health */}
            {activeTab === 'health' && (
              <div className="card-industrial">
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>API Server Metrics</h3>
                <pre style={{ background: '#070a10', padding: '1.5rem', borderRadius: '4px', overflowX: 'auto', color: '#38bdf8' }}>
                  {JSON.stringify(apiHealth, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
