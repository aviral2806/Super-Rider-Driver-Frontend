import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  title: string;
  onPress: () => void;
}

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <ThemedText style={styles.text}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
