import { useState, useEffect } from "react";
import gameService, { Game } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService
      .fetchAll()
      .then(({ data }) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { games, error, isLoading };
};

export default useGames;
