import { ListPlaceHolder } from '@/app/products/components/ListPlaceholder';
import { PlaceHolderCard } from '@/components/cards/PlaceholderCard';
import Link from "next/link";

async function getVideos() {
  const res = await fetch('https://fintnesstrainer-default-rtdb.firebaseio.com/fitnesscontent.json');
  return await res.json();
}

async function Videos() {
  try {
    const videos = await getVideos();

    if (videos) {
      const details = Object.values(videos);

      console.log(details);

      return (
        <>
          <header className="bg-white mt-12">
            {<h1>Fitness training</h1>}
          </header>

          <main>
            {details.map((video) => (
              <div key={video.uid}>
                <h2>{video.videoName}</h2>
                <p>{video.shortDescription}</p>
                <p>{video.videoPrice}</p>

                {/* Use only the Link component without an <a> child */}
                <Link href={`/products/${video.uid}`}>
                  {/* <a className='text-blue-600 font-semibold'>
                    View Details
                  </a> */}
                </Link>
              </div>
            ))}
          </main>
        </>
      );
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
    return (
      <>
        <header className="bg-white mt-12">
          {/* Header content */}
        </header>

        <main>
          <p>Error fetching videos. Please try again later.</p>
        </main>
      </>
    );
  }
}

export default Videos;
