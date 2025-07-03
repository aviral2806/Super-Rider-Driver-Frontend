import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PrimaryButton from "@/components/ui/StyledButton";
import { Image } from "expo-image";
import * as Notifications from "expo-notifications";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugInfo = (message: string) => {
    console.log(message); // Still log to console
    // setDebugInfo((prev) => [
    //   ...prev,
    //   `${new Date().toLocaleTimeString()}: ${message}`,
    // ]);
  };

  const sendMockNotification = async () => {
    try {
      addDebugInfo("🔄 Starting notification process...");

      // Request permissions first
      const { status } = await Notifications.requestPermissionsAsync();
      addDebugInfo(`📱 Permission status: ${status}`);

      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please enable notifications in settings"
        );
        addDebugInfo("❌ Permission denied");
        return;
      }

      // Schedule notification
      addDebugInfo("📤 Scheduling notification...");
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "New Delivery Request",
          body: "Pickup at XYZ, Drop at ABC",
          data: { orderId: "123" },
        },
        trigger: null,
      });

      addDebugInfo(`✅ Notification scheduled with ID: ${notificationId}`);
      Alert.alert(
        "Success",
        "Notification sent! Check your notification center."
      );
    } catch (error) {
      const errorMessage = `❌ Error: ${error}`;
      addDebugInfo(errorMessage);
      Alert.alert("Error", "Failed to send notification");
    }
  };

  const clearDebugInfo = () => {
    setDebugInfo([]);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <PrimaryButton
          title="Send Mock Notification"
          onPress={sendMockNotification}
        />
        <PrimaryButton title="Clear Debug" onPress={clearDebugInfo} />
      </ThemedView>

      {/* Debug Info Display */}
      {debugInfo.length > 0 && (
        <ThemedView style={styles.debugContainer}>
          <ThemedText type="subtitle">Debug Info:</ThemedText>
          {debugInfo.map((info, index) => (
            <ThemedText key={index} style={styles.debugText}>
              {info}
            </ThemedText>
          ))}
        </ThemedView>
      )}

      {/* Driver Dashboard Link */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Driver Dashboard</ThemedText>
        <ThemedText>
          Check your earnings, deliveries, and order history.
        </ThemedText>
        <Link href="/driver" style={styles.driverLink}>
          <ThemedText type="link">Go to Driver Dashboard →</ThemedText>
        </Link>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  debugContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  debugText: {
    fontSize: 12,
    fontFamily: "monospace",
    marginVertical: 2,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  driverLink: {
    marginTop: 8,
    padding: 12,
    backgroundColor: "#0a7ea4",
    borderRadius: 8,
    textAlign: "center",
  },
});
