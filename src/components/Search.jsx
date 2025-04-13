import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

const Search = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const filtered = data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchData, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (productId) => {
    onClose();                   // Close the search modal
    navigate(`/products/${productId}`); // Navigate to product detail
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20 px-4 backdrop-blur-sm">
      <div className="bg-white/80 w-full max-w-lg rounded-2xl shadow-lg p-6 relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          aria-label="Close Search"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Search Products</h2>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black bg-transparent"
        />

        <div className="mt-4 max-h-60 overflow-y-auto">
          {loading && <p className="text-gray-500">Loading...</p>}

          {!loading && results.length > 0 && results.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className="block w-full text-left p-2 border-b last:border-none text-gray-700 hover:bg-gray-100 rounded"
            >
              {product.title}
            </button>
          ))}

          {!loading && query.length > 0 && results.length === 0 && (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
