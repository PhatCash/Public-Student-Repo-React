import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Population from "./components/Population";
import Gdp from "./components/Gdp";

export default function App() {
  return (
    <>
      <header className="bg-slate-700 p-6 text-white w-full">
        <h1 className="text-center text-xl mb-4 sm:text-3xl sm:font-bold">
          HW3
        </h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/population" element={<Population />} />
          <Route path="/gdp" element={<Gdp />} />
        </Routes>
      </main>
    </>
  );
}
