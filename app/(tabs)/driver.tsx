import DriverStatsSection from "@/components/DriverStatsSection";
import HomeHeader from "@/components/HomeHeader";
import OrderListSection from "@/components/OrderListSection";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function DriverScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <HomeHeader />
      <DriverStatsSection />
      <OrderListSection />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60, // Account for status bar
  },
});
