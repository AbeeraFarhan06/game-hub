import { SimpleGrid, Text} from "@chakra-ui/react"; 
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre} : Props ) => {

    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md:2, lg:3, xl:5}} padding='10px' spacing={5}>

        {isLoading && skeletons.map(sk => (
        <GameCardContainer key={sk}>
          <GameCardSkeleton />
        </GameCardContainer>
        ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GamesCard game={game} />
          </GameCardContainer>
        ))}

      </SimpleGrid>
    </>
  );

}

export default GameGrid;
