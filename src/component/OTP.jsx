import React, { useState } from "react";
import "./ForgotPassword.css";

const ConfirmOTP = () => {
    const [otp, setOtp] = useState("");

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

            <h2 className="forgot-h ">OTP</h2>
            <form>
                {/* <div>
                    <label htmlFor="email-or-username" className="forgot-label">Enter Email Id or Username</label>
                    <input type="text" id="email-or-username" className="forgot-input" />
                </div> */}
                <div>
                    <p className="forgot-otp-p">OTP is send to your  Registered Email.</p>
                </div>
                <div>
                    <label className="forgot-label" htmlFor="otp">Enter OTP</label>
                    <input className="forgot-input" type="text" name="otp" value={otp} onChange={(event) => setOtp(event.target.value)} required />
                </div>

                <div className="forgot-button-div button_ani" onClick={handleSubmit}>
                    <button type="submit" className="button2">Confirm OTP</button>
                </div>
            </form>

        </div>
    );
};

export default ConfirmOTP;
