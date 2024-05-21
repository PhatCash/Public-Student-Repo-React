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
        <p className="mb-6 text-center sm:text-left md:text-lg">
          Thank you for being here. This is a welcome/landing page that will
          give a general description of each of the pages you can navigate to.
          There are many components that make this a simple yet exciting
          homework. It was satisfying seeing everything put together.
        </p>
        <h3 className="mb-2 font-semibold md:text-2xl">List</h3>
        <p className="mb-6 text-center sm:text-left md:text-lg">
          The countries in South America are displayed as a card list like structure. 
          It contains information about each country prioritizing the flags as the top 
          for aesthetics. The keys are highlighted whereas the values are present if available. 
          Missing values are represented as 'N/A' along with a simple loading and error page, 
          which is used for all pages. 
        </p>
        <h3 className="mb-2 font-semibold md:text-2xl">Population</h3>
        <p className="mb-6 text-center sm:text-left md:text-lg">
          A bar graph that shows the population for each country in South America. I was unable to 
          scale up the countries with low populations, even after testing the y/x axis scale. 
          There are some cool components that you can add to make charts looks stylish. Tried adapting 
          the styling to fit the general theme. 
        </p>
        <h3 className="mb-2 font-semibold md:text-2xl">GDP</h3>
        <p className="mb-6 text-center sm:text-left md:text-lg">
          I decided to do a pie graph that shows the GDP for each country. Again, I was not able to 
          scale the country with small a small GDP. The colors are randomly generated to save time. 
        </p>
      </div>
    </div>
  );
}
