/**
 * Problem Statement:
 * Make a rating component using React.
 *
 * Example: Rating feature that we see in Amazon.
 * In this assignment, you no need to use star image,
 * you can use checkbox, or div to denote your selection.
 *
 * The component should be reusable enough so that we
 * can reuse it any place with respect to rating system 5, 7, 10
 * depending upon the props that we passed. i.e If we pass
 * value 5, it should show default 5 checkboxes default
 * where user can check/uncheck according to selection.
 */

import React from "react";
import Rating from "./components/Rating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Candidate!</h1>
      <h2>Welcome To Quantum Inventions Coding Challenge!</h2>
      <hr />
      <em>The problem statement is commented out at the top</em>
      <hr />
      <Rating />
    </div>
  );
}
