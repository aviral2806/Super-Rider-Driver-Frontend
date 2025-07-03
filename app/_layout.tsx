import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
// import { useFonts } from "expo-font";
import {
  RedHatDisplay_600SemiBold,
  RedHatDisplay_800ExtraBold_Italic,
  useFonts,
} from "@expo-google-fonts/red-hat-display";
import * as Notifications from "expo-notifications";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [loaded] = useFonts({
    RedHatDisplay_600SemiBold,
    RedHatDisplay_800ExtraBold_Italic,
  });

  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  //   Questrial: require("../assets/fonts/Questrial-Regular.ttf"),
  // });

  useEffect(() => {
    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("🔔 Notification tapped!", response);
        const orderId = response.notification.request.content.data?.orderId;
        console.log("📦 Order ID:", orderId);

        if (orderId) {
          console.log("🚀 Navigating to order-request:", orderId);
          // Use the correct parameter name that matches your component
          router.push(`/order-request/${orderId}`);
        } else {
          console.log("❌ No order ID, going to not-found");
          router.push("/+not-found");
        }
      });

    return () => responseListener.remove();
  }, [router]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="order/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="order-request/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
