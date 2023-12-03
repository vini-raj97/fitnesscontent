import Link from "next/link";

function NavBar({ children }) {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="container mx-auto flex align-left items-center">
        <li>
          <Link className="text-white font-medium mx-2" href="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="text-white font-medium mx-2" href="/products">
            Videos
          </Link>
        </li>

        <li>
          <Link
            className="text-white font-medium"
            href="https://github.com/vini-raj97/fitnesscontent.git"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
