import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    gameService
      .fetchAll()
      .then(({ data }) => setGames(data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGrid;
