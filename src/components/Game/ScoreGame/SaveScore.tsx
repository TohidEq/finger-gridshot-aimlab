import * as React from "react";
import GetAllScores from "../Scores/GetAllScores";
import useScores from "../Scores/useScores";

export interface ISaveScoreProps {
  myScore: IMyScore;
}
interface IMyScore {
  name: String;
  score: number;
  miss: number;
  well: number;
  all: number;
  date: string;
}
export default function SaveScore(props: ISaveScoreProps) {
  const allScores: IMyScore[] = GetAllScores();

  const myScore: IMyScore = props.myScore;
  allScores.push(myScore);
  localStorage.setItem("allscores", JSON.stringify(allScores));
  console.log("this is new scores", allScores);

  return 1;
}
