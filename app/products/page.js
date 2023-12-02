import { ListPlaceHolder } from '@/app/products/components/ListPlaceholder';
import { PlaceHolderCard } from '@/components/cards/PlaceholderCard';

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
              </div>
            ))}
          </main>
        </>
      );
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
    // Handle error gracefully, show an error message or fallback content
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