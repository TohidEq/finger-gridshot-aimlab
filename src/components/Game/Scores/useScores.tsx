import { useState, useEffect } from "react";

export interface IuseScoresProps {}

interface IScoreStats {
  name: String;
  score: number;
  miss: number;
  well: number;
  all: number;
  date: string;
}
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

export default function useScores() {
  const [data, setData] = useState<IScoreStats[]>(
    JSON.parse(
      localStorage.getItem("allscores") || JSON.stringify(defaultScore)
    )
  );
  useEffect(() => {
    localStorage.setItem("allscores", JSON.stringify(data));
  }, [data]);
  console.log("useScores run");
  return { data };
}
