import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AZUL = '#087DDD';
const CINZA = '#777';

const opcoes = [
  { nome: 'Meus dados', icone: 'person-outline' },
  { nome: 'Termos de uso', icone: 'document-text-outline' },
  { nome: 'Política de privacidade', icone: 'lock-closed-outline' },
  { nome: 'Excluir cadastro', icone: 'trash-outline' },
];

export default function PerfilScreen() {
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
        <Text style={styles.title}>Perfil</Text>

        {opcoes.map((item, index) => (
          <TouchableOpacity style={styles.row} key={index}>
            <Ionicons
              name={item.icone as any}
              size={26}
              color={AZUL}
            />

            <Text
              style={[
                styles.rowText,
                item.nome === 'Excluir cadastro' && styles.deleteText,
              ]}
            >
              {item.nome}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={23}
              color="#999"
            />
          </TouchableOpacity>
        ))}
      </View>

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
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  title: {
    color: AZUL,
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  row: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  rowText: {
    flex: 1,
    fontSize: 17,
    color: '#333',
    marginLeft: 15,
  },

  deleteText: {
    color: '#d33',
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
});