import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Start from "./components/Game/StartGame/Start";
import NotFound from "./components/NotFound/NotFound";
import Scores from "./components/Game/Scores/Scores";
import MyScore from "./components/Game/ScoreGame/MyScore"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="myscore" element={ <MyScore/>} />
          <Route path="/scores" element={<Scores />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
