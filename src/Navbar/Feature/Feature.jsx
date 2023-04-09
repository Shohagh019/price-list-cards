import React from "react";
import { BeakerIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-1 pb-3">
      <CheckCircleIcon className="h-6 w-6 text-pink-300" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
