const ProductCard = ({productName, productPrice, productImage, shortDescription}) => {
  return (
    <aside 
    className="overflow-clip rounded-lg max-w-[260px] bg-slate-50 shadow">
      <img 
      className="mb-2" 
      width="825" 
      height="490" 
      src={productImage} 
      alt={productName} 
      />
      <div className="px-3 pt-3">

        <h2 className="mb-1 text-lg text-stone-700 font-medium">
          {productName}
          </h2>
        <h3 className="mb-1 text-lg text-stone-700 font-medium">
          {productPrice}
          </h3>
        <p className="mb-3 text-xs text-stone-500">
          {shortDescription}
          </p>
      </div>

      <footer className="flex flex-col gap-y-4 p-6">
        <button className="py-2.5 bg-pink-500 rounded-md font-bold text-white text-sm">Buy Now</button>
      </footer>
    </aside>
  );
};

export {ProductCard};
