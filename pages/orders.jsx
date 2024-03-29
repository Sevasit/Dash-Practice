import React from "react";
import { data } from "@/data/data.js";
import { FiShoppingBag, FiMoreHorizontal } from "react-icons/fi";
import Header from "@/components/Header";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title1="Orders" title2="Welcome to orders" />
      <div className="p-4">
        <div className="w-full m-auto p-4 rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-lg p-2 text-pink-600">
                    <FiShoppingBag />
                  </div>
                  <div className="pl-4">
                    <p>${order.total.toLocaleString()}</p>
                    <p className="text-gray-600 text-xs">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right text-sm">
                  <span
                    className={
                      order.status === "Processing"
                        ? "rounded-lg p-2 bg-yellow-200"
                        : order.status === "Completed"
                        ? "bg-green-300 p-2 rounded-lg"
                        : "bg-red-400 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hiiden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p className="sm:flex">{order.method}</p>
                  <FiMoreHorizontal />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
