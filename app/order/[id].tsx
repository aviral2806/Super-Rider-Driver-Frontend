import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

// Hardcoded order details (in a real app, you'd fetch by ID)
const orderDetails = {
  "1": {
    id: "1",
    customerName: "Alice Smith",
    customerPhone: "+1 (555) 123-4567",
    restaurant: "Pizza Palace",
    restaurantAddress: "100 Food Court, Downtown",
    deliveryAddress: "123 Main St, Downtown",
    amount: 24.99,
    tip: 4.0,
    total: 28.99,
    status: "delivered",
    orderTime: "2:00 PM",
    deliveryTime: "2:30 PM",
    items: [
      { name: "Large Pepperoni Pizza", quantity: 1, price: 18.99 },
      { name: "Garlic Bread", quantity: 1, price: 4.99 },
      { name: "Coke", quantity: 1, price: 1.99 },
    ],
    specialInstructions: "Ring doorbell twice, leave at door",
  },
  "2": {
    id: "2",
    customerName: "Bob Johnson",
    customerPhone: "+1 (555) 234-5678",
    restaurant: "Burger Barn",
    restaurantAddress: "200 Fast Lane, Midtown",
    deliveryAddress: "456 Oak Ave, Midtown",
    amount: 18.75,
    tip: 3.25,
    total: 22.0,
    status: "delivered",
    orderTime: "1:15 PM",
    deliveryTime: "1:45 PM",
    items: [
      { name: "Double Cheeseburger", quantity: 1, price: 12.99 },
      { name: "French Fries", quantity: 1, price: 3.99 },
      { name: "Milkshake", quantity: 1, price: 4.99 },
    ],
    specialInstructions: "Extra napkins please",
  },
  // Add more orders as needed...
};

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const backgroundColor = useThemeColor({}, "background");
  const cardColor = useThemeColor(
    { light: "#f5f5f5", dark: "#2a2a2a" },
    "background"
  );
  const borderColor = useThemeColor(
    { light: "#e0e0e0", dark: "#404040" },
    "text"
  );
  const iconColor = useThemeColor({}, "icon");

  // Get order details (fallback to first order if ID not found)
  const order =
    orderDetails[id as keyof typeof orderDetails] || orderDetails["1"];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color={iconColor} />
        </TouchableOpacity>
        <ThemedText type="title" style={styles.headerTitle}>
          Order Details
        </ThemedText>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Order Status */}
        <View
          style={[styles.card, { backgroundColor: cardColor, borderColor }]}
        >
          <View style={styles.statusHeader}>
            <ThemedText type="subtitle">Order #{order.id}</ThemedText>
            <View style={styles.statusBadge}>
              <ThemedText style={styles.statusText}>✓ Delivered</ThemedText>
            </View>
          </View>
          <ThemedText style={styles.timeText}>
            Ordered: {order.orderTime} • Delivered: {order.deliveryTime}
          </ThemedText>
        </View>

        {/* Customer Info */}
        <View
          style={[styles.card, { backgroundColor: cardColor, borderColor }]}
        >
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Customer
          </ThemedText>
          <ThemedText>{order.customerName}</ThemedText>
          <ThemedText style={styles.phoneText}>
            {order.customerPhone}
          </ThemedText>
          <ThemedText style={styles.addressText}>
            {order.deliveryAddress}
          </ThemedText>
          {order.specialInstructions && (
            <View style={styles.instructionsContainer}>
              <ThemedText style={styles.instructionsLabel}>
                Special Instructions:
              </ThemedText>
              <ThemedText style={styles.instructionsText}>
                {order.specialInstructions}
              </ThemedText>
            </View>
          )}
        </View>

        {/* Restaurant Info */}
        <View
          style={[styles.card, { backgroundColor: cardColor, borderColor }]}
        >
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Restaurant
          </ThemedText>
          <ThemedText>{order.restaurant}</ThemedText>
          <ThemedText style={styles.addressText}>
            {order.restaurantAddress}
          </ThemedText>
        </View>

        {/* Order Items */}
        <View
          style={[styles.card, { backgroundColor: cardColor, borderColor }]}
        >
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Order Items
          </ThemedText>
          {order.items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <View style={styles.itemInfo}>
                <ThemedText>
                  {item.quantity}x {item.name}
                </ThemedText>
              </View>
              <ThemedText>${item.price.toFixed(2)}</ThemedText>
            </View>
          ))}
        </View>

        {/* Payment Summary */}
        <View
          style={[styles.card, { backgroundColor: cardColor, borderColor }]}
        >
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Payment Summary
          </ThemedText>
          <View style={styles.paymentRow}>
            <ThemedText>Subtotal</ThemedText>
            <ThemedText>${order.amount.toFixed(2)}</ThemedText>
          </View>
          <View style={styles.paymentRow}>
            <ThemedText>Tip</ThemedText>
            <ThemedText>${order.tip.toFixed(2)}</ThemedText>
          </View>
          <View style={[styles.paymentRow, styles.totalRow]}>
            <ThemedText type="defaultSemiBold">Total</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.totalAmount}>
              ${order.total.toFixed(2)}
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  statusHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  timeText: {
    fontSize: 12,
    opacity: 0.7,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  phoneText: {
    color: "#2196F3",
    marginTop: 4,
  },
  addressText: {
    opacity: 0.7,
    marginTop: 4,
  },
  instructionsContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "rgba(255, 193, 7, 0.1)",
    borderRadius: 4,
  },
  instructionsLabel: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 2,
  },
  instructionsText: {
    fontSize: 12,
    fontStyle: "italic",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  itemInfo: {
    flex: 1,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: 8,
    paddingTop: 8,
  },
  totalAmount: {
    color: "#4CAF50",
  },
});
