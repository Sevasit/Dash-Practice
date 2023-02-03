import React from "react";

const TopCard = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow-xl">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$7,864</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-pink-600 flex justify-center items-center p-[10px] rounded-lg">
          <span className="text-white text-lg">+25%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow-xl">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$102,589</p>
          <p className="text-gray-600">Yi Siri</p>
        </div>
        <p className="bg-pink-600 flex justify-center items-center p-[10px] rounded-lg">
          <span className="text-white text-lg">+10%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg shadow-xl">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$59,588</p>
          <p className="text-gray-600">Hon Zero</p>
        </div>
        <p className="bg-pink-600 flex justify-center items-center p-[10px] rounded-lg">
          <span className="text-white text-lg">+22%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCard;
