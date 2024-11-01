{
  /* This custom hook will manage the loading, error, and data states for eacg type of data */
}

import { useEffect, useState } from "react";
import { CruiseData, fetchCruiseData } from "../utils/fetchData";

const useFetchCruises = () => {
  const [cruises, setCruises] = useState<CruiseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCruiseData();
        setCruises(response);
      } catch (err) {
        setError("Failed to load cruise data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { cruises, loading, error };
};
export default useFetchCruises;
