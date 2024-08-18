import { useCallback, useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Staatliches_400Regular } from "@expo-google-fonts/staatliches";
import GLYPHS from "@expo/vector-icons/build/MaterialCommunityIcons"

import { NavigationHeader } from "@/components/NavigationHeader";
import { LinkComponent } from "expo-router/build/link/Link";

SplashScreen.preventAutoHideAsync();

export type ExtraButton = {
  iconName: "wrench-outline"
  route: "/catalogueEdit"
};

export const headerExtraButtons: { [key: string]: ExtraButton } = {
  catalogue: {
    iconName: "wrench-outline",
    route: "/catalogueEdit",
  }
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Staatliches_400Regular });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Stack
      screenOptions={{ header: NavigationHeader }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} />
      <Stack.Screen
        name="catalogue"
        options={{
          title: "Katalog"
        }}
      />
      <Stack.Screen
        name="catalogueEdit"
        options={{
          title: "Katalog",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Inställningar"
        }}
      />
    </Stack>
  );
}
