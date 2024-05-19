import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import pokemons from "./pokemons";
import Pokedex from "./Pokedex";

function App() {
  return (
    <>
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
