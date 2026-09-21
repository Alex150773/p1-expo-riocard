import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AZUL = '#087DDD';
const CINZA = '#777';

export default function RecargaScreen() {
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

      <View style={styles.container}>
        <Text style={styles.title}>
          Selecione o tipo de{'\n'}recarga
        </Text>

        <Text style={styles.subtitle}>Recarga comum</Text>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="cash-plus"
              size={35}
              color={AZUL}
            />
          </View>

          <View style={styles.optionInfo}>
            <Text style={styles.optionTitle}>Comum</Text>

            <Text style={styles.optionText}>
              Escolha o cartão para recarregar e compre seus créditos na hora.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/selecionar-cartoes')}
      >
        <Text style={styles.continueText}>Continuar</Text>
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
          onPress={() => router.push('/cartoes')}
        />

        <TouchableOpacity style={styles.rechargeNav}>
          <View style={styles.rechargeCircle}>
            <MaterialCommunityIcons
              name="cash-plus"
              size={29}
              color="#fff"
            />
          </View>

          <Text style={styles.navActive}>Recarga</Text>
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
  onPress,
}: {
  icon: any;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={27} color={CINZA} />
      <Text style={styles.navText}>{label}</Text>
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
    paddingHorizontal: 25,
    paddingTop: 27,
  },

  title: {
    color: AZUL,
    fontSize: 27,
    fontWeight: 'bold',
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 23,
    marginBottom: 16,
  },

  option: {
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 120,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },

  iconBox: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  optionInfo: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },

  optionText: {
    color: '#666',
    fontSize: 16,
    lineHeight: 22,
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
    fontSize: 11,
    marginTop: 3,
  },
});