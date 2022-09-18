import * as React from "react";
import { useState } from "react";
import ScoreCard from "../Scores/ScoreCard";
import { useNavigate } from "react-router-dom";
import SaveScore from "./SaveScore";

export interface IMyScoreProps {}

interface IAllStats {
  myScore: number;
  countWellBalls: number;
  countMissBalls: number;
}
interface IMyScore {
  name: String;
  score: number;
  miss: number;
  well: number;
  all: number;
  date: string;
}

export default function MyScore(props: IMyScoreProps) {
  const [isSaved, setIsSaved] = React.useState(false);
  const navigate = useNavigate();
  const myStats: IAllStats = JSON.parse(localStorage.getItem("mystats")!!);
  const [myName, setMyName] = useState<string>("You");
  console.log("myscore", myStats);

  const saveScore = () => {
    const myDate = new Date();
    const myScore = {
      name: myName || "You",
      score: myStats.myScore,
      miss: myStats.countMissBalls,
      well: myStats.countWellBalls,
      all: myStats.countMissBalls + myStats.countWellBalls,
      date: myDate.toString(),
    };

    SaveScore({ myScore });
    setIsSaved(true);
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="my-score">
      <h1>My Score</h1>

      {isSaved ? (
        <>
          <button className="save-score" onClick={goHome}>
            Go Home
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="score-name"
            placeholder="my name is..."
            onChange={(e) => {
              setMyName(e.currentTarget.value);
            }}
          />
          <button className="save-score" onClick={saveScore}>
            Save my score
          </button>
        </>
      )}

      <div className="game-stats">
        <ScoreCard
          scoreStats={{
            name: myName || "You",
            score: myStats.myScore,
            miss: myStats.countMissBalls,
            well: myStats.countWellBalls,
            all: myStats.countMissBalls + myStats.countWellBalls,
            date: Date().toString(),
          }}
        />
      </div>
    </div>
  );
}
