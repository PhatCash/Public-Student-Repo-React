import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import List from "./routes/List";
import Population from "./routes/Population";
import Gdp from "./routes/Gdp";

export default function App() {
  return (
    <>
      <header className="w-full p-6 text-white bg-slate-700">
        <h1 className="mb-4 text-xl text-center sm:text-3xl sm:font-bold">
          HW3
        </h1>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/population" element={<Population />} />
        <Route path="/gdp" element={<Gdp />} />
      </Routes>
    </>
  );
}
