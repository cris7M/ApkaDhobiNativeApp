import React, { Component } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Text } from "expo-ui-kit";
import App from "./navigations/app";
import { background } from "./constants/images";

export default class ApkaDhobi extends Component {
  render() {
    return (
      <ImageBackground
        source={background.welcome}
        style={{ width: "100%", height: "100%" }}
      >
        <App />
        <View style={styles.textStyle}>
          <Text center gray caption bold>
            Copyright &copy; ApkaDhobi.com
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  }
});
