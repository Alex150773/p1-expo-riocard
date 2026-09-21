import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riocard Mais</Text>
      <Text style={styles.subtitle}>Início</Text>

      <Link href="/cartoes" style={styles.link}>
        Meus cartões
      </Link>

      <Link href="/recarga" style={styles.link}>
        Recarga
      </Link>

      <Link href="/servicos" style={styles.link}>
        Serviços
      </Link>

      <Link href="/perfil" style={styles.link}>
        Perfil
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
  link: {
    fontSize: 18,
    padding: 10,
  },
});