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
      >
        <Text>test</Text>
      </VectorGraphicWrap>
    </View>
  );
}
