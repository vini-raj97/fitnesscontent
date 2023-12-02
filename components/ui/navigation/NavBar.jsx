import Link from "next/link";

function NavBar({ children }) {
  return (
    <nav className="py-4 px-4 pb-2 shadow-md bg-blue-50 justify-between flex flex-row">
      <Link className="logo" href="/">
        <img src="/images/logos/fitness_logo.png" alt="Fitness Logo" />
      </Link>

      <ul className="flex justify-between gap-x-8 items-center">
        <li>
          <Link className="text-rose-600 font-medium flex flex-row" href="/">
            <figure className="flex items-center text-red-500 gap-1">
              <figcaption className="text-sm">Home</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link className="text-blue-600 font-medium" href="/products">
            Videos
          </Link>
        </li>

        <li>
          <Link
            className="text-blue-600 font-medium"
            href="https://github.com/your-github-repository-link"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
