import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, id }) {
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
        {/* Restaurant Cards */}
        <RestaurantCard id={123} imgUrl={"https://links.papareact.com/gn7"} title="Yo Sushi" rating={4.5} genre="japanese" address={"123 Main street"} short_description={"This is a short descriptoin"} dishes={[]} long={20} lat={0} />
        <RestaurantCard id={123} imgUrl={"https://links.papareact.com/gn7"} title="Yo Sushi" rating={4.5} genre="japanese" address={"123 Main street"} short_description={"This is a short descriptoin"} dishes={[]} long={20} lat={0} />
        <RestaurantCard id={123} imgUrl={"https://links.papareact.com/gn7"} title="Yo Sushi" rating={4.5} genre="japanese" address={"123 Main street"} short_description={"This is a short descriptoin"} dishes={[]} long={20} lat={0} />
        <RestaurantCard id={123} imgUrl={"https://links.papareact.com/gn7"} title="Yo Sushi" rating={4.5} genre="japanese" address={"123 Main street"} short_description={"This is a short descriptoin"} dishes={[]} long={20} lat={0} />
        <RestaurantCard id={123} imgUrl={"https://links.papareact.com/gn7"} title="Yo Sushi" rating={4.5} genre="japanese" address={"123 Main street"} short_description={"This is a short descriptoin"} dishes={[]} long={20} lat={0} />
      </ScrollView>
    </View>
  );
}
