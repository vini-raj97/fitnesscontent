import { ListPlaceHolder } from '@/app/products/components/ListPlaceholder';
import { PlaceHolderCard } from '@/components/cards/PlaceholderCard';

async function getVideos() {
  const res = await fetch('https://fintnesstrainer-default-rtdb.firebaseio.com/fitnesscontent.json');
  return await res.json();
}

async function Videos() {
  const videos = await getVideos();

  if (videos) {
    const { details } = { ...videos };
    console.log(videos);
  }

  return (
    <>
      <header className="bg-white mt-12">
        {/* Header content */}
      </header>

      <main>
        <ListPlaceHolder />
        <PlaceHolderCard />
      </main>
    </>
  );
}

export default Videos;
