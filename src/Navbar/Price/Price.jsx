import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const Price = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl mt-5 text-center bg-red-200 p-10">
        Awsome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-2">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Price;
