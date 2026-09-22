import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AZUL = '#087DDD';

export default function SelecionarCartoesScreen() {
  const [selecionado, setSelecionado] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={32} color="#fff" />
        </TouchableOpacity>

        <View style={styles.logo}>
          <Text style={styles.logoRio}>riocard++</Text>
          <Text style={styles.logoMais}>mais</Text>
        </View>

        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Escolha um ou mais cartões</Text>

        <Text style={styles.subtitle}>
          Selecione os cartões que deseja recarregar
        </Text>

        <TouchableOpacity
          style={[
            styles.card,
            selecionado === 0 && styles.cardSelected,
          ]}
          onPress={() => setSelecionado(0)}
        >
          <View style={styles.cardImage}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={31}
              color="#fff"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Cartão Digital</Text>
            <Text style={styles.cardNumber}>01.07.03372871-7</Text>
          </View>

          <Ionicons
            name={
              selecionado === 0
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={26}
            color={AZUL}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selecionado === 1 && styles.cardSelected,
          ]}
          onPress={() => setSelecionado(1)}
        >
          <View style={[styles.cardImage, styles.cardPink]}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={31}
              color="#fff"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Eu</Text>
            <Text style={styles.cardNumber}>01.09.14194806-1</Text>
          </View>

          <Ionicons
            name={
              selecionado === 1
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={26}
            color={AZUL}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="star-outline" size={26} color={AZUL} />
          <Text style={styles.optionText}>Cartões favoritos</Text>
          <Ionicons name="chevron-forward" size={22} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="add-circle-outline" size={27} color={AZUL} />
          <Text style={styles.optionText}>Adicionar cartão</Text>
          <Ionicons name="chevron-forward" size={22} color="#888" />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9faf7',
  },

  header: {
    height: 125,
    backgroundColor: AZUL,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  logo: {
    alignItems: 'center',
  },

  logoRio: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 29,
  },

  logoMais: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
    lineHeight: 28,
  },

  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  title: {
    color: AZUL,
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    minHeight: 95,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 13,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardSelected: {
    borderColor: AZUL,
    borderWidth: 2,
  },

  cardImage: {
    width: 55,
    height: 70,
    borderRadius: 7,
    backgroundColor: '#148bd2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  cardPink: {
    backgroundColor: '#e52a91',
  },

  cardInfo: {
    flex: 1,
  },

  cardName: {
    fontSize: 19,
    fontWeight: '600',
    color: '#333',
  },

  cardNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  option: {
    minHeight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 14,
  },

  continueButton: {
    height: 67,
    backgroundColor: AZUL,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '600',
  },
});