import React from "react";
import "./styles.css";
import Dropdown from "./Dropdown";

import Gnar from "./GnarSquare.png";
import Graves from "./GravesSquare.png";
import LeBlanc from "./LeBlancSquare.png";
import Jhin from "./JhinSquare.png";
import Morgana from "./MorganaSquare.png";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function App() {
  return (
    <div className="App">
      <h1>League of Legends Draft Helper</h1>
      <h2>Fill in champions below</h2>
      <table width="200" border="3" className="App">
        <tbody>
          <tr>
            <th scope="col">Top</th>
            <th scope="col">Jungle</th>
            <th scope="col">Mid</th>
            <th scope="col">Bot</th>
            <th scope="col">Support</th>
          </tr>
          <tr>
            <th scope="col">
              <Dropdown />
              <img src={Gnar} width="120" height="120" alt="" />
            </th>
            <th scope="col">
              <img src={Graves} width="120" height="120" alt="" />
            </th>
            <th scope="col">
              <img src={LeBlanc} width="120" height="120" alt="" />
            </th>
            <th scope="col">
              <img src={Jhin} width="120" height="120" alt="" />
            </th>
            <th scope="col">
              <img src={Morgana} width="120" height="120" alt="" />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
