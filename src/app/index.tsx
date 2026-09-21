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

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logoRio}>RIOCARD</Text>
          <Text style={styles.logoMais}>MAIS</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={27} color="#555" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcome}>Olá, Alexander!</Text>

        <View style={styles.digitalCard}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTitle}>Cartão Digital</Text>
            <MaterialCommunityIcons
              name="contactless-payment"
              size={29}
              color="#fff"
            />
          </View>

          <Text style={styles.balanceLabel}>Saldo disponível</Text>
          <Text style={styles.balance}>R$ 0,00</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.cardNumber}>**** **** **** 0000</Text>
            <Text style={styles.cardBrand}>RIOCARD +</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>O que você deseja fazer?</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/recarga')}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="credit-card-plus-outline"
                size={28}
                color="#e30613"
              />
            </View>
            <Text style={styles.actionText}>Recarregar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/cartoes')}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={28}
                color="#e30613"
              />
            </View>
            <Text style={styles.actionText}>Meus cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action}>
            <View style={styles.iconCircle}>
              <Ionicons name="swap-horizontal" size={28} color="#e30613" />
            </View>
            <Text style={styles.actionText}>Transferir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/servicos')}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="grid-outline" size={27} color="#e30613" />
            </View>
            <Text style={styles.actionText}>Serviços</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={27}
            color="#e30613"
          />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Facilidade no seu dia</Text>
            <Text style={styles.infoText}>
              Consulte seus cartões e faça recargas pelo aplicativo.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/')}
        >
          <Ionicons name="home" size={24} color="#e30613" />
          <Text style={styles.navActive}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/cartoes')}
        >
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={24}
            color="#777"
          />
          <Text style={styles.navText}>Cartões</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/recarga')}
        >
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="#777"
          />
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
    height: 72,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  logoRio: {
    fontSize: 17,
    fontWeight: '900',
    color: '#e30613',
    letterSpacing: 1,
  },

  logoMais: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555',
    letterSpacing: 3,
  },

  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  welcome: {
    fontSize: 21,
    fontWeight: '600',
    color: '#333',
    marginBottom: 18,
  },

  digitalCard: {
    backgroundColor: '#e30613',
    borderRadius: 18,
    padding: 20,
    minHeight: 190,
    marginBottom: 28,
    elevation: 5,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  balanceLabel: {
    color: '#fff',
    opacity: 0.9,
    marginTop: 28,
    fontSize: 13,
  },

  balance: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 3,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  cardNumber: {
    color: '#fff',
    fontSize: 13,
  },

  cardBrand: {
    color: '#fff',
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  action: {
    alignItems: 'center',
    width: '23%',
  },

  iconCircle: {
    width: 57,
    height: 57,
    borderRadius: 29,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },

  actionText: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
  },

  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 17,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },

  infoContent: {
    flex: 1,
    marginLeft: 12,
  },

  infoTitle: {
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },

  infoText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#666',
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

  navActive: {
    fontSize: 11,
    color: '#e30613',
    marginTop: 3,
  },

  navText: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },
});