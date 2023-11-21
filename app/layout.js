import './globals.css';

export const metadata = {
  title: 'Cardio Workout',
  description: 'Build strength with this comprehensive training program on cardio workout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <a className="text-white" href="/">
              Home
            </a>
            <span className="mx-4 text-white">|</span>
            <a className="text-white" href="/products/videos">
              Videos
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
