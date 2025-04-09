import React from 'react';

const About = () => {
  const team = [
    {
      name: "Aarav Mehta",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ravi Kapoor",
      role: "Marketing Lead",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Ananya Verma",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
  ];

  const testimonials = [
    {
      name: "Sneha Raj",
      feedback:
        "Absolutely love the quality and fast delivery. ShopElite never disappoints!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Aditya Singh",
      feedback:
        "Great customer support and stylish collection. Will definitely come back!",
      image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Brand Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">ShopElite</h1>
          <p className="mt-2 text-gray-600 text-lg">Where Style Meets Simplicity</p>
        </div>

        <div className="text-gray-700 space-y-4 text-center">
          <p>
            Welcome to <span className="font-medium text-black">ShopElite</span>, your destination for curated fashion and lifestyle products.
          </p>
          <p>
            Our goal is simple: to make premium quality accessible and shopping effortless.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To redefine online shopping with authenticity, trust, and trendsetting design.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Meet the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl shadow p-6 flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700 italic mb-2">“{testimonial.feedback}”</p>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-10 text-gray-400 text-sm border-t mt-10">
          © {new Date().getFullYear()} ShopElite. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default About;
