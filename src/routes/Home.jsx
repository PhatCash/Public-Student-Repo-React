export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gradient-to-t from-slate-400 to-slate-600">
      <div className="w-4/6 p-4 text-white rounded-lg sm:w-5/6 sm:5/6 bg-slate-600 ">
        <h2 className="w-auto mb-4 text-xl text-center md:text-5xl md:font-bold">
          Welcome to React and Charts
        </h2>
        <p className="mb-6 text-center md:text-lg">
          This hw3 uses react router to fetch data from a custom API and
          displays the data using charts -
          <strong> Use the navigational bar to navigate to a page</strong>
        </p>
        <h3 className="mb-2 font-semibold md:text-2xl">Home</h3>
        <p className="text-center sm:text-left md:text-lg">
          Thank you for being here. This is a welcome/landing page that will
          give a general description of each of the pages you can navigate to.
          There are many components that make this a simple yet exciting
          homework. It was satisfying seeing everything put together.
        </p>
      </div>
    </div>
  );
}
