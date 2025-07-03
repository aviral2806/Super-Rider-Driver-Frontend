import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import PrimaryButton from "@/components/ui/StyledButton";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Hardcoded order data
const orderData = {
  orderId: "ORD-2024-001",
  customerName: "Sarah Johnson",
  customerPhone: "+91 98765 43210",
  restaurant: {
    name: "Pizza Palace",
    address: "123 Main Street, Downtown",
    phone: "+91 98765 12345",
  },
  deliveryAddress: "456 Oak Avenue, Apartment 2B, Midtown",
  estimatedEarning: 25, // Changed to INR
  estimatedTime: {
    pickup: 8,
    delivery: 15,
    total: 23,
  },
  distance: {
    toRestaurant: 2.1,
    toCustomer: 3.7,
    total: 5.8,
  },
  orderValue: 850,
  priority: "high",
};

export default function OrderRequest() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const iconColor = useThemeColor({}, "icon");
  const cardBackgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor(
    { light: "#e0e0e0", dark: "#333" },
    "border"
  );

  const handleGoBack = () => {
    router.back();
  };

  const handleAccept = () => {
    // TODO: Implement accept logic
    router.push("/driver");
  };

  const handleReject = () => {
    // TODO: Implement reject logic
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color={iconColor} />
        </TouchableOpacity>
        <ThemedText type="title" style={styles.headerTitle}>
          Order Request
        </ThemedText>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Priority Badge */}
        <View style={[styles.priorityBadge, { backgroundColor: "#ff4444" }]}>
          <ThemedText style={styles.priorityText}>HIGH PRIORITY</ThemedText>
        </View>

        {/* Order Summary Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: cardBackgroundColor, borderColor },
          ]}
        >
          <View style={styles.cardHeader}>
            <ThemedText type="subtitle" style={styles.cardTitle}>
              Order Summary
            </ThemedText>
            <ThemedText style={styles.orderId}>#{orderData.orderId}</ThemedText>
          </View>

          <View style={styles.customerInfo}>
            <MaterialIcons name="person" size={20} color="#666" />
            <View style={styles.customerDetails}>
              <ThemedText style={styles.customerName}>
                {orderData.customerName}
              </ThemedText>
              <ThemedText style={styles.customerPhone}>
                {orderData.customerPhone}
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Earnings Card */}
        <View style={[styles.card, styles.earningsCard]}>
          <View style={styles.earningsHeader}>
            <MaterialIcons name="attach-money" size={18} color="#fff" />
            <ThemedText style={styles.earningsTitle}>Your Earnings</ThemedText>
          </View>
          <ThemedText style={styles.earningsAmount}>
            ₹{orderData.estimatedEarning}
          </ThemedText>
        </View>

        {/* Delivery Details Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: cardBackgroundColor, borderColor },
          ]}
        >
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Delivery Details
          </ThemedText>

          {/* Pickup Location */}
          <View style={styles.locationSection}>
            <View style={styles.locationHeader}>
              <View
                style={[styles.locationDot, { backgroundColor: "#4CAF50" }]}
              />
              <ThemedText style={styles.locationTitle}>Pickup</ThemedText>
              <ThemedText style={styles.timeEstimate}>
                {orderData.estimatedTime.pickup} min
              </ThemedText>
            </View>
            <View style={styles.locationDetails}>
              <ThemedText style={styles.restaurantName}>
                {orderData.restaurant.name}
              </ThemedText>
              <ThemedText style={styles.address}>
                {orderData.restaurant.address}
              </ThemedText>
              <ThemedText style={styles.distance}>
                {orderData.distance.toRestaurant} miles away
              </ThemedText>
            </View>
          </View>

          {/* Delivery Location */}
          <View style={styles.locationSection}>
            <View style={styles.locationHeader}>
              <View
                style={[styles.locationDot, { backgroundColor: "#ff4444" }]}
              />
              <ThemedText style={styles.locationTitle}>Drop-off</ThemedText>
              <ThemedText style={styles.timeEstimate}>
                {orderData.estimatedTime.delivery} min
              </ThemedText>
            </View>
            <View style={styles.locationDetails}>
              <ThemedText style={styles.address}>
                {orderData.deliveryAddress}
              </ThemedText>
              <ThemedText style={styles.distance}>
                {orderData.distance.toCustomer} miles from restaurant
              </ThemedText>
            </View>
          </View>

          {/* Total Time */}
          <View style={styles.totalTimeSection}>
            <MaterialIcons name="access-time" size={20} color="#666" />
            <ThemedText style={styles.totalTimeText}>
              Total estimated time: {orderData.estimatedTime.total} minutes
            </ThemedText>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <PrimaryButton
            title="Reject"
            onPress={handleReject}
            style={[styles.button, styles.rejectButton]}
            textStyle={styles.rejectButtonText}
          />
          <PrimaryButton
            title="Accept Order"
            onPress={handleAccept}
            style={[styles.button, styles.acceptButton]}
          />
        </View>
      </View>
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
    paddingTop: 50,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  priorityBadge: {
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: "600",
  },
  orderId: {
    color: "#666",
    fontSize: 14,
  },
  customerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  customerDetails: {
    flex: 1,
  },
  customerName: {
    fontWeight: "600",
    fontSize: 16,
  },
  customerPhone: {
    color: "#666",
    fontSize: 14,
  },
  earningsCard: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
    alignItems: "center", // Center the content
    paddingVertical: 12,
    height: 90, // Add more vertical padding
  },
  earningsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  earningsTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  earningsAmount: {
    color: "#fff",
    fontSize: 42, // Make it bigger since it's the only number
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 24, // Add some space above the amount
  },
  locationSection: {
    marginBottom: 16,
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  locationTitle: {
    fontWeight: "600",
    flex: 1,
  },
  timeEstimate: {
    color: "#666",
    fontSize: 14,
  },
  locationDetails: {
    marginLeft: 20,
    gap: 4,
  },
  restaurantName: {
    fontWeight: "600",
    fontSize: 16,
  },
  address: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },
  distance: {
    color: "#4CAF50",
    fontSize: 12,
    fontWeight: "600",
  },
  totalTimeSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalTimeText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
    marginBottom: 32,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
  },
  rejectButton: {
    backgroundColor: "#f5f5f5",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  rejectButtonText: {
    color: "#666",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
  },
});
