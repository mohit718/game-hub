import { useState, useEffect } from "react";
import create from "../services/data-service";
import { ApiRequestConfig } from "../services/api-client";

const useData = <T>(
  endpoint: string,
  requestConfig?: ApiRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dataService = create<T>(endpoint);

  useEffect(
    () => {
      setLoading(true);
      dataService
        .fetchAll(requestConfig)
        .then(({ data }) => {
          setData(data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
