import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AZUL = "#087DDD";
const CINZA = "#777";

const servicos = [
  { nome: "Perfil", icone: "person-outline", rota: "/perfil" },
  { nome: "Gerenciar pagamento", icone: "wallet-outline" },
  { nome: "Cartão Digital", icone: "phone-portrait-outline" },
  { nome: "Meus Cartões", icone: "card-outline", rota: "/cartoes" },
  { nome: "Meus pedidos", icone: "receipt-outline" },
  { nome: "Recarregue seu cartão", icone: "cash-outline", rota: "/recarga" },
  { nome: "Recarregue automaticamente", icone: "refresh-outline" },
  { nome: "Onde validar", icone: "location-outline" },
  { nome: "Perguntas frequentes (FAQ)", icone: "help-circle-outline" },
  { nome: "Onde estamos", icone: "map-outline" },
  { nome: "Clube Riocard Mais", icone: "star-outline" },
  { nome: "Código de autorização", icone: "key-outline" },
  { nome: "Fiscalização", icone: "shield-checkmark-outline" },
  { nome: "Central de notificações", icone: "notifications-outline" },
  { nome: "Avaliar o aplicativo", icone: "thumbs-up-outline" },
];

export default function ServicosScreen() {
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
        <Text style={styles.title}>Serviços</Text>

        {servicos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceRow}
            onPress={() => {
              if (item.rota) {
                router.push(item.rota as any);
              }
            }}
          >
            <Ionicons name={item.icone as any} size={25} color={AZUL} />

            <Text style={styles.serviceText}>{item.nome}</Text>

            <Ionicons name="chevron-forward" size={22} color="#999" />
          </TouchableOpacity>
        ))}

        <View style={styles.extraArea}>
          <Text style={styles.version}>Versão 2.68.7-P</Text>
          <Text style={styles.versionInfo}>Aplicativo Riocard Mais</Text>

          <TouchableOpacity style={styles.report}>
            <MaterialCommunityIcons
              name="phone-alert-outline"
              size={25}
              color={AZUL}
            />
            <Text style={styles.reportText}>Disque denúncia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logout}>
            <Ionicons name="log-out-outline" size={25} color="#d33" />
            <Text style={styles.logoutText}>Sair do app</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Início"
          onPress={() => router.replace("/")}
        />

        <NavItem
          icon="card-outline"
          label={"Meus\ncartões"}
          onPress={() => router.push("/cartoes")}
        />

        <TouchableOpacity
          style={styles.rechargeNav}
          onPress={() => router.push("/recarga")}
        >
          <View style={styles.rechargeCircle}>
            <MaterialCommunityIcons name="cash-plus" size={28} color="#fff" />
          </View>
          <Text style={styles.navText}>Recarga</Text>
        </TouchableOpacity>

        <NavItem icon="star-outline" label="Clube" />

        <NavItem icon="menu" label="Serviços" active />
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
      <Ionicons name={icon} size={27} color={active ? AZUL : CINZA} />
      <Text style={[styles.navText, active && styles.navActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9faf7",
  },

  header: {
    height: 125,
    backgroundColor: AZUL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  logo: {
    alignItems: "center",
  },

  logoRio: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 29,
  },

  logoMais: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
    lineHeight: 28,
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 30,
  },

  title: {
    color: AZUL,
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 15,
  },

  serviceRow: {
    minHeight: 61,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  serviceText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },

  extraArea: {
    paddingTop: 25,
  },

  version: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
  },

  versionInfo: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: -14,
    marginBottom: 18,
  },

  report: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  reportText: {
    color: "#333",
    fontSize: 16,
    marginLeft: 15,
  },

  logout: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  logoutText: {
    color: "#d33",
    fontSize: 16,
    marginLeft: 15,
  },

  bottomNav: {
    height: 82,
    flexDirection: "row",
    backgroundColor: "#fafbf8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rechargeNav: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },

  rechargeCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -19,
  },

  navText: {
    color: CINZA,
    fontSize: 11,
    textAlign: "center",
    marginTop: 3,
  },

  navActive: {
    color: AZUL,
  },
});
