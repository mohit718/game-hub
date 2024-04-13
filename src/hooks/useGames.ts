import { useState, useEffect } from "react";
import gameService, { Game } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    gameService
      .fetchAll()
      .then(({ data }) => setGames(data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
};

export default useGames;
