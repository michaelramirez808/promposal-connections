import React from "react";
import Header from "../Header";
import Game from "../Game";
import NYTimesNavbar from "../ui/nytimes-navbar";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  return (
    <div class="container-global">
      <NYTimesNavbar />
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header />
          <Game />
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
    </div>
  );
}

export default App;
