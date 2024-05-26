import GdpPie from "../components/GdpPie";
import FetchAPI from "../components/FetchAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function GDP() {
  const { countries, loading, error } = FetchAPI();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="div-layout">
      <h2 className="h2-routes">GDP of South American Countries</h2>
      <div className="w-full sm:w-2/4 md:w-5/12 ">
        <GdpPie countries={countries} />
      </div>
    </div>
  );
}
