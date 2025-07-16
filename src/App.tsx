import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  //templateAreas is to define layout of our page
  //each string represents a row
  //and within string space shows start of new coloumn
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `, //1024px
      }}
      templateColumns={{
        base: '1fr' ,
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
