import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = cart.some((p) => p.id === item.id);

  const addHandler = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  const productHandler = () => {
    navigate(`/products/${item.id}`);
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between" onClick={productHandler}>
      <div className="w-full h-48 flex justify-center items-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-3">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-base font-medium text-gray-900">${item.price}</p>
          {isInCart ? (
            <button
              onClick={removeHandler}
              className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={addHandler}
              className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
