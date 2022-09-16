import { randomInt } from "crypto";
import * as React from "react";

export interface IStartProps {}

export default function Start(props: IStartProps) {
  const [score, setScore] = React.useState<number>(0);

  const randomNumberInRange = (min: number, max: number) => {
    // get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const activeSafeBall = () => {
    var randomNumber = randomNumberInRange(1, 9);

    console.log(randomNumber);

    console.log(
      !document
        .getElementById("ball-" + randomNumber)!!
        .classList.contains("active-ball")
    );

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

  const ballClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (scoreHandler(e)) {
      //first add a SafeBall->> then we can remove old ball
      activeSafeBall();
      e.currentTarget.classList.remove("active-ball");
    }
  };

  const scoreHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains("active-ball")) {
      setScore(score + 13); //good shot (+13 score)
      return true;
    } else {
      setScore(score - 17.75); //miss shot (-17.5 score)
      return false;
    }
  };

  React.useEffect(() => {}, []);

  return (
    <div className="game">
      <h1 id="score-count">{score || "Ready?"}</h1>
      <div className="rows">
        <div
          id="ball-1"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-2"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-3"
          className="ball active-ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
      </div>

      <div className="rows">
        <div
          id="ball-4"
          className="ball active-ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-5"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-6"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
      </div>
      <div className="rows">
        <div
          id="ball-7"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-8"
          className="ball active-ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
        <div
          id="ball-9"
          className="ball"
          onMouseDown={(e) => ballClickHandler(e)}
        ></div>
      </div>
    </div>
  );
}
