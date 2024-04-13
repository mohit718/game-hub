import { Game } from "../services/game-service";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xlg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
