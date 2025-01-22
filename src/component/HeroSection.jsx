import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1676739688583-99db8dedd603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcGluZyUyMGhlcm9zZWN0aW9ufGVufDB8fDB8fHww"
        alt="Shop Banner"
        className="w-full h-64 object-cover"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Shop</h1>
      </div> */}
    </section>
  );
};

export default HeroSection;
