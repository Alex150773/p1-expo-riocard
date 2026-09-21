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

const AZUL = '#087DDD';
const CINZA = '#777';

export default function CartoesScreen() {
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
        <Text style={styles.title}>Meus cartões</Text>

        <View style={styles.card}>
          <View style={[styles.cardImage, { backgroundColor: '#148bd2' }]}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={30}
              color="#fff"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Cartão Digital</Text>
            <Text style={styles.cardNumber}>01.07.03372871-7</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.cardImage, { backgroundColor: '#e52a91' }]}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={30}
              color="#fff"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Eu</Text>
            <Text style={styles.cardNumber}>01.09.14194806-1</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusText}>BUI habilitado ✓</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>Adicionar novo cartão</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Início"
          onPress={() => router.replace('/')}
        />

        <NavItem
          icon="card-outline"
          label={'Meus\ncartões'}
          active
        />

        <TouchableOpacity
          style={styles.rechargeNav}
          onPress={() => router.push('/recarga')}
        >
          <View style={styles.rechargeCircle}>
            <MaterialCommunityIcons
              name="cash-plus"
              size={28}
              color="#fff"
            />
          </View>
          <Text style={styles.navText}>Recarga</Text>
        </TouchableOpacity>

        <NavItem icon="star-outline" label="Clube" />

        <NavItem
          icon="menu"
          label="Serviços"
          onPress={() => router.push('/servicos')}
        />
      </View>
    </SafeAreaView>
  );
}

function NavItem({
  icon,
  label,
  active = false,
  onPress,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons
        name={icon}
        size={27}
        color={active ? AZUL : CINZA}
      />

      <Text style={[styles.navText, active && styles.navActive]}>
        {label}
      </Text>
    </TouchableOpacity>
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
    padding: 18,
    paddingBottom: 30,
  },

  title: {
    color: AZUL,
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  card: {
    minHeight: 100,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#eee',
  },

  cardImage: {
    width: 58,
    height: 75,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  cardInfo: {
    flex: 1,
  },

  cardName: {
    fontSize: 21,
    fontWeight: '600',
    color: '#222',
  },

  cardNumber: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  status: {
    backgroundColor: '#27951d',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  statusText: {
    color: '#fff',
    fontSize: 10,
  },

  addButton: {
    height: 67,
    backgroundColor: AZUL,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  bottomNav: {
    height: 82,
    flexDirection: 'row',
    backgroundColor: '#fafbf8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rechargeNav: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rechargeCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -19,
  },

  navText: {
    color: CINZA,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 3,
  },

  navActive: {
    color: AZUL,
  },
});