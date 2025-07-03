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
          <ThemedText
            type="title"
            style={[styles.welcomeText, { fontWeight: "700" }]}
          >
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
              backgroundColor: "#4CAF50",
              flexDirection: "row",
              alignItems: "flex-start",
              paddingRight: 0,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <ThemedText
              style={[
                styles.statLabel,
                {
                  color: "#fff",
                  opacity: 0.95,
                  fontWeight: "600",
                },
              ]}
            >
              {"Today's Earnings"}
            </ThemedText>
            <ThemedText
              type="default"
              style={[
                styles.statValue,
                {
                  color: "#fff",
                  marginTop: 10,
                  fontSize: 24,
                },
              ]}
            >
              Rs {driverData.todayEarnings.toFixed(2)}
            </ThemedText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
              marginRight: 6,
              opacity: 0.8,
              borderRadius: 50,
              backgroundColor: "#79d47c",
            }}
          >
            <MaterialIcons name="attach-money" size={12} color="#fff" />
          </View>
        </View>

        {/* Deliveries */}
        <View
          style={[
            styles.statItem,
            {
              backgroundColor: "#3d95c4",
              borderColor: "#3d95c4",
              borderWidth: 2,
              flexDirection: "row",
              alignItems: "flex-start",
              paddingRight: 0,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <ThemedText
              style={[
                styles.statLabel,
                {
                  color: "#fff",
                  opacity: 0.95,
                  fontWeight: "600",
                },
              ]}
            >
              Deliveries
            </ThemedText>
            <ThemedText
              type="default"
              style={[
                styles.statValue,
                {
                  color: "#fff",
                  marginTop: 10,
                  fontSize: 24,
                },
              ]}
            >
              {driverData.deliveriesCount}
            </ThemedText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
              marginRight: 6,
              opacity: 0.8,
              borderRadius: 50,
              backgroundColor: "#5ba3cc",
            }}
          >
            <MaterialIcons name="local-shipping" size={12} color="#fff" />
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
              backgroundColor: "#FFC107",
              flexDirection: "row",
              alignItems: "flex-start",
              paddingRight: 0,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <ThemedText
              style={[
                styles.statLabel,
                {
                  color: "#fff",
                  opacity: 0.95,
                  fontWeight: "600",
                },
              ]}
            >
              Avg Delivery Time
            </ThemedText>
            <ThemedText
              type="default"
              style={[
                styles.statValue,
                {
                  color: "#fff",
                  marginTop: 10,
                  fontSize: 24,
                },
              ]}
            >
              {driverData.avgDeliveryTime} min
            </ThemedText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
              marginRight: 6,
              opacity: 0.8,
              borderRadius: 50,
              backgroundColor: "#ffce3d",
            }}
          >
            <MaterialIcons name="access-time" size={12} color="#fff" />
          </View>
        </View>

        {/* Cancelled Orders */}
        <View
          style={[
            styles.statItem,
            {
              backgroundColor: "#a11523",
              borderColor: "#a11523",
              borderWidth: 2,
              flexDirection: "row",
              alignItems: "flex-start",
              paddingRight: 0,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <ThemedText
              style={[
                styles.statLabel,
                {
                  color: "#fff",
                  opacity: 0.95,
                  fontWeight: "600",
                },
              ]}
            >
              Cancelled Orders
            </ThemedText>
            <ThemedText
              type="default"
              style={[
                styles.statValue,
                {
                  color: "#fff",
                  marginTop: 10,
                  fontSize: 24,
                },
              ]}
            >
              {driverData.cancelledOrders}
            </ThemedText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
              marginRight: 6,
              opacity: 0.8,
              borderRadius: 50,
              backgroundColor: "#e85563",
            }}
          >
            <MaterialIcons name="cancel" size={12} color="#fff" />
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
    marginBottom: 12,
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 6,
    flex: 1 / 2,
  },
  statValue: {
    color: "#4CAF50",
    marginBottom: 4,
    marginLeft: 2,
    fontSize: 24,
    fontFamily: "RedHatDisplay_800ExtraBold_Italic",
  },
  statLabel: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
});
