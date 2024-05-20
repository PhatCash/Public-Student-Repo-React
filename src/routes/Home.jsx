export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gradient-to-t from-slate-400 to-slate-600">
      <div className="p-4 text-white rounded-lg bg-slate-600 ">
        <h2 className="w-auto text-xl text-center md:text-5xl md:font-bold">
          Welcome to React and Charts
        </h2>
        <p className="mb-2 text-center md:text-lg">
          This hw3 uses react router to fetch data from a custom API and
          displays the data using charts - Use the navigational bar to navigate
          to a page
        </p>
        <h3 className="mb-2 text-2xl font-semibold">Home</h3>
        <p className="md:text-lg">
          Thank you for being here. This is a welcome/landing page that will
          give a general description of each of the pages you can navigate to.
          There are many components that make this a simple yet powerful
          homework. It was satisfying seeing everything put together.
        </p>
      </div>
    </div>
  );
}
