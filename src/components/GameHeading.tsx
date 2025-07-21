import { Heading } from "@chakra-ui/react";
import usePlat from "../hooks/UsePlat";
import useGenr from "../hooks/useGenr";
import useGameQueryStore from "../store";


const GameHeading = () => {

  const genreId = useGameQueryStore( selector => selector.gameQuery.genreId)
  const genre = useGenr(genreId);

  const platformId = useGameQueryStore( selector => selector.gameQuery.platformId)
  const platform = usePlat(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={8} paddingLeft={2}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
