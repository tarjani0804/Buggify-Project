import React, { useState, useEffect } from "react";
import "./Inner_Program.css";
import { BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";
import { HiOutlineBellAlert, HiBellAlert } from "react-icons/hi2";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";




function Policy() {
  return (
    <div className="program-policy-div">
      <h3 className="program-policy-h">Policy</h3>
      <div className="program-policy-intro-div">
        <h4 className="program-policy-intro-div-h">Introduction</h4>
        <p className="program-policy-intro-div-p1">
          Shopify's bug bounty program is our way to reward security researchers
          for finding serious security vulnerabilities in the In Scope
          properties listed at the bottom of this page, including our core
          application (all functionality associated with a Shopify store,
          particularly your-store.myshopify.com/admin) and certain ancillary
          applications.
          <br />
          <br /> We look forward to working with all security researchers and
          strive to be respectful, always assume the best and treat others as
          peers. We expect the same in return from all participants. To achieve
          this, our team strives to:
          <ul>
            <li>
              Reply to all reports within one business day and triage within two
              business days (if applicable)
            </li>
            <li>
              Be as transparent as possible, answering all inquires about our
              report decisions and adding hackers to duplicate HackerOne reports
            </li>
            <li>
              Award bounties within a week of triage (excluding extenuating
              circumstances)
            </li>
            <li>
              Only close reports as N/A when the issue reported is included in
              Known Issues, Ineligible Vulnerabilities Types or lacks evidence
              of a vulnerability
            </li>
            <li>
              Reopen and reward any report mistakenly closed as invalid if we
              later receive and reward the same bug reported by someone else. In
              these situations, we pay both hackers.
            </li>
            <li>
              If a duplicate report demonstrates a higher CVSS (e.g., a proof of
              concept with PR:N required versus PR:L on the original report), we
              re-calculate the CVSS and pay the bounty difference to the
              duplicate reporter.
            </li>
          </ul>
        </p>
        <h4 className="program-policy-intro-div-h">Eligibility</h4>
        <p className="program-policy-intro-div-p2">
          The scope of the bug bounty program is limited to the domains listed
          at the bottom of this page. Valid vulnerabilities on any domain not
          explicitly listed in scope will be accepted but are ineligible for a
          reward. For example, vulnerabilities on any Shopify owned app or
          channel not listed below will not be awarded a bounty unless impact on
          Shopify core can be demonstrated.
          <br />
          <br />
          All software components that are used within the Shopify application
          may be exploited in your attack, including bugs in the Liquid
          templating engine, its C performance extension, the Ruby interpreter
          (MRI), our sandboxed script execution environment, the Ruby on Rails
          framework, as well as third party libraries that we use (such as Ruby
          gems). Please note that bugs in third party components only qualify if
          you can prove that they can be used to successfully attack Shopify.
          Only original reports will be rewarded.
          <br />
          <br />
          If you need further clarification of the rules or scope of our bug
          bounty program, you may email us at bugbounty@shopify.com.
        </p>

        <h4 className="program-policy-intro-div-h">
          Ineligible vulnerability types
        </h4>

        <p className="program-policy-intro-div-p3">
          Shopify does not consider the following to be eligible vulnerabilities
          under this program. In most cases, these issues will be closed as Not
          Applicable:
          <ul>
            <li>Distributed Denial of Service</li>
            <li>Content spoofing</li>
            <li>Social Engineering, including phishing</li>
            <li>Email flooding</li>
            <li>Unconfirmed reports from automated vulnerability scanners</li>
            <li>Disclosure of server or software version numbers</li>
            <li>
              Generic examples of Host header attacks without evidence of the
              ability to target a remote victim
            </li>
            <li>Reports related to permitted password strength</li>
            <li>Lack of mobile binary protection, mobile SSL pinning</li>
            <li>
              Theoretical sub-domain takeovers with no supporting evidence
            </li>
            <li>
              Any issue in a mobile application that can only be exploited on a
              rooted or jailbroken device, that depends on debug access being
              enabled, or that depends on a vulnerability in the operating
              system
            </li>
            <li>
              Perceived security weaknesses without evidence of the ability to
              target a remote victim. For example credentials are transmitted in
              POST body as plain text, missing rate limits, bruteforcing without
              demonstrating impact, etc.
            </li>
            <li>
              Self-XSS without a reasonable attack scenario. In general, we
              accept these reports when there are a maximum of two steps
              required. For example, pasting a malicious payload into an editor
              and then clicking to preview it would be two steps.{" "}
            </li>
            <li>
              Access to individual paid features on an ineligible plan (for
              example, race conditions that lead to bypassing the limit of staff
              members for your current plan)
            </li>
            <li>
              Perceived permission issues without impact on the integrity or
              confidentiality of data (ex. changing admin view settings, such as
              saved searches)
            </li>
            <li>
              {" "}
              Open Redirects without demonstrating additional security impact
              (such as stealing auth tokens)
            </li>
            <li>
              Reports exploiting the behaviour of, or vulnerabilities in,
              outdated browsers
            </li>
            <li>
              False reports, or reports lacking evidence of a vulnerability
            </li>
            <li>
              Reports of broken links or unclaimed social media accounts (unless
              chained with an impactful exploit)
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
function Scope_and_Reward() {
  const program = [
    {
      id: 1,
      asset: "*.buggify.com",
      asset_type: "web",
      impact: "High",
      elb: "yes",
    },
    {
      id: 2,
      asset: "*.buggify.com",
      asset_type: "web",
      impact: "High",
      elb: "yes",
    }
  ]

  return (
    <div className="program-sar-div">
      <h3 className="program-policy-h">Scope and reward</h3>

      <div className="program-sar-info-div">
        <h4 className="program-sar-intro-div-h">Rewards</h4>
        <div className="program-reward-div">
          <div className="program-reward-level">
            <div className="reward-low-div">
              <h3 className="reward-low-h">Low</h3>
              <span className="reward-low-span" id="low">0</span>
            </div>
            <div className="reward-medium-div">
              <h3 className="reward-medium-h">Medium</h3>
              <span className="reward-medium-span" id="medium">0</span>
            </div>
            <div className="reward-high-div">
              <h3 className="reward-high-h">High</h3>
              <span className="reward-high-span" id="high">0</span>
            </div>
            <div className="reward-critical-div">
              <h3 className="reward-critical-h">Critical</h3>
              <span className="reward-critical-span" id="critical">0</span>
            </div>
          </div>
          <div className="program-reward-div-p">
            Our max bounty is $100,000 for a Critical vulnerability. Valid
            Shopify non-core (defined below) vulnerabilities are calculated with
            Confidentiality, Integrity and Availability Requirements set to Low.
          </div>
        </div>
      </div>

      <div className="program-sar-info-div">
        <h4 className="program-sar-intro-div-h">Scope</h4>
        <div className="program-scope-div">
          <div className="program-scope-div1">
            <h3 className="program-scope-div1-h">In-Scope</h3>

            <div className="program-scope-div-table">

              <table>
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Asset Type</th>
                    <th>Impact</th>
                    <th>Eligibile for bounty</th>
                  </tr>
                </thead>
                <tbody>
                  {program.map((program, index) => (
                    <tr key={program.id}>

                      <td>{program.asset}</td>
                      <td>{program.asset_type}</td>
                      <td>{program.impact}</td>
                      <td>{program.elb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>



        <div className="program-scope-div">
          <div className="program-scope-div1">
            <h3 className="program-scope-div1-h">Out-of-Scope</h3>

            <div className="program-scope-div-table">

              <table>
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Asset Type</th>
                  </tr>
                </thead>
                <tbody>
                  {program.map((program, index) => (
                    <tr key={program.id}>

                      <td>{program.asset}</td>
                      <td>{program.asset_type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>




      </div>




    </div>
  );
}


const Inner_Program = (props) => {
  const [policySelect, setpolicySelected] = useState(true);
  const [scopeSelected, setScopeSelected] = useState();
  const [bookmarkSelected, setBookmarkSelected] = useState(0);

  const isBookmarked = bookmarkSelected;


  const handleBookmark = () => {
    setBookmarkSelected(bookmarkSelected === 0 ? 1 : 0);
    console.log("Bookmark", isBookmarked);

  };

  const handlePolicySelected = () => {
    localStorage.setItem("listPath", "policy");
    setpolicySelected(true);
    setScopeSelected(false);
  };

  const handleScopeSelected = async (e) => {
    localStorage.setItem("listPath", "scope");
    setScopeSelected(true);
    setpolicySelected(false);
    const prog_id = Cookies.get('prog_id')
    alert(prog_id)
    console.log("In Scope");
    const in_scope = await fetch(
      `http://127.0.0.1:5173/programScIn/${prog_id}`
    );
    const scopeval1 = await in_scope.json();
    var in_assets = Object.values(scopeval1).map((item) => item.asset);
    var in_assets_type = Object.values(scopeval1).map(
      (item) => item.asset_type
    );
    var in_impact = Object.values(scopeval1).map((item) => item.impact);
    var in_elb = Object.values(scopeval1).map((item) => item.elb);
    for (let i = 0; i < 10; i++) {
      if (in_assets[i]) {
        console.log(in_assets[i]);
        console.log(in_assets_type[i]);
        console.log(in_impact[i]);
        console.log(in_elb[i]);
      }
    }
    console.log("Out of Scope");
    const out_scope = await fetch(
      `http://127.0.0.1:5173/programScOut/${prog_id}`
    );
    const scopeval2 = await out_scope.json();
    var out_assets = Object.values(scopeval2).map((item) => item.asset);
    var out_assets_type = Object.values(scopeval2).map(
      (item) => item.asset_type
    );
    for (let i = 0; i < 10; i++) {
      if (in_assets[i]) {
        console.log(out_assets[i]);
        console.log(out_assets_type[i]);
      }
    }
    console.log("Reward");
    const reward = await fetch(
      `http://127.0.0.1:5173/programRd/${prog_id}`
    );
    const rdval = await reward.json();
    var rd_low = rdval.low;
    var rd_medium = rdval.medium;
    var rd_high = rdval.high;
    var rd_critical = rdval.critical;

    document.getElementById("low").innerHTML = rd_low;
    document.getElementById("medium").innerHTML = rd_medium;
    document.getElementById("high").innerHTML = rd_high;
    document.getElementById("critical").innerHTML = rd_critical;
  };



  useEffect(() => {
    // Get the stored list path from local storage
    const storedListPath = localStorage.getItem("listPath");

    // Set the state variables based on the stored list path
    if (storedListPath === "policy") {
      setpolicySelected(true);
      setScopeSelected(false);
    } else if (storedListPath === "scope") {
      setpolicySelected(false);
      setScopeSelected(true);
    }
  }, []);


  const navigate = useNavigate()
  const gotoSubmitReport = () => {
    navigate('/program-submitReport');
  }




  return (
    <>
      <div className="inner-program">
        <div className="inner-program-heading-section">
          <div className="inner-program-heading-section-div1">
            <div className="inner-program-heading-section-div1-1">
              <img
                src={props.ProgramIcon}
                className="inner-program-heading-section-div1-img"
              />
            </div>
            <div className="inner-program-heading-section-div1-2">
              <h1 className="inner-program-heading-section-div1-2-h">
                {props.program_name}
              </h1>
              <p className="inner-program-heading-section-div1-2-p">
                {props.program_description}
              </p>
              <br></br>
              <a
                className="inner-program-heading-section-div1-2-a"
                href={props.program_link}
                target="_blank"
              >
                {props.program_link}
              </a>
              <div className="inner-program-heading-section-div1-2-div">
                <div className="program-launch-div">
                  <h5>Program Launch</h5>
                  <p>{props.program_launch}</p>
                </div>
                <div className="program-type-div">
                  <h5>Program Type</h5>
                  <p>{props.program_type}</p>
                </div>
                <div className="program-bookmark" style={{ cursor: "pointer" }}>
                  <h5>
                    Bookmark{" "}
                    <span onClick={handleBookmark}>
                      {bookmarkSelected ? (
                        <BsBookmarkCheckFill
                          style={{
                            fontSize: "16px",
                            marginLeft: "2px",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <BsBookmarkPlus
                          style={{
                            fontSize: "16px",
                            marginLeft: "2px",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </span>
                  </h5>

                </div>

                <div className="submit-button" onClick={gotoSubmitReport}>
                  <button className="sub-button">Submit Report</button>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-program-heading-section-div2">
            <div className="program-bug-resolved-div">
              <h5>Bug Resolved</h5>
              <p>{props.bug_resolved}</p>
            </div>
            <div className="program-asset-in-scope-div">
              <h5>Asset In-Scope</h5>
              <p>{props.asset_in_scope}</p>
            </div>
            <div className="average-bounty-paid-div">
              <h5>Average Bounties Paid</h5>
              <p>
                {"$"} {props.avg_bounties_paid}
              </p>
            </div>
            <div className="time-respond-div">
              <h5>Average Time to Respond</h5>
              <p>{props.avg_time_respond}</p>
            </div>
            <div className="time-triage-div">
              <h5>Average Time to Triage</h5>
              <p>{props.avg_time_triage}</p>
            </div>
          </div>
        </div>
        <div>
          <nav className="program-navbar">
            <ul className="program-navbar-ul">
              <li
                className={`program-navbar-ul-li  ${policySelect ? "selecProgram-navbar" : "program-navbar-ul-li"
                  }`}
                onClick={handlePolicySelected}
              >
                Policy
              </li>
              <li
                className={`program-navbar-ul-li  ${scopeSelected ? "selecProgram-navbar" : "program-navbar-ul-li"
                  }`}
                onClick={handleScopeSelected}
              >
                Scope and Reward
              </li>
            </ul>
          </nav>
          {/* Conditional rendering based on the selected nav item */}
          {policySelect && <Policy />}
          {scopeSelected && <Scope_and_Reward />}
        </div>
      </div>
    </>
  );
};

Inner_Program.defaultProps = {
  program_name: "Shopify",
  program_description:
    "Shopify is a multi-channel commerce platform that helps people sell online, in-store, and everywhere in between.",
  program_link: "https://www.shopify.com",

  program_launch: "2/2016 ",
  program_type: "Bug  Bounty Program",

  bug_resolved: "1570",
  asset_in_scope: "15",
  avg_bounties_paid: "600",
  avg_time_respond: "Within 2 Days",
  avg_time_triage: "Within 3 Days",
  program: [
    {
      id: 1,
      asset: "*.buggify.com",
      asset_type: "web",
      impact: "High",
      elb: "yes",
    }
  ]
};
export default Inner_Program;
