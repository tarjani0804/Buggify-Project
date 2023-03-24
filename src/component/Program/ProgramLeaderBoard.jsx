import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProgramLeaderBoard.css";
import Position1img from "../image/position1.jpeg";
import Position2img from "../image/position2.jpeg";
import Position3img from "../image/position3.jpeg";




const ProgramLeaderBoard = () => {
  const navigate = useNavigate();

  const gotoPrograms = () => {
    navigate("/Program");
  };
  const gotoLeaderBoard = () => {
    navigate("/ProgramLeaderBoard");
  };
  const [leaderList, setLeaderList] = useState();
  useEffect(() => {
    async function fetchProfileStats() {
      const response = await fetch(`http://127.0.0.1:5173/leaderboard`);
      const jwt = await response.json();
      setLeaderList(jwt);
    }
    fetchProfileStats();
  }, []);
  console.log(leaderList);


  const leaderboardlist = [];
  if (leaderList) {
    for (let i = 3; i < leaderList.length; i++) {
      const pos = leaderList[i];
      leaderboardlist.push(
        <tr key={pos.id}>

          <td>{pos.username}</td>
          <td>{pos.country}</td>
          <td>{pos.impact}</td>
        </tr>
      )
    }
  }


  const position1 = [];
  if (leaderList) {
    for (let i = 1; i < 2; i++) {
      const pos1 = leaderList[i];
      position1.push(
        <div>
          <div className="position1-div1">
            <img className="position-div1-img" src={Position1img}></img>
          </div>
          <div className="position1-div2">
            <p className="position1-div2-p1">{pos1.username}</p>
            <p className="position1-div2-p2">{pos1.country}</p>
            <p className="position1-div2-p3">{pos1.impact}</p>
          </div>
        </div>
      )
    }
  }

  const position2 = [];
  if (leaderList) {
    for (let i = 0; i < 1; i++) {
      const pos2 = leaderList[i];
      position2.push(
        <div>
          <div className="position1-div1">
            <img className="position-div1-img" src={Position2img}></img>
          </div>
          <div className="position1-div2">
            <p className="position1-div2-p1">{pos2.username}</p>
            <p className="position1-div2-p2">{pos2.country}</p>
            <p className="position1-div2-p3">{pos2.impact}</p>
          </div>
        </div>
      )
    }
  }


  const position3 = [];
  if (leaderList) {
    for (let i = 2; i < 3; i++) {
      const pos3 = leaderList[i];
      position3.push(
        <div>
          <div className="position1-div1">
            <img className="position-div1-img" src={Position3img}></img>
          </div>
          <div className="position1-div1">
            <p className="position1-div2-p1">{pos3.username}</p>
            <p className="position1-div2-p2">{pos3.country}</p>
            <p className="position1-div2-p3">{pos3.impact}</p>
          </div>
        </div>
      )
    }
  }



  return (
    <>
      <div className="program">
        <nav className="program-nav">
          <ul className="program-nav-ul">
            <li className="program-nav-ul-li" onClick={gotoPrograms}>
              Programs
            </li>
            <li
              className="program-nav-ul-li list-selected"
              onClick={gotoLeaderBoard}
            >
              Leaderboard
            </li>
          </ul>
        </nav>

        <div className="program-leaderboard-div">

          <div className="program-leaderboard-div1">
            <div className="position1">{position1}</div>
            <div className="position2">{position2}</div>
            <div className="position3">{position3}</div>
          </div>







          <div className="program-divs-programs">
            <div className="programs-div">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Reputation Point</th>
                  </tr>
                </thead>
                <tbody>{leaderboardlist}</tbody>
              </table>
            </div>
          </div>
        </div>


      </div>



    </>
  );
};

export default ProgramLeaderBoard;
