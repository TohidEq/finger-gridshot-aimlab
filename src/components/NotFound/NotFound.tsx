import * as React from "react";
import { Link } from "react-router-dom";

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <div>
      <h1>404 Not found</h1>
      <Link to="/" className="link">
        {"<Back to Home>"}
      </Link>
    </div>
  );
}
