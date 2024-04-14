import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" px={2} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
