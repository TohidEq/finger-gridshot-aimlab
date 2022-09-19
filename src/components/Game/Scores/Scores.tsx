import * as React from "react";
import ScoreCard from "./ScoreCard";
import { Link } from "react-router-dom";

import useScores from "./useScores";

export interface IScoresProps {}
// all scores
export default function Scores(props: IScoresProps) {
  const { data: scores } = useScores();
  console.log("scores", scores);
  const myElements = scores.map((score) => {
    return (
      <>
        <ScoreCard scoreStats={score} deleteButton={true} />
      </>
    );
  });

  return (
    <div className="all-scores">
      <h1 className="border-b-2 border-b-white-c-1">
        <Link to={"/"}>All Scores</Link>
      </h1>

      {myElements}
      {/* //map all scores and work with ScoreCard  */}
    </div>
  );
}
