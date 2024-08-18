import { Text, View, Pressable, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { VectorGraphicWrap } from "@/components/VectorGraphicWrap";
import { Colors } from "@/constants/Colors";
import { blackShadow, whiteShadow, titleHeader, viewPort, catalogue } from "@/constants/Styles";
import { Typography } from "@/constants/Typography";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        // ...viewPort,
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.light.theme3,
      }}
    >
      <ScrollView style={{
        ...catalogue.placesAndFoldersList,
        backgroundColor: Colors.light.offwhite + "bb"
      }}>
        <Text>Folders</Text>
      </ScrollView>
      <ScrollView style={{
        ...catalogue.placesAndFoldersList,
        backgroundColor: Colors.light.offwhite + "77"
      }}>
        <Text>Places</Text>
      </ScrollView>
      <ScrollView style={{
        ...catalogue.sceneList
      }}>
        <Text>Scenes</Text>
      </ScrollView>
    </View >
  );
}
