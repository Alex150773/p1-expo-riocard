import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SelecionarCartoesScreen() {
  const [selecionado, setSelecionado] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Recarga</Text>

        <View style={{ width: 25 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Escolha os cartões</Text>

        <Text style={styles.subtitle}>
          Selecione o cartão que deseja recarregar
        </Text>

        <TouchableOpacity
          style={[
            styles.card,
            selecionado === 0 && styles.cardSelected,
          ]}
          onPress={() => setSelecionado(0)}
        >
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={30}
              color="#e30613"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Riocard Mais</Text>
            <Text style={styles.cardNumber}>**** **** **** 0000</Text>
          </View>

          <Ionicons
            name={selecionado === 0 ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color="#e30613"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selecionado === 1 && styles.cardSelected,
          ]}
          onPress={() => setSelecionado(1)}
        >
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={30}
              color="#e30613"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Cartão Expresso</Text>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>

          <Ionicons
            name={selecionado === 1 ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color="#e30613"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.favorite}>
          <Ionicons name="star-outline" size={22} color="#e30613" />
          <Text style={styles.favoriteText}>Cartões favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addCard}>
          <Ionicons name="add-circle-outline" size={23} color="#e30613" />
          <Text style={styles.addCardText}>Adicionar cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 7,
    marginBottom: 24,
  },
  card: {
    minHeight: 85,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSelected: {
    borderColor: '#e30613',
    borderWidth: 2,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff1f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  cardNumber: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },
  favorite: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 4,
  },
  favoriteText: {
    fontSize: 15,
    color: '#444',
    marginLeft: 12,
  },
  addCard: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  addCardText: {
    fontSize: 15,
    color: '#444',
    marginLeft: 12,
  },
  continueButton: {
    height: 55,
    backgroundColor: '#e30613',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});