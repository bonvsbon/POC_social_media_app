const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api/v1';

async function getRealtimeStats() {
  const [profileRes, feedRes] = await Promise.all([
    fetch(`${API_BASE_URL}/users/me`, { cache: 'no-store' }),
    fetch(`${API_BASE_URL}/feed/for-you`, { cache: 'no-store' })
  ]);

  const profile = await profileRes.json();
  const feed = await feedRes.json();
  return { profile, feedCount: Array.isArray(feed) ? feed.length : 0 };
}

export default async function AdminPage() {
  const data = await getRealtimeStats();

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0b1220,#111827)', color: '#e5e7eb', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ color: '#93c5fd', fontWeight: 600, letterSpacing: 0.4 }}>Aurora Stream • Admin</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>Operations & Risk Command Center</h1>
        <p style={{ color: '#9ca3af', maxWidth: 760 }}>
          Integrated with API ({API_BASE_URL}) — current user: @{data.profile?.handle}, feed candidates: {data.feedCount}
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
        <article style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 14, padding: 16 }}>
          <div style={{ color: '#9ca3af', fontSize: 13 }}>Auto-Handled Reports</div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>92.4%</div>
        </article>
        <article style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 14, padding: 16 }}>
          <div style={{ color: '#9ca3af', fontSize: 13 }}>Feed Candidates</div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>{data.feedCount}</div>
        </article>
      </section>
    </main>
  );
}
