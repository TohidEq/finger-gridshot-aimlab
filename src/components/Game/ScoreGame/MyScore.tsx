import * as React from "react";
import { useState } from "react";
import ScoreCard from "../Scores/ScoreCard";
import { useNavigate } from "react-router-dom";

export interface IMyScoreProps {}

interface IAllStats {
  myScore: number;
  countWellBalls: number;
  countMissBalls: number;
}

export default function MyScore(props: IMyScoreProps) {
  const navigate = useNavigate();
  const myStats: IAllStats = JSON.parse(localStorage.getItem("mystats")!!);
  const [myName, setMyName] = useState<string>("You");
  console.log("myscore", myStats);
  return (
    <div className="my-score">
      <h1>My Score</h1>

      <input
        type="text"
        className="score-name"
        placeholder="my name is..."
        onChange={(e) => {
          setMyName(e.currentTarget.value);
        }}
      />
      <button
        className="save-score"
        onClick={() => {
          navigate("/");
        }}
      >
        Save my score
      </button>

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
