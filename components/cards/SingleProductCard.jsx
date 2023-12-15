import {BuyNow} from '@/components/cards/BuyNowForm'
const ProductCard = ({ videoName, videoPrice, videoImage, shortDescription, priceId }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:h-full md:w-48"
            src={videoImage}
            alt={videoName}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {videoName}
          </div>
          <p className="mt-2 text-gray-500">{shortDescription}</p>
          <div className="mt-4">
            <span className="text-gray-900 text-lg font-bold">${videoPrice}</span>
          </div>
          <div className="mt-6">
                      <div className="mt-6">
            <BuyNow priceId={priceId} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
