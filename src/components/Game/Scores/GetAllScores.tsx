import * as React from "react";

export interface IGetAllScoresProps {}

const myDate = new Date();
const defaultScore = [
  {
    id: 1,
    name: "Test u can delete me",
    score: 1,
    miss: 1,
    well: 1,
    all: 1,
    date: myDate.toString(),
  },
];
export default function GetAllScores() {
  return JSON.parse(
    localStorage.getItem("allscores") || JSON.stringify(defaultScore)
  );
}
