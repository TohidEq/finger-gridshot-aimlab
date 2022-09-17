import * as React from "react";
import ScoreCard from "./ScoreCard";
import { Link } from "react-router-dom";

export interface IScoresProps {}
// all scores
export default function Scores(props: IScoresProps) {
  const dasdasd = new Date();
  const sss = {
    name: "test",
    score: 22,
    miss: 234,
    well: 12,
    all: 456,
    date: dasdasd.toString(),
  };
  return (
    <div className="all-scores">
      <h1 className="border-b-2 border-b-white-c-1">
        <Link to={"/"}>All Scores</Link>
      </h1>
      <ScoreCard scoreStats={sss} />
      <ScoreCard scoreStats={sss} />
      <ScoreCard scoreStats={sss} />
      {/* //map all scores and work with ScoreCard  */}
    </div>
  );
}
