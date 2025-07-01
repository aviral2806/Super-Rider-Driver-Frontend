import { ThemedText } from "@/components/ThemedText";
import { useThemeBorderColor } from "@/hooks/useThemeBorderColor";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Hardcoded driver data
const driverData = {
  name: "John Doe",
  todayEarnings: 125.5,
  deliveriesCount: 8,
  avgDeliveryTime: 25, // in minutes
  cancelledOrders: 2,
};

export default function DriverStatsSection() {
  const borderColor = useThemeBorderColor();

  return (
    <View
      style={[
        styles.statsContainer,
        { backgroundColor: "#E23744", borderColor },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flex: 1, maxWidth: "95%", minWidth: "40%" }}>
          <ThemedText type="title" style={styles.welcomeText}>
            Welcome back, {driverData.name}!
          </ThemedText>
        </View>

        {/* Replace IconSymbol with Image */}
        <Image
          source={require("../assets/images/SuperRider2.png")}
          style={{ width: 85, height: 95, paddingBottom: 10 }}
        />
      </View>

      <View style={styles.statsGrid}>
        {/* Today's Earnings */}
        <View
          style={[
            styles.statItem,
            {
              borderColor: "#4CAF50",
              borderWidth: 2,
              backgroundColor: "#cef2d0",
            },
          ]}
        >
          <ThemedText type="subtitle" style={styles.statValue}>
            Rs {driverData.todayEarnings.toFixed(2)}
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 4,
              opacity: 0.6,
            }}
          >
            <MaterialIcons name="attach-money" size={18} color="#2c8230" />
            <ThemedText style={[styles.statLabel, { color: "#2c8230" }]}>
              {"Today's Earnings"}
            </ThemedText>
          </View>
        </View>

        {/* Deliveries */}
        <View
          style={[
            styles.statItem,
            {
              backgroundColor: "#abebf7",
              borderColor: "#3d95c4",
              borderWidth: 2,
            },
          ]}
        >
          <ThemedText
            type="subtitle"
            style={[styles.statValue, { color: "#3d95c4" }]}
          >
            {driverData.deliveriesCount}
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              paddingTop: 4,
              opacity: 0.6,
            }}
          >
            <MaterialIcons name="local-shipping" size={18} color="#16597d" />
            <ThemedText style={[styles.statLabel, { color: "#16597d" }]}>
              Deliveries
            </ThemedText>
          </View>
        </View>
      </View>

      {/* Second row of stats */}
      <View style={styles.statsGrid}>
        {/* Average Delivery Time */}
        <View
          style={[
            styles.statItem,
            {
              borderColor: "#FFC107",
              borderWidth: 2,
              backgroundColor: "#fff3cd",
            },
          ]}
        >
          <ThemedText
            type="subtitle"
            style={[styles.statValue, { color: "#b08710" }]}
          >
            {driverData.avgDeliveryTime} min
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 4,
              opacity: 0.6,
              gap: 3,
              width: "100%",
            }}
          >
            <MaterialIcons name="access-time" size={18} color="#856404" />
            <ThemedText
              style={[styles.statLabel, { color: "#856404", fontSize: 13 }]}
            >
              Avg Delivery Time
            </ThemedText>
          </View>
        </View>

        {/* Cancelled Orders */}
        <View
          style={[
            styles.statItem,
            {
              backgroundColor: "#f8d7da",
              borderColor: "#721c24",
              borderWidth: 2,
            },
          ]}
        >
          <ThemedText
            type="subtitle"
            style={[styles.statValue, { color: "#721c24" }]}
          >
            {driverData.cancelledOrders}
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              paddingTop: 4,
              opacity: 0.6,
            }}
          >
            <MaterialIcons name="cancel" size={18} color="#721c24" />
            <ThemedText style={[styles.statLabel, { color: "#721c24" }]}>
              Cancelled Orders
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  welcomeText: {
    marginTop: 15,
    textAlign: "left",
    fontSize: 28,
    color: "#fff",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    width: "100%",
    marginBottom: 12, // Add margin between rows
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    flex: 1 / 2,
  },
  statValue: {
    color: "#4CAF50",
    marginBottom: 4,
    fontWeight: "800",
    fontSize: 24,
  },
  statLabel: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    fontWeight: "700",
  },
});
