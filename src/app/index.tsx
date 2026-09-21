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
const AZUL_ESCURO = '#0064A9';
const CINZA = '#777';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoRio}>riocard</Text>
          <Text style={styles.logoMais}>mais</Text>
          <Text style={styles.logoPlus}>++</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Cartão Digital */}
        <View style={styles.digitalCard}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTitle}>Cartão Digital</Text>

            <TouchableOpacity style={styles.rechargeMini}>
              <MaterialCommunityIcons
                name="cash-plus"
                size={21}
                color="#fff"
              />
              <Text style={styles.rechargeMiniText}>Fazer recarga</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.balanceRow}>
            <Text style={styles.balance}>R$ • • • • •</Text>
            <Ionicons name="eye-off-outline" size={28} color="#fff" />
          </View>

          <View style={styles.paymentRow}>
            <View style={styles.paymentOption}>
              <Ionicons name="phone-portrait-outline" size={25} color="#fff" />
              <Text style={styles.paymentText}>Pagar por celular</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.paymentOption}>
              <MaterialCommunityIcons name="qrcode" size={27} color="#fff" />
              <Text style={styles.paymentText}>Pagar por QR Code</Text>
            </View>
          </View>
        </View>

        {/* Serviços */}
        <Text style={styles.sectionTitle}>Serviços</Text>

        <Text style={styles.sectionSubtitle}>
          Clique abaixo no serviço que deseja utilizar
        </Text>

        <View style={styles.servicesGrid}>
          <Service
            icon="cellphone-check"
            title={'Valida\nMais'}
          />

          <Service
            icon="credit-card-outline"
            title={'Cartão\nDigital'}
          />

          <Service
            icon="star-outline"
            title={'Clube\nRiocard'}
          />

          <Service
            icon="cash-plus"
            title={'Fazer\nrecarga'}
            onPress={() => router.push('/recarga')}
          />

          <Service
            icon="credit-card-multiple-outline"
            title={'Meus\ncartões'}
            onPress={() => router.push('/cartoes')}
          />

          <Service
            icon="clipboard-text-outline"
            title={'Meus\npedidos'}
          />
        </View>
      </ScrollView>

      {/* Navegação inferior */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Início"
          active
          onPress={() => router.replace('/')}
        />

        <NavItem
          icon="card-outline"
          label={'Meus\ncartões'}
          onPress={() => router.push('/cartoes')}
        />

        <TouchableOpacity
          style={styles.rechargeNav}
          onPress={() => router.push('/recarga')}
        >
          <View style={styles.rechargeCircle}>
            <MaterialCommunityIcons
              name="cash-plus"
              size={29}
              color="#fff"
            />
          </View>
          <Text style={styles.navText}>Recarga</Text>
        </TouchableOpacity>

        <NavItem
          icon="star-outline"
          label="Clube"
        />

        <NavItem
          icon="menu"
          label="Serviços"
          onPress={() => router.push('/servicos')}
        />
      </View>
    </SafeAreaView>
  );
}

function Service({
  icon,
  title,
  onPress,
}: {
  icon: any;
  title: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.serviceCard}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <MaterialCommunityIcons
        name={icon}
        size={31}
        color={AZUL}
      />

      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
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
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={27}
        color={active ? AZUL : CINZA}
      />

      <Text
        style={[
          styles.navText,
          active && styles.navActive,
        ]}
      >
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    position: 'relative',
    alignItems: 'center',
  },

  logoRio: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },

  logoMais: {
    color: '#fff',
    fontSize: 31,
    fontWeight: 'bold',
    lineHeight: 31,
  },

  logoPlus: {
    position: 'absolute',
    right: -24,
    top: -8,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingBottom: 25,
  },

  digitalCard: {
    marginHorizontal: 15,
    marginTop: 0,
    backgroundColor: AZUL,
    borderRadius: 8,
    padding: 17,
    minHeight: 180,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 20,
  },

  rechargeMini: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.08)',
    padding: 8,
    borderRadius: 6,
  },

  rechargeMiniText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 4,
  },

  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },

  balance: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },

  paymentRow: {
    height: 51,
    backgroundColor: AZUL_ESCURO,
    borderRadius: 8,
    marginTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#fff',
  },

  paymentText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 5,
  },

  sectionTitle: {
    color: AZUL,
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 25,
    marginHorizontal: 16,
  },

  sectionSubtitle: {
    color: AZUL,
    fontSize: 18,
    lineHeight: 24,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 18,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },

  serviceCard: {
    width: '31%',
    minHeight: 105,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginBottom: 14,
    padding: 13,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  serviceText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    lineHeight: 19,
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  rechargeNav: {
    flex: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rechargeCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: AZUL,
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