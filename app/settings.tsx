import { Text, View, Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { VectorGraphicWrap } from "@/components/VectorGraphicWrap";
import { Colors } from "@/constants/Colors";
import { blackShadow, whiteShadow, titleHeader, viewPort } from "@/constants/Styles";
import { Typography } from "@/constants/Typography";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        ...viewPort,
        flex: 1,
        backgroundColor: Colors.light.theme4
      }}
    >
      <Link href="/catalogue">Katalog</Link>
    </View >
  );
}
