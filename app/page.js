import { NavBar } from '@/components/ui/navigation/NavBar';
import { HeroBanner } from '@/components/ui/header/HeroBanner';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="justify-between">
        <NavBar />
      </header>

      <main className="flex min-h-screen flex-col font-serif items-center">
        <div className="container max-w-7xl mx-auto px-4">
          <div
            className="hero-image items-center p-7 flex mb-5 shadow-2xl"
            style={{ backgroundImage: "url('/images/home-page-background.jpg')" }}
          >
            <HeroBanner
              bclass={"text-white bg-black p-2 rounded-md text-slate-600 text-xs"}
              title={"Build strength with this comprehensive training program"}
              thislink={"/products"}
              linkname={"view contents"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
