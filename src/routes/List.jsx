import FetchAPI from "../components/FetchAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function List() {
  const { countries, loading, error } = FetchAPI();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="p-4 bg-gradient-to-t from-slate-400 to-slate-600">
      <h1 className="mb-4 text-3xl font-bold text-center text-white sm:text-left">
        List of Countries from South America
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <div key={country.id} className="p-4 bg-white rounded-lg">
            <img
              src={country.flag_png ? country.flag_png : "N/A"}
              alt={
                country.flag_alt
                  ? country.flag_alt
                  : `A picture of the country ${countries.name}`
              }
              className="w-full mb-4"
            />
            <h2 className="text-2xl font-bold">
              {country.name ? country.name : "N/A"}
            </h2>
            <p>
              <strong>Population: </strong>
              {country.population ? country.population.toLocaleString() : "N/A"}
            </p>
            <p>
              <strong>Official Language(s): </strong>
              {country.official_languages
                ? country.official_languages.join(", ")
                : "N/A"}
            </p>
            <p>
              <strong>GDP (Billions): </strong>
              {country.gdp_billions ? country.gdp_billions : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
