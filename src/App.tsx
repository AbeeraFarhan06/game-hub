import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" >
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
