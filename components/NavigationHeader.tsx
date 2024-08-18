import { Text, View, type ViewProps, Pressable, Platform } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

import { VectorGraphicWrap } from "./VectorGraphicWrap";
import { Colors } from "@/constants/Colors";
import { titleHeader, blackShadow, whiteShadow, paddingTop } from "@/constants/Styles";
import { Typography } from "@/constants/Typography";
import { ExtraButton, headerExtraButtons } from "@/app/_layout";

export function NavigationHeader({ navigation, route, options, back }: NativeStackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  let extraButton: ExtraButton | null = null;

  if (headerExtraButtons.hasOwnProperty(route.name)) {
    extraButton = headerExtraButtons[route.name];
  }

  return (<>
    <View style={{
      height: paddingTop,
      backgroundColor: Colors.light.theme4,
    }} />
    {/* <StatusBar style="light" /> */}
    <VectorGraphicWrap
      ellipsi={[
        { pos: { x: 360, y: -180 }, majorRadius: 838, minorRadius: 740, angleDeg: 0, colour: Colors.light.theme2 },
        { pos: { x: 300, y: -80 }, majorRadius: 460, minorRadius: 457, angleDeg: 0, colour: Colors.light.theme1 },
        { pos: { x: 0, y: -145 }, majorRadius: 855, minorRadius: 426, angleDeg: 90, colour: Colors.light.offwhite + "33" }
      ]}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 71,
        width: "100%",
        backgroundColor: Colors.light.theme4,
        overflow: "hidden",
        flexDirection: "row",
        paddingHorizontal: 10,
      }}
    >
      <Link href=".." asChild>
        <Pressable style={{
          flexGrow: 0,
        }}>
          <Icon
            name="chevron-left"
            size={Typography.icon.sizes.medium}
            color={Colors.light.offblack}
            style={{
              ...whiteShadow.small
            }}
          />
        </Pressable>
      </Link>

      <Text style={{
        ...titleHeader,
        ...blackShadow.small,
        color: Colors.light.grey,
        flexGrow: 1,
        width: "auto",
      }}>
        {title}
      </Text>

      {extraButton ?
        <Link href={extraButton.route} asChild>
          <Pressable style={{
            flexGrow: 0,
          }}>
            <Icon
              name={extraButton.iconName}
              size={Typography.icon.sizes.small}
              color={Colors.light.offblack}
              style={{
                ...whiteShadow.small
              }} />
          </Pressable>
        </Link>
        :
        <View style={{
          flexGrow: 0,
          width: Typography.icon.sizes.small,
          height: Typography.icon.sizes.small,
        }} />
      }
    </VectorGraphicWrap >
  </>)
}