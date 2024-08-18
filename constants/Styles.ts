import { Platform, type TextStyle, type ViewStyle } from "react-native"

import { Typography } from "./Typography"

const baseTextStyle: TextStyle = {
  width: "100%",
  textAlign: "center"
};

export const lineHeightMul = 1.4;

export const blackShadow = {
  small: <TextStyle | ViewStyle> {
    textShadowColor: "#000000",
    textShadowRadius: 20,
  },
  large: <TextStyle | ViewStyle> {
    textShadowColor: "#000000",
    textShadowRadius: 40,
  }
};

export const whiteShadow = {
  small: <TextStyle | ViewStyle> {
    textShadowColor: "#FFFFFF",
    textShadowRadius: 10,
  },
  large: <TextStyle | ViewStyle> {
    textShadowColor: "#FFFFFF",
    textShadowRadius: 40,
  }
};

export const titleHeader: TextStyle = {
  ...baseTextStyle,
  fontFamily: Typography.header.font,
  fontSize: Typography.header.sizes.large,
  lineHeight: Typography.header.sizes.large * lineHeightMul
};

export const viewPort: ViewStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  paddingRight: 5,
};

export const paddingTop = Platform.select({android: 50, ios: 0, web: 0 , windows: 0, default: 0});
 
export const catalogue = {
  placesAndFoldersList: <ViewStyle> {
    width: 100,
    height: "100%",
    flexGrow: 0,
  },
  sceneList: <ViewStyle> {
    width: "auto",
    height: "100%",
    flexGrow: 1,
  }
}