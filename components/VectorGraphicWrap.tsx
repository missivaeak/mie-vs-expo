import { Text, View, type ViewProps } from "react-native";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export type VectorGraphicWrap = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};


export function VectorGraphicWrap({ style, lightColor, darkColor, ...otherProps }: VectorGraphicWrap) {
  return (
    <View
      style={style}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: 'absolute',
          width: 300,
          height: 300,
          top: 0,
          left: 0,
          borderRadius: 150,
          backgroundColor: Colors.light.theme1
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: 'absolute',
          width: 200,
          height: 200,
          top: 0,
          left: 0,
          borderRadius: 100,
          backgroundColor: Colors.light.theme2
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: 'absolute',
          width: 250,
          height: 250,
          top: 0,
          left: 100,
          borderRadius: 125,
          backgroundColor: Colors.light.offwhite + "aa",
        }}
      />
      {otherProps.children}
    </View>
  )
}