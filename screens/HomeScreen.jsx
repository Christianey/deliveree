import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center justify-between mx-4">
        <View className="flex-row items-center gap-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">Current Location</Text>
          </View>

          <Entypo name="chevron-down" size={20} color={"#00ccbb"} />
        </View>

        <AntDesign name="user" size={30} color={"#00ccbb"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded-md">
          <AntDesign name="search1" size={20} color={"gray"} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
            keyboardAppearance="light"
          />
        </View>

        <Entypo name="sound-mix" color={"#00ccbb"} size={24} />
      </View>
    </SafeAreaView>
  );
}
