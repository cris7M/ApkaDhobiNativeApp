import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Utils, Text } from "expo-ui-kit";

import { background } from "../constants/images";
import { Block } from "expo-ui-kit/src";

//theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class Welcome extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container} middle>
        <Image
          source={background.dhobi}
          style={{
            marginTop: "20%",
            width: SIZES.width / 1.5,
            height: "50%",
            resizeMode: "center",
            padding: 0
          }}
        />
        <Image
          source={background.logo}
          style={{
            marginTop: "5%",
            width: SIZES.width / 1.5,
            height: "5%",
            resizeMode: "contain",
            padding: 0
          }}
        />
        <Button
          danger
          onPress={() => navigation.navigate("Login")}
          style={styles.buttonStyle}
        >
          <Text white center caption bold margin={[0, 30]}>
            Login
          </Text>
        </Button>
        <Button
          danger
          onPress={() => navigation.navigate("Register")}
          style={styles.buttonStyle}
        >
          <Text white center caption bold margin={[0, 30]}>
            Registration
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  buttonStyle: {
    backgroundColor: "#ff4b4b",
    borderRadius: 30,
    height: "6%",
    width: "80%",
    marginTop: 10
  }
});
