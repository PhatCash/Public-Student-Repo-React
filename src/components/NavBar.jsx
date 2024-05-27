import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 bg-slate-600">
      <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-20">
        <li>
          <Link
            className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
            to="/list"
          >
            List
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
            to="/population"
          >
            Population
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
            to="/gdp"
          >
            GDP
          </Link>
        </li>
      </ul>
    </nav>
  );
}
