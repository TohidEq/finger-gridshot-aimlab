import * as React from "react";

export interface IScoreHandleProps {
  allStats: IAllStats;
}

interface IAllStats {
  myScore: number;
  countWellBalls: number;
  countMissBalls: number;
}

export default function ScoreHandle(props: IScoreHandleProps) {
  console.log(props.allStats);

  localStorage.setItem("mystats", JSON.stringify(props.allStats));
}
