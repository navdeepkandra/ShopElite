import React from "react";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const staticCategoryImages = {
    Fashion: "https://tse2.mm.bing.net/th?id=OIP.gUBSc1iN7VDYKPSgZ7cmpwHaE8&pid=Api&P=0&h=180",
    Electronics: "https://tse4.mm.bing.net/th?id=OIP.6AwfvMS9Z_ujYPRtHs1fYgHaFb&pid=Api&P=0&h=180",
    Home: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    Beauty: "https://tse2.mm.bing.net/th?id=OIP.PzuoPgXQdztUBqqP3sM22wHaE8&pid=Api&P=0&h=180",
    Books: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    Accessories: "https://tse2.mm.bing.net/th?id=OIP.RGhXRX912xVSfSUMgHxbuQHaEW&pid=Api&P=0&h=180"
  };

  const staticProducts = [
    {
      name: "Classic Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
      price: "$59.99"
    },
    {
      name: "Smart Headphones",
      image: "https://static01.nyt.com/images/2016/12/11/fashion/11HEADPHONES4/11HEADPHONES4-articleLarge.jpg",
      price: "$89.99"
    },
    {
      name: "Travel Backpack",
      image: "https://i.pinimg.com/originals/65/d9/02/65d902edef6c8183aa7165b3707df52d.jpg",
      price: "$39.99"
    },
    {
      name: "Aromatic Candle Set",
      image: "https://tse4.mm.bing.net/th?id=OIP.z1L43dY_dEOkaUc2vWZ8igHaE8&pid=Api&P=0&h=180",
      price: "$29.99"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Hero Section */}
      <div className="bg-white shadow-sm rounded-2xl p-8 text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Discover Premium Products</h1>
        <p className="text-gray-500 mt-2">Shop the best of fashion, electronics, and more.</p>
        <NavLink to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-xl text-sm hover:bg-gray-800">
          Explore Now
        </NavLink>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(staticCategoryImages).map((category) => (
            <div key={category} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <img src={staticCategoryImages[category]} alt={category} className="rounded-md mb-4 w-full h-28 object-cover" />
              <h3 className="text-center font-medium text-gray-700">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">✨ Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staticProducts.map((product, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="rounded mb-3 w-full h-40 object-cover" />
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">⭐ What Our Customers Say</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-xl border">
            <p className="text-gray-600 italic">
              "Absolutely love the product quality. Fast delivery too!"
            </p>
            <p className="mt-2 text-gray-800 font-medium">– Meera S.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border">
            <p className="text-gray-600 italic">
              "Stylish, affordable and premium experience. Highly recommend."
            </p>
            <p className="mt-2 text-gray-800 font-medium">– Rahul K.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold text-gray-800">Ready to Upgrade Your Lifestyle?</h3>
        <NavLink to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-xl text-sm hover:bg-gray-800">
          Start Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default Shop;
