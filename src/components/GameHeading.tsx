import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlat from "../hooks/UsePlat";
import useGenr from "../hooks/useGenr";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenr(gameQuery.genreId);
  const platform = usePlat(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={8} paddingLeft={2}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
