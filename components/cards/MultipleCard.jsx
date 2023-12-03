import Link from 'next/link';

function MultipleCard({ videoImage, shortDescription, videoPrice, videoName, uid }) {
  return (
    <div className='flex-col flex pb-3 shadow-2xl justify-center align-middle'>
      <div className='h-4/5 justify-center'>
        <img className='w-full h-96' src={videoImage} alt="Fitness Video" />
      </div>

      <div className='p-2 flex flex-wrap justify-evenly'>
        <div className='h-3/5'>
          <div className='flex flex-row p-2 justify-between pb-1'>
            <p className='text-base'>
              <span className='font-medium'>Name</span>: {videoName}
            </p>
            <p className='text-xs'>
              <span className='font-medium'>Price</span>: ${videoPrice}
            </p>
          </div>
          <div className='p-1'>
            <p>{shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white rounded-md font-bold py-2 px-4 text-sm items-end text-center flex justify-center hover:bg-blue-600">
        <Link href={`/product/${uid}`}>
            See More
        </Link>
      </div>
    </div>
  );
}

export { MultipleCard };
