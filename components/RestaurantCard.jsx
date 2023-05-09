import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  // console.log({ short_description });
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
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
        })
      }
      className="mr-3 bg-white mb-2 rounded-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
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

        <View className="flex-row items-center">
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
