import React from "react";
import { CalculateDiscount } from "./components/CalculateDiscount";
import { UserProfile } from "./components/UserProfile";
import { Counter } from "./components/Counter";
import { ManipulateStrings } from "./components/ManipulateStrings";
import { ProductInfo } from "./components/ProductInfo";
import { ListOfProducts } from "./components/ListOfProducts";

export const App = () => {
  return (
    <div className="container">
      <CalculateDiscount />
      <UserProfile />
      <Counter />
      <ManipulateStrings />
      <ProductInfo />
      <ListOfProducts />
    </div>
  );
};
