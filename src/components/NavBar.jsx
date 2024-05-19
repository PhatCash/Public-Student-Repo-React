import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 w-full">
      <ul className="flex flex-col sm:flex-row justify-center gap-20 w-full">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/List">List</Link>
        </li>
        <li>
          <Link to="/Population">Population</Link>
        </li>
        <li>
          <Link to="/Gdp">Gdp</Link>
        </li>
      </ul>
    </nav>
  );
}
