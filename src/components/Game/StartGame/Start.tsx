import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScoreHandle from "../ScoreGame/ScoreHandle";
import Score from "../ScoreGame/ScoreHandle";

export interface IStartProps {}

interface IAllStats {
  myScore: number;
  countWellBalls: number;
  countMissBalls: number;
}

export default function Start(props: IStartProps) {
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0);

  const allStats: IAllStats = {
    myScore: 0,
    countWellBalls: 0,
    countMissBalls: 0,
  };

  const randomNumberInRange = (min: number, max: number) => {
    // get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const startGame = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.currentTarget.remove();
    const isMobileScreen = window.innerWidth < 768 ? true : false;
    var allBalls = document.getElementsByClassName("ball");
    for (var i = 0; i < allBalls.length; i++) {
      allBalls[i].addEventListener(
        isMobileScreen ? "mouseenter" : "mousedown",
        (e: any) => ballClickHandler(e)
      );
    }
    const timer = setTimeout(() => {
      console.log("This will run after 60 second!");

      ScoreHandle({ allStats });
      navigate("/myscore");
    }, 60000);
    return () => clearTimeout(timer);
  };

  const activeSafeBall = () => {
    var randomNumber = randomNumberInRange(1, 9);

    while (
      document
        .getElementById("ball-" + randomNumber)!!
        .classList.contains("active-ball")
    ) {
      randomNumber = randomNumberInRange(1, 9);
    }
    document
      .getElementById("ball-" + randomNumber)!!
      .classList.add("active-ball");
  };

  const updateScore = () => {
    try {
      setScore(allStats.myScore);
    } catch (error) {
      console.log(error);
    }
  };

  const ballClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isActiveBall(e)) {
      //first add a SafeBall->> then we can remove old ball
      allStats.myScore += 13;
      allStats.countWellBalls += 1;
      activeSafeBall();
      e.currentTarget.classList.remove("active-ball");
    } else {
      allStats.myScore -= 37.75;
      allStats.countMissBalls += 1;
      console.log("not active");
    }

    updateScore();
  };

  const isActiveBall = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains("active-ball")) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="game">
      <h1 id="score-count">
        <a href="/">{score || "Ready?"}</a>
      </h1>
      <div className="balls">
        <div className="rows">
          <button id="ball-1" className="ball"></button>
          <button id="ball-2" className="ball"></button>
          <button id="ball-3" className="ball active-ball"></button>
        </div>

        <div className="rows">
          <button id="ball-4" className="ball active-ball"></button>
          <button id="ball-5" className="ball"></button>
          <button id="ball-6" className="ball"></button>
        </div>
        <div className="rows">
          <button id="ball-7" className="ball"></button>
          <button id="ball-8" className="ball active-ball"></button>
          <button id="ball-9" className="ball"></button>
        </div>
        <span id="start-game" onClick={(e) => startGame(e)}></span>
      </div>
    </div>
  );
}
