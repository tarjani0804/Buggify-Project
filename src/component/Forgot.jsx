import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPasswordForm = () => {
    const [username, setUserName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username != '') {
            const url = `http://127.0.0.1:5173/forgetPass/${username}`;
            const data = { username: username }
            const response = await fetch(url, {
                method: 'GET'
            })
            const jwt = await response.json()
        } else {
            alert('Please Enter Username or Email Id');
        }
    }

    return (
        <div className="forgot">

            <h2 className="forgot-h " >Forgot Password</h2>
            <form>
                {/* <div>
                    <label htmlFor="email-or-username" className="forgot-label">Enter Email Id or Username</label>
                    <input type="text" id="email-or-username" className="forgot-input" />
                </div> */}
                <div>
                    <label className="forgot-label" htmlFor="email-or-username">Enter Email or Username</label>
                    <input className="forgot-input" type="text" name="username" value={username} onChange={(event) => setUserName(event.target.value)} required />
                </div>
                <div>
                    <p className="forgot-p">You will receive a link to create a new password via email.</p>
                </div>
                <div className="forgot-button-div button_ani" onClick={handleSubmit}>
                    <button type="submit" className="button2">Send OTP</button>
                </div>
            </form>

        </div>
    );
};

export default ForgotPasswordForm;
