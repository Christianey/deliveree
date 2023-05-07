import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function RestaurantScreen() {
  const {
    params: {
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
    },
  } = useRoute();

  console.log({
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
  });

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-4 left-5 p-2 bg-gray-200 rounded-full"
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={20} color={"#00ccbb"} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4 ">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1 ">
            <View className="flex-row space-x-2 items-center">
              <AntDesign
                name="star"
                size={22}
                color={"green"}
                style={{ opacity: 0.4 }}
              />
              <Text className="text-xs text-grey-500">
                <Text className="text-green-500">{rating} </Text>&#183; {genre}
              </Text>
            </View>

            <View className="flex-row items-center  ">
              <Entypo
                name="location-pin"
                size={22}
                color={"grey"}
                style={{ opacity: 0.4 }}
              />
              <Text className="text-xs text-grey-500">
                Nearby &#183; {address}
              </Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-grey-500">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-y border-gray-300">
          <AntDesign name="questioncircleo" color={"gray"} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <AntDesign name="caretright" color={"#00ccbb"} />
        </TouchableOpacity>

        <View>
          
        </View>
      </View>
    </ScrollView>
  );
}
