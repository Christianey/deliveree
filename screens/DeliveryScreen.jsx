import { View, Text, TouchableOpacity, Image, SafeAreaView as SafeNative } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const { lat, long, title } = useSelector(selectRestaurant);

  console.log({ lat, long, title });
  return (
    <View className="bg-[#00CCBB] h-full">
      <SafeAreaView className="z-50 h-5/6 flex-auto">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name="close" color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {title} is being prepared
          </Text>
        </View>

        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
          }}
          className="flex-auto grow h-[100%] -mt-10 z-0"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={title}
            description="New place"
            identifier="origin"
            pinColor="#00CCBB"
          />
        </MapView>
      </SafeAreaView>

      <SafeNative className="bg-white flex-row items-center space-x-5 z-10 py-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeNative>
    </View>
  );
}
