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
    <div className="div-layout">
      <h2 className="h2-routes">Population of South American Countries</h2>
      <div className="w-full md:w-4/6 lg:w-5/6">
        <PopGraph countries={countries} />
      </div>
    </div>
  );
}
