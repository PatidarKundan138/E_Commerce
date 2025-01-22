const Header = ({ cartItems = [] }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-300 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/lMrivN25HpbyN9PB51Mr4tGzHgStTkVUw0fXV5OLPoAnjoDKA.jpg"
            alt="Furniro"
            className="mr-2"
            width="40"
            height="40"
          />
          <span className="text-xl font-bold">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-gray-700 hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Favorite Icon */}
          <button className="text-gray-700 hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <button className="text-gray-700 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 2.8a1 1 0 001 1.2h12.6a1 1 0 001-1.2L17 13M7 13L5.4 7M6 21a1 1 0 102 0 1 1 0 00-2 0zm10 0a1 1 0 102 0 1 1 0 00-2 0z"
                />
              </svg>
            </button>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
