import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'category']`)
      .then((result) => setCategories(result));
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      {categories?.map(({ image, name, _id }) => (
        <CategoryCard key={_id} imgUrl={urlFor(image).url()} title={name} />
      ))}
    </ScrollView>
  );
}
