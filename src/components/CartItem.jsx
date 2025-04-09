import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { remove } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col sm:flex-row gap-6 items-center transition hover:shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-contain"
      />

      <div className="flex flex-col flex-1 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
        <p className="text-md font-bold text-gray-900">${item.price}</p>
      </div>

      <button
        onClick={removeHandler}
        className="text-red-600 hover:text-red-800 transition text-2xl"
        title="Remove from cart"
      >
        <MdDeleteSweep />
      </button>
    </div>
  );
};

export default CartItem;
