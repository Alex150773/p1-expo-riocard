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

const servicos = [
  {
    titulo: 'Perfil',
    icone: 'person-outline',
    tipo: 'ion',
    acao: () => router.push('/perfil'),
  },
  {
    titulo: 'Gerenciar pagamento',
    icone: 'credit-card-outline',
    tipo: 'material',
  },
  {
    titulo: 'Meus cartões',
    icone: 'card-outline',
    tipo: 'ion',
    acao: () => router.push('/cartoes'),
  },
  {
    titulo: 'Histórico de recargas',
    icone: 'receipt-outline',
    tipo: 'ion',
  },
  {
    titulo: 'Código de autorização',
    icone: 'key-outline',
    tipo: 'ion',
  },
  {
    titulo: 'Fiscalização',
    icone: 'shield-checkmark-outline',
    tipo: 'ion',
  },
  {
    titulo: 'Central de notificações',
    icone: 'notifications-outline',
    tipo: 'ion',
  },
  {
    titulo: 'Ajuda e atendimento',
    icone: 'help-circle-outline',
    tipo: 'ion',
  },
];

export default function ServicosScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Serviços</Text>

        <View style={{ width: 25 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Serviços</Text>
        <Text style={styles.subtitle}>
          Acesse as opções disponíveis para sua conta
        </Text>

        <View style={styles.list}>
          {servicos.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={item.acao}
              activeOpacity={0.7}
            >
              <View style={styles.iconBox}>
                {item.tipo === 'material' ? (
                  <MaterialCommunityIcons
                    name={item.icone as any}
                    size={25}
                    color="#e30613"
                  />
                ) : (
                  <Ionicons
                    name={item.icone as any}
                    size={25}
                    color="#e30613"
                  />
                )}
              </View>

              <Text style={styles.itemText}>{item.titulo}</Text>

              <Ionicons name="chevron-forward" size={21} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.version}>Versão demonstrativa</Text>
      </ScrollView>

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

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/recarga')}
        >
          <MaterialCommunityIcons name="cash-plus" size={24} color="#777" />
          <Text style={styles.navText}>Recarga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={24} color="#e30613" />
          <Text style={styles.navActive}>Serviços</Text>
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
    paddingBottom: 35,
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
    marginBottom: 22,
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  item: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff1f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  version: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 30,
    marginBottom: 10,
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