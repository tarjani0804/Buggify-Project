import Cookies from "js-cookie";
import React, { useState } from "react";
import "./SubmitReport.css";

var rsrc_id = Cookies.get("rsrc_id");

const SubmitReport = (props) => {
  const [title, setTitle] = useState();
  const [stepToReproduce, setSteToReproduce] = useState();
  const [proofOfConcept, setProofOfConcept] = useState();
  const [attackScenarios, setAttackScenarios] = useState();
  const [remediation, setRemediation] = useState();

  const handleSubmit = () => {};

  return (
    <>
      <div className="submit-report">
        <center>
          <h1 className="submit-report-h"> Submit Report </h1>
        </center>
        <div className="submit-report-div">
          <div className="submit-report-div1">
            <p className="submit-report-div1-p1">Researcher Id: {props.rId}</p>
            <p className="submit-report-div1-p2">
              Company Name: {props.companyName}
            </p>
          </div>
          <hr
            style={{
              width: "96%",
              marginLeft: "calc(2%)",
              marginTop: "2rem",
              height: "1px",
              border: "none",
              backgroundColor: "#878787",
            }}
          ></hr>
          <div className="submit-report-div2">
            <form>
              <div className="submit-report-form-field">
                <label className="submit-report-label">
                  <span>Report Title:</span>
                  <input
                    className="submit-report-input"
                    style={{
                      width: "85rem",
                      height: "3rem",
                      marginLeft: "7rem",
                    }}
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </label>
              </div>
              <div className="submit-report-form-field">
                <label className="submit-report-label">
                  <span>Steps to Reproduce:</span>
                  <textarea
                    className="submit-report-input"
                    style={{
                      width: "85rem",
                      height: "20rem",
                      paddingTop: "1rem",
                    }}
                    type="textarea"
                    value={stepToReproduce}
                    onChange={(event) => setSteToReproduce(event.target.value)}
                  />
                </label>
              </div>
              <div className="submit-report-form-field input-group">
                <label className="submit-report-label">
                  <span>Proof-of-Concept: </span>
                </label>
                <input
                  className="submit-report-input"
                  style={{
                    width: "98.5rem",
                    height: "3rem",
                  }}
                  type="text"
                  placeholder="Enter Link 1"
                  value={proofOfConcept}
                  onChange={(event) => setProofOfConcept(event.target.value)}
                />
                <br />
                <input
                  className="submit-report-input"
                  style={{
                    width: "98.5rem",
                    height: "3rem",
                  }}
                  type="text"
                  placeholder="Enter Link 2"
                  value={proofOfConcept}
                  onChange={(event) => setProofOfConcept(event.target.value)}
                />
                <br />
                <input
                  className="submit-report-input"
                  style={{
                    width: "98.5rem",
                    height: "3rem",
                  }}
                  placeholder="Enter Link 3"
                  type="text"
                  value={proofOfConcept}
                  onChange={(event) => setProofOfConcept(event.target.value)}
                />
                <br />
                <input
                  className="submit-report-input"
                  style={{
                    width: "98.5rem",
                    height: "3rem",
                  }}
                  placeholder="Enter Link 4"
                  type="text"
                  value={proofOfConcept}
                  onChange={(event) => setProofOfConcept(event.target.value)}
                />
                <br />
                <input
                  className="submit-report-input"
                  style={{
                    width: "98.5rem",
                    height: "3rem",
                  }}
                  placeholder="Enter Link 5"
                  type="text"
                  value={proofOfConcept}
                  onChange={(event) => setProofOfConcept(event.target.value)}
                />
              </div>
              <div className="submit-report-form-field">
                <label className="submit-report-label">
                  <span>Attack Scenarios: </span>
                  <textarea
                    className="submit-report-input"
                    style={{
                      width: "85rem",
                      height: "20rem",
                      marginLeft: "3rem",
                      paddingTop: "1rem",
                    }}
                    type="text"
                    value={attackScenarios}
                    onChange={(event) => setAttackScenarios(event.target.value)}
                  />
                </label>
              </div>
              <div className="submit-report-form-field">
                <label className="submit-report-label">
                  <span>Remediation: </span>
                  <textarea
                    className="submit-report-input"
                    style={{
                      width: "85rem",
                      height: "20rem",
                      marginLeft: "6rem",
                      paddingTop: "1rem",
                    }}
                    type="text"
                    value={remediation}
                    onChange={(event) => setRemediation(event.target.value)}
                  />
                </label>
              </div>
              <div
                className="button_ani submit-report-button"
                onClick={handleSubmit}
              >
                <button className="btn"> Submit Report </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

SubmitReport.defaultProps = {
  companyName: `Buggify LLC`,
  rId: `${rsrc_id}`,
};

export default SubmitReport;
