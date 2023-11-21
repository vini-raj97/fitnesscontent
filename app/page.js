import { ProductCard } from '@/components/cards/product';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductCard
          productName="Cardio Workout"
          productPrice="5.99"
          productImage="https://example.com/fitness-video-5.jpg"
          shortDescription="Build strength with this comprehensive training program on cardio workout"
        />
      </main>
    </>
  );
}
