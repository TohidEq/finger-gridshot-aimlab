import * as React from "react";

export interface IStartProps {}

export default function Start(props: IStartProps) {
  const [score, setScore] = React.useState<number>(0);
  var myScore: number = 0;

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
      setScore(myScore);
    } catch (error) {
      console.log(error);
    }
  };

  const ballClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isActiveBall(e)) {
      //first add a SafeBall->> then we can remove old ball
      myScore += 13;
      console.log("myScore:", myScore, "score:", score);
      updateScore();
      activeSafeBall();
      e.currentTarget.classList.remove("active-ball");
    } else {
      myScore -= 17.75;
      updateScore();
      console.log("not active");
    }
  };

  const isActiveBall = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains("active-ball")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="game">
      <h1 id="score-count">{score || "Ready?"}</h1>
      <div className="balls">
        <div className="rows">
          <div id="ball-1" className="ball"></div>
          <div id="ball-2" className="ball"></div>
          <div id="ball-3" className="ball active-ball"></div>
        </div>

        <div className="rows">
          <div id="ball-4" className="ball active-ball"></div>
          <div id="ball-5" className="ball"></div>
          <div id="ball-6" className="ball"></div>
        </div>
        <div className="rows">
          <div id="ball-7" className="ball"></div>
          <div id="ball-8" className="ball active-ball"></div>
          <div id="ball-9" className="ball"></div>
        </div>
        <span id="start-game" onClick={(e) => startGame(e)}></span>
      </div>
    </div>
  );
}
