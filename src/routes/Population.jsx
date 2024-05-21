import PopGraph from "../components/PopGraph";
import FetchAPI from "../components/FetchAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Population() {
  const { countries, loading, error } = FetchAPI();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="h-screen p-4 text-white bg-gradient-to-t from-slate-400 to-slate-600">
      <h2 className="mb-4 text-3xl font-bold text-center text-white sm:text-left">
        Population of South American Countries
      </h2>
      <div className="w-full md:w-4/6 lg:w-5/6">
        <PopGraph countries={countries} />
      </div>
    </div>
  );
}
