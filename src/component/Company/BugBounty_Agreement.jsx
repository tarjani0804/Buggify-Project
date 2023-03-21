import React, { useRef, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import "./RedTeam_Agreement.css";

const C3 = () => {
  const scrollTo = useRef();
  useLayoutEffect(() => {
    if (scrollTo.current) {
      window.scrollTo(0, 0);
    }
  });


  const alert = () => {
    toast.error("Something went Wrong", {
      position: toast.POSITION.TOP_RIGHT
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:5173/agreementBug";
    const myCookie = Cookies.get("myCookie");
    const data = {
      myCookie: `${myCookie}`,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    const username2 = jwt.status;
    if (username2 == "BugBounty") {
      window.location.href = "/BusinessProfile";
    } else {
      alert();
    }
  };

  return (
    <>
      <div className="company-c3" ref={scrollTo}>
        <h1 className="company-c3-h">
          Agreement for Open Source Bug Bounty Program
        </h1>

        <center>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}></span>A Open Source Bug Bounty
            Program Agreement is a legal document that outlines the scope,
            objectives, expectations, and responsibilities of a red team
            engagement between the organization and the red team
            provider(Buggify). It typically includes the following key elements
            :{" "}
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Purpose:</span> Bug Bounty
            Program aims to nullify security flaws in systems of organization by
            collaborating with IT department.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Scope:</span>Definition of the
            systems, applications, and infrastructure that will be tested as
            part of the engagement can be set manually through dashboard or can
            be discussed during CTO meeting.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Methods:</span>Testing methods
            and techniques that will be used during the engagement, including
            any tools or frameworks are a standards that is specifically
            designed.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Deliverables:</span>Description
            of the final report and any other deliverables that will be provided
            to the client at the end of the engagement.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Timelines:</span>Schedule of the
            start and end dates of the engagement, along with any milestones or
            deliverables due during the engagement will be discussed in CTO
            meeting.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Confidentiality:</span>Every
            details of Assessment will be confidential using encryption through
            secret channel.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Liability:</span>Statement
            outlining the liability of each party in the event of any damages or
            losses resulting from the engagement.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Expenses:</span>Expenses or
            additional costs are time & equipment based, which depends on the
            scope of Assessment.
          </p>
          <p className="company-c3-p">
            <span style={{ color: "#878787" }}>Termination:</span>Termination
            can only done under some sever circumstances after Scope Setting By
            Agreeing to This, Organizations agreed to participate in Our Open
            Source Bug Bounty Program.
          </p>
        </center>

        <div className="button_ani company-c3-button" onClick={handleSubmit}>
          <button className="btn">Accept Agreement</button>
        </div>
      </div>
    </>
  );
};

export default C3;
