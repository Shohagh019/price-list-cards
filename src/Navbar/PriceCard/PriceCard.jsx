import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-pink-100 m-10 p-10 rounded-lg flex flex-col">
      <p className="font-bold">Price: ${price.price}/Month</p>
      <p className="text-2xl font-bold">{price.name}</p>
      <p className="font-bold mt-2">Features:</p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="w-full bg-red-300 p-2 rounded-lg font-bold mt-auto hover:bg-red-500">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
