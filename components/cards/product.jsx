const ProductCard = ({ productName, productPrice, productImage, shortDescription }) => {
  return (
    <aside className="overflow-clip rounded-lg max-w-[260px] bg-gray-100 shadow-md p-4">
      <img
        className="mb-2 w-full h-40 object-cover rounded"
        src={productImage}
        alt={productName}
      />
      <div className="px-3 pt-3">
        <h2 className="mb-1 text-xl text-gray-800 font-semibold">{productName}</h2>
        <h3 className="mb-1 text-lg text-gray-700 font-medium">${productPrice}</h3>
        <p className="mb-3 text-sm text-gray-600">{shortDescription}</p>
      </div>

      <footer className="flex flex-col gap-y-4 mt-4">
        <button className="py-2.5 bg-blue-500 rounded-md font-bold text-white text-sm hover:bg-blue-600">
          Buy Now
        </button>
      </footer>
    </aside>
  );
};

export { ProductCard };
