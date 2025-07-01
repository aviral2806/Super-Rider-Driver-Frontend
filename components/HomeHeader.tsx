import translateLight from "@/assets/images/translate-white.png";
import translateDark from "@/assets/images/translator_6682543 (1).png";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useColorScheme, View } from "react-native";
import StatusDropdown from "./StatusDropdown";

export default function HomeHeader() {
  const iconColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const theme = useColorScheme() ?? "light";
  const translateImage = theme === "light" ? translateDark : translateLight;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        width: "100%",
        marginBottom: 14,
      }}
    >
      <StatusDropdown />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Image
          source={translateImage} // Path to your PNG file
          style={{ width: 40, height: 40 }} // Adjust size and styling
        />
        <View
          style={{
            borderRadius: "30%",
            borderColor: theme === "light" ? "black" : "white",
            borderWidth: 2,
            padding: 5,
          }}
        >
          <FontAwesome6 name="user" size={20} color={iconColor} />
        </View>
      </View>
    </View>
  );
}
