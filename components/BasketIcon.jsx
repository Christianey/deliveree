import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import CurrencyFormat from "react-currency-format";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-0 w-full my-2 z-50">
      <TouchableOpacity className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg">
          <CurrencyFormat value={basketTotal} displayType="text" prefix="£" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
