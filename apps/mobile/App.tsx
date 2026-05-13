import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1020' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text style={{ color: '#E8ECFF', fontSize: 24, fontWeight: '700' }}>Aurora Stream</Text>
        <Text style={{ color: '#AAB4D6', marginTop: 10, textAlign: 'center' }}>
          Mobile MVP scaffold is ready. Next step: connect auth + feed + upload flows.
        </Text>
      </View>
    </SafeAreaView>
  );
}
