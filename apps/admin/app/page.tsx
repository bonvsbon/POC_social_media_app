const kpis = [
  { label: 'Open Moderation Cases', value: '1,284', delta: '+8.2%' },
  { label: 'Auto-Handled Reports', value: '92.4%', delta: '+1.1%' },
  { label: 'Risk Alerts (24h)', value: '37', delta: '-12.0%' },
  { label: 'Creator Payout Queue', value: '$214,903', delta: '+4.7%' }
];

const queues = [
  { name: 'Moderation Queue', priority: 'High', waiting: 143 },
  { name: 'Appeals Queue', priority: 'Medium', waiting: 39 },
  { name: 'Copyright Claims', priority: 'High', waiting: 22 },
  { name: 'Fraud/Spam Review', priority: 'Critical', waiting: 11 }
];

export default function AdminPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0b1220,#111827)', color: '#e5e7eb', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ color: '#93c5fd', fontWeight: 600, letterSpacing: 0.4 }}>Aurora Stream • Admin</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>Operations & Risk Command Center</h1>
        <p style={{ color: '#9ca3af', maxWidth: 760 }}>
          Automation-first dashboard for moderation, reporting, fee controls, and audit visibility. Human admins focus on edge cases.
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, marginBottom: 18 }}>
        {kpis.map((kpi) => (
          <article key={kpi.label} style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 14, padding: 16 }}>
            <div style={{ color: '#9ca3af', fontSize: 13 }}>{kpi.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>{kpi.value}</div>
            <div style={{ color: '#34d399', marginTop: 6, fontSize: 13 }}>{kpi.delta}</div>
          </article>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <article style={{ background: '#111827', border: '1px solid #374151', borderRadius: 14, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Queue Overview</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#9ca3af' }}>
                <th style={{ paddingBottom: 10 }}>Queue</th>
                <th style={{ paddingBottom: 10 }}>Priority</th>
                <th style={{ paddingBottom: 10 }}>Waiting</th>
              </tr>
            </thead>
            <tbody>
              {queues.map((q) => (
                <tr key={q.name} style={{ borderTop: '1px solid #374151' }}>
                  <td style={{ padding: '10px 0' }}>{q.name}</td>
                  <td style={{ padding: '10px 0' }}>{q.priority}</td>
                  <td style={{ padding: '10px 0' }}>{q.waiting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article style={{ background: '#111827', border: '1px solid #374151', borderRadius: 14, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Actions</h2>
          <ul style={{ paddingLeft: 18, color: '#d1d5db' }}>
            <li>Review high-severity moderation cases</li>
            <li>Tune fee and payout policy</li>
            <li>Audit AI auto-decision performance</li>
            <li>Export compliance report</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
