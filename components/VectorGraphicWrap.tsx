import { Text, View, type ViewProps } from "react-native";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

import { EllipseShape } from "@/types/geometry";

export type VectorGraphicWrap = ViewProps & {
  ellipsi: EllipseShape[]
};


export function VectorGraphicWrap({ ellipsi, style, ...otherProps }: VectorGraphicWrap) {
  const ellipseEls = ellipsi.map((ellipse, index) => {
    return <View
    key={index}
    style={{
      ...StyleSheet.absoluteFillObject,
      position: 'absolute',
      width: ellipse.majorRadius,
      height: ellipse.majorRadius,
      left: ellipse.pos.x,
      top: ellipse.pos.y,
      borderRadius: ellipse.majorRadius / 2,
      backgroundColor: ellipse.colour,
      transform: [
        {translateX: "-50%"},
        {translateY: "-50%"},
        {rotate: `${ellipse.angleDeg}deg`},
        {scaleX: ellipse.minorRadius / ellipse.majorRadius},
      ]
    }}
    >
    </View>
  });

  return (
    <View
      style={style}
    >
      {ellipseEls}
      {otherProps.children}
    </View>
  )
}