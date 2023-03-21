import React, { useState, useEffect } from "react";
import "./Program.css";
import { useNavigate } from "react-router-dom";
import Poster from "../image/program_poster.png";
import Google from "../image/Google.png";

const Program = () => {
  const navigate = useNavigate();

  const gotoPrograms = () => {
    navigate("/Program");

    // set cookie of prog_id and redirect to inner program of that prog_id


  };
  const gotoLeaderBoard = () => {
    navigate("/ProgramLeaderBoard");
  };
  const [profileStats, setProfileStats] = useState(undefined);
  useEffect(() => {
    async function fetchProfileStats() {
      const response = await fetch("http://127.0.0.1:5173/listPrograms");
      const data = await response.json();
      setProfileStats(data);
    }
    fetchProfileStats();
  }, []);

  const prog1 = profileStats;
  console.log(prog1);




  const rows = [];

  if (profileStats) {
    for (let i = 0; i < profileStats.length; i++) {
      const program = profileStats[i];
      rows.push(
        <tr key={program.id}>
          <td className="program-heading">{program.company_name}</td>
          <td>{program.Resolved}</td>
          <td>{program.Avg_Bounty}</td>
          <td>{program.Launch_Date}</td>
        </tr>
      );
    }
  }


  return (
    <>
      <div className="program">
        <nav className="program-nav">
          <ul className="program-nav-ul">
            <li
              className="program-nav-ul-li list-selected"
              onClick={gotoPrograms}
            >
              Programs
            </li>
            <li className="program-nav-ul-li" onClick={gotoLeaderBoard}>
              Leaderboard
            </li>
          </ul>
        </nav>

        <div className="program-div">
          <div className="filter-divs">
            <div className="feature-filter">
              <img src={Poster} style={{ marginTop: "7rem" }} />
            </div>
          </div>

          <div className="program-divs-programs">
            <div className="programs-div">




              <table>
                <thead>
                  <tr>
                    <th>Programs</th>
                    <th>Resolved</th>
                    <th>Average bounty</th>
                    <th>Launch Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>





            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
