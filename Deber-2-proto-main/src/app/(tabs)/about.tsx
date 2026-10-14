import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>EPN</Text>
        <Text style={styles.title}>Proyecto institucional</Text>
        <Text style={styles.text}>
          Aplicación visual con identidad de la Escuela Politécnica Nacional,
          enfocada en una presentación limpia, moderna y profesional.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e4e9",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "#D8DDEB",
  },
  eyebrow: {
    color: "#F22227",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    color: "#021F59",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  text: {
    color: "#3E4860",
    fontSize: 16,
    lineHeight: 24,
  },
});
