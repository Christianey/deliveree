import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
      <CategoryCard imgUrl={"https://links.papareact.com/wru"} title="Testing" />
    </ScrollView>
  );
}
