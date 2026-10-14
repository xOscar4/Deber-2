import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={18} color="#021F59" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 92,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D8DDEB",
  },
  iconButtonLabel: {
    color: "#021F59",
    marginTop: 8,
    fontWeight: "600",
  },
});
