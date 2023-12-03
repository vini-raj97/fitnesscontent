import './globals.css';

export const metadata = {
  title: 'Cardio Workout',
  description: 'Build strength with this comprehensive training program on cardio workout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
