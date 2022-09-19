import { useState, useEffect } from "react";

export interface IuseScoresProps {}

interface IScoreStats {
  id: number;
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
    id: 1,
    name: "Test u can delete me",
    score: 1,
    miss: 1,
    well: 1,
    all: 1,
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
