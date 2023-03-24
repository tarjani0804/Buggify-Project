import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProgramLeaderBoard.css";

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
      </div>
    </>
  );
};

export default ProgramLeaderBoard;
