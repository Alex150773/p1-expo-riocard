import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const opcoes = [
  {
    titulo: 'Meus dados',
    icone: 'person-outline',
  },
  {
    titulo: 'Termos de uso',
    icone: 'document-text-outline',
  },
  {
    titulo: 'Política de privacidade',
    icone: 'shield-checkmark-outline',
  },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Perfil</Text>

        <View style={{ width: 25 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={40} color="#e30613" />
          </View>

          <Text style={styles.name}>Alexander</Text>
          <Text style={styles.description}>Minha conta Riocard Mais</Text>
        </View>

        <View style={styles.list}>
          {opcoes.map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <View style={styles.iconBox}>
                <Ionicons
                  name={item.icone as any}
                  size={24}
                  color="#e30613"
                />
              </View>

              <Text style={styles.itemText}>{item.titulo}</Text>

              <Ionicons name="chevron-forward" size={21} color="#999" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.item}>
            <View style={styles.iconBox}>
              <Ionicons name="trash-outline" size={24} color="#e30613" />
            </View>

            <Text style={styles.deleteText}>Excluir cadastro</Text>

            <Ionicons name="chevron-forward" size={21} color="#999" />
          </TouchableOpacity>
        </View>
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
  },
  profile: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff1f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },
  list: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  item: {
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#fff1f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  deleteText: {
    flex: 1,
    fontSize: 15,
    color: '#e30613',
    fontWeight: '600',
  },
});