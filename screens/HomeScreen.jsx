import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import poly, {
  URL,
  URLSearchParams,
  setupURLPolyfill,
} from "react-native-url-polyfill";

// setupURLPolyfill()

export default function HomeScreen() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const results = await sanityClient.fetch(`
        *[_type == "featured"] {
          ...,
          restaurant[] -> {
            ...,
            dishes[] -> {
            type -> {
              name
              }}
        }}`);
        setFeatured(results);
      } catch (error) {
        console.log("failed");
        console.log(error);
      }
    }

    fetchFeatured();
  }, []);

  console.log({ featured });
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
              Deliver Now O!
            </Text>
            <Text className="font-bold text-xl">Current Location</Text>
          </View>

          <Entypo name="chevron-down" size={20} color={"#00ccbb"} />
        </View>

        <AntDesign name="user" size={30} color={"#00ccbb"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 pl-3  rounded-md">
          <AntDesign name="search1" size={20} color={"gray"} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
            className="h-full w-full p-3"
          />
        </View>

        <Entypo name="sound-mix" color={"#00ccbb"} size={24} />
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories */}
        <Categories />

        {/* Featured  */}
        {featured?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            restaurants={category.restaurant}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
