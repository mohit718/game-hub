import { useState, useEffect } from "react";
import create from "../services/data-service";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dataService = create<T>(endpoint);

  useEffect(() => {
    setLoading(true);
    dataService
      .fetchAll()
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
