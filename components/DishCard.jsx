import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

export default function DishCard({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  // const items = useSelector(selectBasketItems);
  const item = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`border bg-white p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <CurrencyFormat value={price} displayType="text" prefix="£" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-200 p-4"
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket} disabled={!item.length}>
              <AntDesign name="minuscircle" size={40} color={item.length ? "#00CCBB" : "gray"} />
            </TouchableOpacity>

            <Text>{item.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
