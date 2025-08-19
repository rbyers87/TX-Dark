import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Info, ExternalLink, Shield, MapPin, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import useColorScheme from '@/hooks/useColorScheme';

export default function AboutScreen() {
  const colorScheme = useColorScheme();

  const openTxDOTWebsite = () => {
    Linking.openURL('https://gis-txdot.opendata.arcgis.com/');
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: Colors[colorScheme].text }]}>About This App</Text>
          <Text style={[styles.subtitle, { color: '#e0f2fe' }]}>Texas Jurisdiction Finder</Text>
        </View>

        <View style={[styles.card, { backgroundColor: Colors[colorScheme].background }]}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Info size={24} color="#1e40af" />
              <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>How It Works</Text>
            </View>
            <Text style={[styles.sectionText, { color: Colors[colorScheme].text }]}>
              This app uses your location or a searched address to determine which law enforcement agency has jurisdiction in that area. The system follows the same principles used by 911 dispatch services.
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Shield size={24} color="#1e40af" />
              <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>Jurisdiction Logic</Text>
            </View>
            <Text style={[styles.sectionText, { color: Colors[colorScheme].text }]}>
              • If the location is within city limits, the city police department has jurisdiction{'\n'}
              • If outside city limits or no city police exist, the county sheriff's office has jurisdiction{'\n'}
              • State agencies may have concurrent jurisdiction on highways and state property
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MapPin size={24} color="#1e40af" />
              <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>Data Source</Text>
            </View>
            <Text style={[styles.sectionText, { color: Colors[colorScheme].text }]}>
              Jurisdiction boundaries are determined using official GIS data from the Texas Department of Transportation (TxDOT).
            </Text>
            <TouchableOpacity style={styles.linkButton} onPress={openTxDOTWebsite}>
              <ExternalLink size={16} color="#1e40af" />
              <Text style={styles.linkText}>View TxDOT GIS Data</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AlertTriangle size={24} color="#dc2626" />
              <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>Important Notice</Text>
            </View>
            <Text style={styles.disclaimerText}>
              This app is for informational purposes only. For immediate emergencies, always dial 911. The information provided should not be considered legal advice and jurisdiction boundaries may change over time.
            </Text>
          </View>
        </View>

        <View style={styles.versionInfo}>
          <Text style={[styles.versionText, { color: '#e0f2fe' }]}>Version 1.0.0</Text>
          <Text style={[styles.versionText, { color: '#e0f2fe' }]}>Developed by Ryan B</Text>
          <Text style={[styles.versionSubtext, { color: '#e0f2fe' }]}>Built for Texas Law Enforcement</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#dc2626',
    lineHeight: 20,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 8,
  },
  linkText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  versionInfo: {
    alignItems: 'center',
    marginTop: 30,
  },
  versionText: {
    fontSize: 14,
    fontWeight: '600',
  },
  versionSubtext: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
});
