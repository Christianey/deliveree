import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color={"#00ccbb"} />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>
      <ScrollView
        className="pt-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            imgUrl={restaurant.imgUrl}
          />
        ))}
        {/* Restaurant Cards */}
      </ScrollView>
    </View>
  );
}
