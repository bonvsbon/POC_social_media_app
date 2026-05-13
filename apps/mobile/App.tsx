import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native';

type FeedItem = { videoId: string; score: number };

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api/v1';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [profile, setProfile] = useState<{ handle: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const [profileRes, feedRes] = await Promise.all([
          fetch(`${API_BASE_URL}/users/me`),
          fetch(`${API_BASE_URL}/feed/for-you`)
        ]);
        const profileJson = await profileRes.json();
        const feedJson = await feedRes.json();
        setProfile(profileJson);
        setFeed(feedJson);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const subtitle = useMemo(() => {
    if (error) return `Connection error: ${error}`;
    return `Connected to API: ${API_BASE_URL}`;
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1020' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: '#E8ECFF', fontSize: 28, fontWeight: '700' }}>Aurora Stream</Text>
        <Text style={{ color: '#AAB4D6', marginTop: 8 }}>{subtitle}</Text>

        {loading ? (
          <View style={{ marginTop: 22 }}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <View style={{ marginTop: 20, backgroundColor: '#111827', borderRadius: 12, padding: 14 }}>
              <Text style={{ color: '#9CA3AF', fontSize: 12 }}>Signed-in user</Text>
              <Text style={{ color: '#F3F4F6', fontSize: 20, marginTop: 6 }}>@{profile?.handle ?? 'unknown'}</Text>
            </View>

            <View style={{ marginTop: 14, backgroundColor: '#111827', borderRadius: 12, padding: 14 }}>
              <Text style={{ color: '#9CA3AF', fontSize: 12, marginBottom: 8 }}>For You Feed (API)</Text>
              {feed.map((item) => (
                <View key={item.videoId} style={{ paddingVertical: 9, borderBottomColor: '#1F2937', borderBottomWidth: 1 }}>
                  <Text style={{ color: '#F3F4F6' }}>Video: {item.videoId}</Text>
                  <Text style={{ color: '#60A5FA', fontSize: 12 }}>Score: {item.score.toFixed(3)}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
