const cards = [
  { label: 'Estimated Revenue (MTD)', value: '$3,248.53', note: 'after platform + gateway fees' },
  { label: 'Engagement Rate', value: '8.7%', note: 'likes + comments + shares / views' },
  { label: 'Followers', value: '124,380', note: '+2,431 this week' },
  { label: 'Trust Score', value: '92/100', note: 'brand-safe tier: Gold' }
];

const videos = [
  { title: '5 Micro-Learning Habits', views: '118k', completion: '71%', rpm: '$4.30' },
  { title: 'Startup UI Teardown', views: '84k', completion: '66%', rpm: '$4.02' },
  { title: 'Productivity in 30 sec', views: '62k', completion: '74%', rpm: '$4.58' }
];

export default function CreatorPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0a0f1e,#172554)', color: '#eff6ff', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ color: '#93c5fd', fontWeight: 600 }}>Aurora Stream • Creator Studio</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>Revenue & Growth Dashboard</h1>
        <p style={{ color: '#bfdbfe', maxWidth: 760 }}>
          Transparent fee breakdown, performance analytics, and trust/violation insights designed for creator-first monetization.
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, marginBottom: 18 }}>
        {cards.map((card) => (
          <article key={card.label} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 14, padding: 16 }}>
            <div style={{ color: '#cbd5e1', fontSize: 13 }}>{card.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>{card.value}</div>
            <div style={{ color: '#93c5fd', marginTop: 6, fontSize: 13 }}>{card.note}</div>
          </article>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <article style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 14, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Top Videos</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#cbd5e1' }}>
                <th style={{ paddingBottom: 10 }}>Title</th>
                <th style={{ paddingBottom: 10 }}>Views</th>
                <th style={{ paddingBottom: 10 }}>Completion</th>
                <th style={{ paddingBottom: 10 }}>RPM</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((v) => (
                <tr key={v.title} style={{ borderTop: '1px solid #334155' }}>
                  <td style={{ padding: '10px 0' }}>{v.title}</td>
                  <td style={{ padding: '10px 0' }}>{v.views}</td>
                  <td style={{ padding: '10px 0' }}>{v.completion}</td>
                  <td style={{ padding: '10px 0' }}>{v.rpm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 14, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Quick Actions</h2>
          <ul style={{ paddingLeft: 18, color: '#dbeafe' }}>
            <li>Request payout</li>
            <li>Download fee statement</li>
            <li>Open appeal for moderation decision</li>
            <li>Generate AI caption + hashtags</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
