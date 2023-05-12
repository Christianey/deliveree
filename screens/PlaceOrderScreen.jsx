import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

export default function PlaceOrder() {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/loadingHamburger.gif")}
        animation={"slideInUp"}
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        direction="alternate"
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="transparent"
        style={{ backgroundColor: "transparent" }}
      />
    </SafeAreaView>
  );
}
