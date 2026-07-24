// app/src/screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../styles/theme';
import { getChineseZodiac, getDailyHoroscope } from '../utils/chineseZodiac';
import { getLifePathNumber, getColorByNumber } from '../utils/numerology';

export default function HomeScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [zodiac, setZodiac] = useState('');
  const [horoscope, setHoroscope] = useState({});

  useEffect(() => {
    const year = currentTime.getFullYear();
    const hour = currentTime.getHours();
    const sign = getChineseZodiac(year);
    setZodiac(sign);
    setHoroscope(getDailyHoroscope(sign, hour));
  }, [currentTime]);

  return (
    <View style={styles.container}>
      <Text style={typography.title}>🐉 Horoskopo-IA</Text>
      <Text style={typography.subtitle}>Hoy: {currentTime.toLocaleDateString()}</Text>
      <Text style={styles.zodiacText}>Signo: {zodiac}</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Número de la Suerte</Text>
        <Text style={styles.luckyNumber}>{horoscope.luckyNumber}</Text>
        <Text style={styles.cardText}>Color: {horoscope.luckyColor}</Text>
      </View>

      <View style={styles.horoscopeGrid}>
        <View style={[styles.horoscopeItem, { borderColor: colors.highlightBlue }]}>
          <Text style={styles.emoji}>💕</Text>
          <Text style={styles.itemText}>{horoscope.love}</Text>
        </View>
        <View style={[styles.horoscopeItem, { borderColor: colors.highlightGreen }]}>
          <Text style={styles.emoji}>📈</Text>
          <Text style={styles.itemText}>{horoscope.work}</Text>
        </View>
        <View style={[styles.horoscopeItem, { borderColor: colors.orange }]}>
          <Text style={styles.emoji}>🧘</Text>
          <Text style={styles.itemText}>{horoscope.health}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Numerología →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  zodiacText: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 16,
  },
  luckyNumber: {
    color: colors.primary,
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  cardText: {
    color: colors.white,
    fontSize: 14,
  },
  horoscopeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  horoscopeItem: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 2,
  },
  emoji: {
    fontSize: 24,
  },
  itemText: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
