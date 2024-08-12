import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { VectorGraphicWrap } from "@/components/VectorGraphicWrap";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.theme4
      }}
    >
      <VectorGraphicWrap
        style={{
          width: "100%",
          height: "100%",
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        ellipsi={[
          {pos: {x: 0, y: 0}, majorRadius: 300, minorRadius: 300, angleDeg: 0, colour: Colors.light.theme1},
          {pos: {x: 0, y: 0}, majorRadius: 200, minorRadius: 100, angleDeg: 0, colour: Colors.light.theme2},
          {pos: {x: 100, y: 0}, majorRadius: 250, minorRadius: 150, angleDeg: 25, colour: Colors.light.offwhite + "aa"}
        ]}
      >
        <Text>test</Text>
      </VectorGraphicWrap>
    </View>
  );
}
