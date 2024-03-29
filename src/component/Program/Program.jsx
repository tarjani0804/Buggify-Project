import React, { useState, useEffect } from "react";
import "./Program.css";
import { useNavigate } from "react-router-dom";
import Poster from "../image/Sponsored By BugBee LTD.png";
import Google from "../image/Google.png";
import Cookies from "js-cookie";

const Program = () => {
  const prog_id = Cookies.get("prog_id");
  if (prog_id != undefined) {
    Cookies.remove("prog_id");
  }
  const prog_name = Cookies.get("prog_name");
  if (prog_name != undefined) {
    Cookies.remove("prog_name");
  }
  const launch_date = Cookies.get("launch_date");
  if (launch_date != undefined) {
    Cookies.remove("prog_id");
  }
  const navigate = useNavigate();

  const gotoPrograms = () => {
    navigate("/Program");
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

  const handleSubmit = (event, id) => {
    event.preventDefault();
    Cookies.set("prog_id", `${profileStats[id].buss_id}`, {
      expires: 14,
      path: "/",
    });
    Cookies.set("prog_name", `${profileStats[id].company_name}`, {
      expires: 14,
      path: "/",
    });
    Cookies.set("launch_date", `${profileStats[id].Launch_Date}`, {
      expires: 14,
      path: "/",
    });
    window.location.href = "/inner-program";
  };

  const rows = [];

  if (profileStats) {
    for (let i = 0; i < profileStats.length; i++) {
      const program = profileStats[i];
      rows.push(
        <tr key={program.id}>
          <td
            className="program-heading"
            onClick={(event) => handleSubmit(event, i)}
          >
            {program.company_name}
          </td>
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
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
