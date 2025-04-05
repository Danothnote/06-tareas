import React from "react";
import { CalculateDiscount } from "./components/CalculateDiscount";
import { UserProfile } from "./components/UserProfile";
import { Counter } from "./components/Counter";
import { ManipulateStrings } from "./components/ManipulateStrings";

export const App = () => {
  return (
    <div className="container">
      <CalculateDiscount />
      <UserProfile />
      <Counter />
      <ManipulateStrings />
    </div>
  );
};
