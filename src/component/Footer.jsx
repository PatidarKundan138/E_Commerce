import React from "react";
const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-2 md:items-start">
    <div className="text-yellow-500 text-3xl">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto pl-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m1-9a11 11 0 11-22 0 11 11 0 0122 0z"
              />
            </svg>
          }
          title="High Quality"
          description="Crafted from top materials"
        />
        {/* Repeat other sections */}

        {/* Feature Components */}
        <Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M9 21h6a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z"
              />
            </svg>
          }
          title="Warranty Protection"
          description="Over 2 years"
        />

<Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1 9H4l-1-9zM5 13h14v6H5v-6zM3 21h18"
              />
            </svg>
          }
          title="Free Shipping"
          description="Order over $150"
        />


<Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          title="24/7 Support"
          description="Dedicated support"
        />

      </div>
    </footer>
  );
};

export default Footer;
