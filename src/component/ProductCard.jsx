const ProductCard = ({ image, label, name, price, onAddToCart }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded bg-${label.color}`}
        >
          {label.text}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{price}</p>
        <button 
          onClick={onAddToCart}
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard