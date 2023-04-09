import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Homes8.css";
import { useNavigate } from "react-router-dom";

function Form(targetLocation, targetElementId) {
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");
  const handleSubmit = async () => {
    const mailto = "nullify.bug@gmail.com";
    const message = email + " : " + concern;
    const data = {
      mailto: mailto,
      message: message,
    };
    const response = await fetch(`http://127.0.0.1:5173/mailem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    if (jwt != undefined) {
      alert(`Glad to hear from you, we will contact you soon`);
    }
  };

  return (
    <div className="section-eight">
      <h1 className="h section-eight-h">
        {" "}
        Any Questions? Get in Touch with Us
      </h1>
      <h2 className="h1 section-eight-h2">
        How Can We Help You? Let Us know and we will get back to you as soon as
        Possible
      </h2>

      <form className="section-eight-form">
        <div>
          <label className="section-eight-form-label">Email</label>
          <input
            className="section-eight-form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="section-eight-form-label">
            What's your Concern
          </label>
          <input
            className="section-eight-form-input-concern"
            type="text"
            id={concern}
            onChange={(e) => setConcern(e.target.value)}
          />
        </div>

        <p className="section-eight-form-p">
          <center>
            We will handle all information Safe according to Our Privacy Policy.
            <br /> <input type="checkbox"></input>
            <span className="section-eighr-form-p-span">
              If you don’t want to receive marketing mail, you can manually Turn
              it off from here.
            </span>
          </center>
        </p>
        <div
          className="button_ani  section-eight-form-button"
          onClick={handleSubmit}
        >
          <button className="btn">Get in Touch!</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
