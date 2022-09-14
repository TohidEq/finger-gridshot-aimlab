import * as React from "react";

export interface IStartProps {}

export default function Start(props: IStartProps) {
  return (
    <div className="game">
      <h1 id="score-count">Ready?</h1>
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
    </div>
  );
}
