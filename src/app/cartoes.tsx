import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CartoesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Meus cartões</Text>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={25} color="#555" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Meus cartões</Text>
        <Text style={styles.subtitle}>
          Consulte seus cartões cadastrados
        </Text>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={31}
              color="#e30613"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Riocard Mais</Text>
            <Text style={styles.cardNumber}>**** **** **** 0000</Text>
            <Text style={styles.balance}>Saldo: R$ 0,00</Text>
          </View>

          <Ionicons name="chevron-forward" size={23} color="#999" />
        </View>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={31}
              color="#e30613"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Cartão Expresso</Text>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
            <Text style={styles.balance}>Saldo: R$ 0,00</Text>
          </View>

          <Ionicons name="chevron-forward" size={23} color="#999" />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#e30613" />
          <Text style={styles.addText}>Adicionar novo cartão</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/')}>
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="credit-card"
            size={24}
            color="#e30613"
          />
          <Text style={styles.navActive}>Cartões</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/recarga')}
        >
          <MaterialCommunityIcons name="cash-plus" size={24} color="#777" />
          <Text style={styles.navText}>Recarga</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/servicos')}
        >
          <Ionicons name="grid-outline" size={24} color="#777" />
          <Text style={styles.navText}>Serviços</Text>
        </TouchableOpacity>
      </View>
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
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#333',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
    marginBottom: 25,
  },
  card: {
    minHeight: 105,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    elevation: 2,
  },
  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff1f2',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 4,
  },
  balance: {
    fontSize: 13,
    color: '#555',
    marginTop: 6,
  },
  addButton: {
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e30613',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  addText: {
    color: '#e30613',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
  },
  bottomNav: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 5,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },
  navActive: {
    fontSize: 11,
    color: '#e30613',
    marginTop: 3,
  },
});