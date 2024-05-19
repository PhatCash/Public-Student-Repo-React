export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gradient-to-b from-slate-400 to-slate-600">
      <div className="p-4 text-center text-white rounded-lg bg-slate-600 w-65 sm:w-auto">
        <h2 className="text-xl md:text-5xl md:font-bold">
          Welcome to React and Charts
        </h2>
        <p className="mb-2 text-sm md:text-xl">
          This hw3 uses a react router to fetch data from a custom API
        </p>
      </div>
    </div>
  );
}
