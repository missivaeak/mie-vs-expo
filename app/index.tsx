import { Text, View, Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { VectorGraphicWrap } from "@/components/VectorGraphicWrap";
import { Colors } from "@/constants/Colors";
import { blackShadow, whiteShadow, titleHeader, viewPort, paddingTop } from "@/constants/Styles";
import { Typography } from "@/constants/Typography";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        ...viewPort,
        paddingTop: paddingTop + 10,
        flex: 1,
        backgroundColor: Colors.light.theme4
      }}
    >
      <VectorGraphicWrap
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
        ellipsi={[
          { pos: { x: 650, y: 200 }, majorRadius: 1383, minorRadius: 1307, angleDeg: 0, colour: Colors.light.theme2 },
          { pos: { x: 650, y: 0 }, majorRadius: 1383, minorRadius: 1307, angleDeg: 0, colour: Colors.light.theme1 },
          { pos: { x: -80, y: 350 }, majorRadius: 900, minorRadius: 456, angleDeg: 0, colour: Colors.light.offwhite + "aa" }
        ]}
      >

        <Text style={{
          ...titleHeader,
          ...blackShadow.small,
          color: Colors.light.offwhite
        }}>
          <Text style={{ color: Colors.light.accent }}>Mie </Text>
          Visuella Scener
        </Text>

        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: titleHeader.lineHeight,
            justifyContent: "center",
          }}
        >
          <Link href="/settings" asChild>
            <Pressable>
              <Icon
                name="cog-outline"
                size={Typography.icon.sizes.small}
                color={Colors.light.offblack}
                style={{
                  ...whiteShadow.small
                }}
              />
            </Pressable>
          </Link>
        </View>

        <View style={{
          flexGrow: 1,
          justifyContent: "center"
        }}>
          <Link href="/catalogue" asChild>
            <Pressable style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Icon
                name="power"
                size={Typography.icon.sizes.veryLarge}
                color={Colors.light.offblack}
                style={{
                  ...whiteShadow.large,
                  marginBottom: -25
                }}
              />
              <Text style={{
                ...titleHeader,
                ...blackShadow.small,
                color: Colors.light.accent,
                overflow: "visible"
              }}>Starta</Text>
            </Pressable>
          </Link>
        </View>
      </VectorGraphicWrap>
    </View >
  );
}
