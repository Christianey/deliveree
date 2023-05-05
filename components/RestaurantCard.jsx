import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity
      className="mr-3 bg-white mb-2 rounded-md "
      style={{
        shadowOffset: { width: 0, height: 1 },
        elevation: 3,
      }}
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <AntDesign
            name="star"
            size={22}
            color={"grey"}
            style={{ opacity: 0.4 }}
          />
          <Text className="text-xs text-grey-500">
            <Text className="text-green-500">{rating} </Text>&#183; {genre}
          </Text>
        </View>

        <View className="flex-row">
          <Entypo
            name="location-pin"
            size={22}
            color={"grey"}
            style={{ opacity: 0.4 }}
          />
          <Text className="text-xs text-grey-500">Nearby &#183; {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
