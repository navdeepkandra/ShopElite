import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl space-y-6">
        
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <h1 className="text-xl font-semibold text-gray-800">Navdeep C</h1>
          </div>
          <div>
            <p className="text-sm text-gray-500">Mobile No.</p>
            <h1 className="text-lg font-medium text-gray-800">99999999999</h1>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <h1 className="text-lg font-medium text-gray-800">navdeep@example.com</h1>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <h1 className="text-lg font-medium text-gray-800">Bengaluru, India</h1>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
