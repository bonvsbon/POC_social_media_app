const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api/v1';

async function getCreatorView() {
  const [profileRes, feedRes] = await Promise.all([
    fetch(`${API_BASE_URL}/users/me`, { cache: 'no-store' }),
    fetch(`${API_BASE_URL}/feed/for-you`, { cache: 'no-store' })
  ]);

  const profile = await profileRes.json();
  const feed = await feedRes.json();
  return { profile, topItems: Array.isArray(feed) ? feed.slice(0, 3) : [] };
}

export default async function CreatorPage() {
  const data = await getCreatorView();

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0a0f1e,#172554)', color: '#eff6ff', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ color: '#93c5fd', fontWeight: 600 }}>Aurora Stream • Creator Studio</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>Revenue & Growth Dashboard</h1>
        <p style={{ color: '#bfdbfe', maxWidth: 760 }}>
          Integrated with API ({API_BASE_URL}) for creator @{data.profile?.handle}. Feed insights are shown below.
        </p>
      </header>

      <section style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 14, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Top Feed Items (Realtime)</h2>
        {data.topItems.map((item: { videoId: string; score: number }) => (
          <div key={item.videoId} style={{ borderTop: '1px solid #334155', padding: '10px 0' }}>
            <div>{item.videoId}</div>
            <div style={{ color: '#93c5fd' }}>score: {item.score.toFixed(3)}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
