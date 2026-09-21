import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RecargaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Recarga</Text>

        <View style={{ width: 25 }} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Selecione o tipo de recarga</Text>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="credit-card-plus-outline"
              size={31}
              color="#e30613"
            />
          </View>

          <View style={styles.optionInfo}>
            <Text style={styles.optionTitle}>Comum</Text>
            <Text style={styles.optionText}>
              Recarregue seu cartão Riocard Mais
            </Text>
          </View>

          <View style={styles.radio}>
            <View style={styles.radioSelected} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push('/selecionar-cartoes')}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/')}
        >
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.navText}>Início</Text>
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

        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="#e30613"
          />
          <Text style={styles.navActive}>Recarga</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginTop: 12,
    marginBottom: 25,
  },
  option: {
    minHeight: 90,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff1f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  optionInfo: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  optionText: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#e30613',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e30613',
  },
  continueButton: {
    height: 55,
    backgroundColor: '#e30613',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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