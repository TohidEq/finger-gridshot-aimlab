import * as React from "react";
import DateHandle from "../../DateHandle";

export interface IScoreCardProps {
  scoreStats: IScoreStats;
  deleteButton?: boolean;
}

interface IScoreStats {
  id: number;
  name: String;
  score: number;
  miss: number;
  well: number;
  all: number;
  date: string;
}

export default function ScoreCard(props: IScoreCardProps) {
  const { name, score, miss, well, all, date, id } = props.scoreStats;

  const myDate = DateHandle({ date });
  const day = myDate.getDay();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const time = myDate.getHours() + ":" + myDate.getMinutes();
  return (
    <div className="score-card">
      <h3 className="score-name">Player: {name}</h3>
      {props.deleteButton ? (
        <div className="delete-score">
          Delete?
          <div className="delete-score-sure">
            Sure?
            <button className="delete-score-btn bg-red-200">YES</button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card-items">
        <div className="card-item">Score: {score}</div>
        <div className="card-item">
          Date:{" "}
          {year.toString() +
            "," +
            month.toString() +
            "," +
            day.toString() +
            "  " +
            time}
        </div>
      </div>
      <div className="card-items">
        <div className="card-item">All Shots: {all}</div>
        <div className="card-item">Well Shots: {well}</div>
        <div className="card-item">Miss Shots: {miss}</div>
      </div>
    </div>
  );
}
