import {  Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard({ title, imgUrl }) {
  return (
    <TouchableOpacity className="relative mr-2 overflow-hidden rounded">
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20"
      />
      <Text className="absolute bottom-0 left-0 text-white font-bold p-1 bg-black/50 w-full">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
