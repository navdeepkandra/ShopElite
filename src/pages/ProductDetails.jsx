import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add, remove } from "../redux/slices/CartSlice";
import Spinner from "../components/Spinner";

const API_URL = "https://fakestoreapi.com/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const isInCart = cart.some((p) => p.id === product?.id);

  if (loading) return <div className="flex justify-center items-center h-screen">{<Spinner />}</div>;

  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex justify-center">
        <img src={product.image} alt={product.title} className="w-full max-w-sm object-contain rounded-xl" />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <div className="text-xl font-semibold text-black">${product.price}</div>

        {isInCart ? (
          <button 
            onClick={() => dispatch(remove(product.id))} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            onClick={() => dispatch(add(product))} 
            className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
