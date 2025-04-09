import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const totalItems = cart.length;
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {totalItems > 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Your Cart</h1>
            {cart.map((item, index) => (
              <CartItem item={item} key={item.id} itemIndex={index} />
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-medium text-lg mb-6">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              onClick={() => alert("Checkout functionality coming soon 🚀")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-24">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Your Cart is Empty 🛒</h2>
          <NavLink to="/">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
