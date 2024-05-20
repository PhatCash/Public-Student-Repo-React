import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 bg-slate-600">
      <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-20">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/population">Population</Link>
        </li>
        <li>
          <Link to="/gdp">Gdp</Link>
        </li>
      </ul>
    </nav>
  );
}
