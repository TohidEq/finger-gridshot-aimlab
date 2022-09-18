import * as React from "react";

export interface IGetAllScoresProps {}

const myDate = new Date();
const defaultScore = [
  {
    name: "test",
    score: 22,
    miss: 234,
    well: 12,
    all: 456,
    date: myDate.toString(),
  },
];
export default function GetAllScores() {
  return JSON.parse(
    localStorage.getItem("allscores") || JSON.stringify(defaultScore)
  );
}
