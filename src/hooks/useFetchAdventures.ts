"use client";

import { useState, useEffect } from "react";
import { AdventureData, fetchAdventureData } from "../utils/fetchData";

const useFetchAdventures = () => {
  const [adventures, setAdventures] = useState<AdventureData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAdventureData();
        setAdventures(response);
      } catch (err) {
        console.error("Error fetching adventures:", err);
        setError("Error fetching adventures");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { adventures, loading, error };
};
export default useFetchAdventures;
