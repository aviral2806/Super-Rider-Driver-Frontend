import { ThemedText } from "@/components/ThemedText";
import { useThemeBorderColor } from "@/hooks/useThemeBorderColor";
import { useThemeCardColor } from "@/hooks/useThemeCardColor";
import { Link } from "expo-router";
import * as Native from "react-native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Hardcoded orders data
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

export default function OrderListSection() {
  const cardColor = useThemeCardColor();
  const borderColor = useThemeBorderColor();

  const renderOrderItem = ({ item }: { item: (typeof orders)[0] }) => (
    <Link href={`/order/${item.id}`} asChild>
      <TouchableOpacity
        style={Native.StyleSheet.flatten([
          styles.orderCard,
          {
            backgroundColor: cardColor,
            borderColor: borderColor,
          },
        ])}
      >
        <View
          style={{
            borderColor: cardColor,
            borderWidth: 1,
            borderRadius: 8,
            padding: 4,
            marginBottom: 8,
          }}
        >
          <View style={styles.orderHeader}>
            <ThemedText type="defaultSemiBold">{item.customerName}</ThemedText>
            <ThemedText style={styles.amount}>Rs {item.amount}</ThemedText>
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
  );
}

const styles = StyleSheet.create({
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
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
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
