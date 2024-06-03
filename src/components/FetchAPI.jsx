import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchAPI() {
  const URL = "https://cs464p564-frontend-api.vercel.app/api/countries";
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { countries, loading, error };
}
