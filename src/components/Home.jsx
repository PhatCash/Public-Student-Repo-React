export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-slate-400 to-slate-600 text-white">
      <div className="text-center text-white p-4 bg-slate-600 rounded-lg w-65 sm:w-auto">
        <h2 className="text-xl md:text-5xl md:font-bold">
          Welcome to React and Charts
        </h2>
        <p className="text-sm md:text-xl mb-2">
          This hw3 uses a react router to fetch data from a custom API
        </p>
      </div>
    </div>
  );
}
