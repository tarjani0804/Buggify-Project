import React, { useState, useEffect } from "react";
import "./Program.css";
import { useNavigate } from "react-router-dom";
import Poster from "../image/program_poster.png";
import Google from "../image/Google.png";

const Program = () => {
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

  const prog1 = profileStats && profileStats[0];
  console.log(prog1);
  const Programs = [
    {
      id: 1,
      name: "Google VDP",
      icon: Google,
      resolved: 210,
      averageBounty: "$750",
      launchDate: "2/2019",
      feature: "Manged by Buggify",
      assetType: "All",
    },
    {
      id: 2,
      name: "Google VDP",
      icon: Google,
      resolved: 220,
      averageBounty: "$750",
      launchDate: "2/2017",
      feature: "Manged by Buggify",
      assetType: "All",
    },
    {
      id: 3,
      name: "Google VDP",
      icon: Google,
      resolved: 230,
      averageBounty: "$750",
      launchDate: "6/2016",
      feature: "Manged by Buggify",
      assetType: "Domains",
    },
    {
      id: 4,
      name: "Google VDP",
      icon: Google,
      resolved: 230,
      averageBounty: "$750",
      launchDate: "6/2016",
      feature: "Manged by Buggify",
      assetType: "IoT",
    },
    {
      id: 5,
      name: "Google VDP",
      icon: Google,
      resolved: 230,
      averageBounty: "$750",
      launchDate: "6/2016",
      feature: "Manged by Buggify",
      assetType: "Android",
    },
    {
      id: 6,
      name: "Google VDP",
      icon: Google,
      resolved: 230,
      averageBounty: "$750",
      launchDate: "6/2016",
      feature: "Offer Bounty",
      assetType: "Windows",
    },
    {
      id: 7,
      name: "Google VDP",
      icon: Google,
      resolved: 230,
      averageBounty: "$750",
      launchDate: "6/2016",
      feature: "Less Response Time",
      assetType: "iOS",
    },
  ];

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
                  {Programs.map((program, index) => (
                    <tr key={program.id}>
                      <td className="program-heading">
                        <img
                          className="program-icon"
                          src={program.icon}
                          alt="program icon"
                        />
                        {program.name}
                      </td>
                      <td>{program.resolved}</td>
                      <td>{program.averageBounty}</td>
                      <td>{program.launchDate}</td>
                    </tr>
                  ))}
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
