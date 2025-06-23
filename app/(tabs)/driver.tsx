import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Image } from "expo-image";
import { Link } from "expo-router";
import * as Native from "react-native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons
// Hardcoded data
const driverData = {
  name: "John Doe",
  todayEarnings: 125.5,
  deliveriesCount: 8,
};

const orders = [
  {
    id: "1",
    customerName: "Alice Smith",
    restaurant: "Pizza Palace",
    address: "123 Main St, Downtown",
    amount: 24.99,
    status: "delivered",
    time: "2:30 PM",
  },
  {
    id: "2",
    customerName: "Bob Johnson",
    restaurant: "Burger Barn",
    address: "456 Oak Ave, Midtown",
    amount: 18.75,
    status: "delivered",
    time: "1:45 PM",
  },
  {
    id: "3",
    customerName: "Carol Williams",
    restaurant: "Sushi Spot",
    address: "789 Pine Rd, Uptown",
    amount: 32.4,
    status: "delivered",
    time: "12:15 PM",
  },
  {
    id: "4",
    customerName: "David Brown",
    restaurant: "Taco Time",
    address: "321 Elm St, Southside",
    amount: 15.6,
    status: "delivered",
    time: "11:30 AM",
  },
  {
    id: "5",
    customerName: "Emma Davis",
    restaurant: "Coffee Corner",
    address: "654 Maple Dr, Westend",
    amount: 8.25,
    status: "delivered",
    time: "10:45 AM",
  },
];

export default function DriverScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const cardColor = useThemeColor(
    { light: "#f5f5f5", dark: "#2a2a2a" },
    "background"
  );
  const borderColor = useThemeColor(
    { light: "#e0e0e0", dark: "#404040" },
    "text"
  );

  const renderOrderItem = ({ item }: { item: (typeof orders)[0] }) => (
    <Link href={`/order/${item.id}`} asChild>
      <TouchableOpacity
        style={Native.StyleSheet.flatten([
          styles.orderCard,
          {
            backgroundColor: cardColor || "#f5f5f5", // Fallback to valid color
            borderColor: borderColor || "#e0e0e0", // Fallback to valid color
          },
        ])}
      >
        <View
          style={{
            borderColor: cardColor || "#f5f5f5", // Fallback to valid color
            borderWidth: 1,
            borderRadius: 8,
            padding: 8,
            marginBottom: 8,
          }}
        >
          <View style={styles.orderHeader}>
            <ThemedText type="defaultSemiBold">{item.customerName}</ThemedText>
            <ThemedText style={styles.amount}>${item.amount}</ThemedText>
          </View>
          <ThemedText style={styles.restaurant}>{item.restaurant}</ThemedText>
          <ThemedText style={styles.address}>{item.address}</ThemedText>
          <View style={styles.orderFooter}>
            <Text style={[styles.status, { color: "#4CAF50" }]}>
              ✓ {item.status}
            </Text>
            <ThemedText style={styles.time}>{item.time}</ThemedText>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      {/* Driver Stats Section */}
      <View
        style={[
          styles.statsContainer,
          { backgroundColor: "#E23744", borderColor },
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, maxWidth: "75%" }}>
            <ThemedText type="title" style={styles.welcomeText}>
              Welcome back, {driverData.name}!
            </ThemedText>
          </View>

          {/* Replace IconSymbol with Image */}
          <Image
            source={require("../../assets/images/—Pngtree—cartoon delivery man_876933.png")} // Path to your PNG file
            style={{ width: 100, height: 100, borderRadius: 27 }} // Adjust size and styling
          />
        </View>

        <View style={styles.statsGrid}>
          {/* Today's Earnings */}
          <View style={styles.statItem}>
            {/* Icon */}
            <ThemedText type="subtitle" style={styles.statValue}>
              ${driverData.todayEarnings.toFixed(2)}
            </ThemedText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 4,
                opacity: 0.6,
              }}
            >
              <MaterialIcons name="attach-money" size={18} />
              <ThemedText style={styles.statLabel}>
                {"Today's Earnings"}
              </ThemedText>
            </View>
          </View>

          {/* Deliveries */}
          <View style={styles.statItem}>
            {/* Icon */}
            <ThemedText type="subtitle" style={styles.statValue}>
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
              <MaterialIcons name="local-shipping" size={18} />
              <ThemedText style={styles.statLabel}>Deliveries</ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Orders List Section */}
      <View style={styles.ordersSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Today's Orders
        </ThemedText>

        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ordersList}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60, // Account for status bar
  },
  statsContainer: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  welcomeText: {
    marginBottom: 20,
    textAlign: "left",
    fontSize: 34,
    color: "#fff",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
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
  ordersSection: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  ordersList: {
    paddingBottom: 20,
    gap: 24,
  },
  orderCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  amount: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  restaurant: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  address: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 8,
  },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    opacity: 0.6,
  },
});
