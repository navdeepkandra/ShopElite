import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-2xl p-10 space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-500 mt-2">We’re here to help and answer any questions you might have.</p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Company office"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="font-semibold text-lg">📍 Address</h2>
            <p>Janatha Bazar, Banashankari 3rd Stage,<br /> Bengaluru - 560085, Karnataka, India</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">📧 Email</h2>
            <p>support@shopelite.com</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">📞 Phone</h2>
            <p>+91 99999 99999</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-6 border-t">
          <p className="text-gray-400 text-sm">
            Our team usually responds within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
