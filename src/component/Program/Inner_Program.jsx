import React from "react";
import './Inner_Program.css'
import { BsBookmarkCheck } from 'react-icons/bs';
import { HiOutlineBellAlert } from 'react-icons/hi2';






const Inner_Program = (props) => {
    return (
        <>
            <div className="inner-program">
                <div className="inner-program-heading-section">
                    <div className="inner-program-heading-section-div1">
                        <div className="inner-program-heading-section-div1-1">
                            <img src={props.ProgramIcon} className="inner-program-heading-section-div1-img" />
                        </div>
                        <div className="inner-program-heading-section-div1-2">
                            <h1 className="inner-program-heading-section-div1-2-h">{props.program_name}</h1>
                            <p className="inner-program-heading-section-div1-2-p">{props.program_description}</p>
                            <br></br><a className="inner-program-heading-section-div1-2-a" href={props.program_link} target='_blank'>{props.program_link}</a>
                            <div className="inner-program-heading-section-div1-2-div">
                                <div className="program-launch-div">
                                    <h5>Program Launch</h5>
                                    <p>{props.program_launch}</p>
                                </div>
                                <div className="program-type-div">
                                    <h5>Program Type</h5>
                                    <p>{props.program_type}</p>
                                </div>
                                <div className="program-bookmark">
                                    <h5>Bookmark <BsBookmarkCheck style={{ fontSize: "14px", marginLeft: "2px" }} /> </h5>
                                    <h5 >Subsribe <HiOutlineBellAlert style={{ fontSize: "14px", marginLeft: "2px" }} /> </h5>
                                </div>

                                <div className="submit-button">
                                    <button className="sub-button" >Submit Report</button>
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
                            <p>{"$"} {props.avg_bounties_paid}</p>
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
                    <ProgramNavBar />
                </div>
            </div>

        </>
    )
}


Inner_Program.defaultProps = {
    program_name: 'Shopify',
    program_description: 'Shopify is a multi-channel commerce platform that helps people sell online, in-store, and everywhere in between.',
    program_link: 'https://www.shopify.com',

    program_launch: '2' + "/" + '2016 ',
    program_type: 'Bug  Bounty Program',

    bug_resolved: '1570',
    asset_in_scope: '15',
    avg_bounties_paid: '600',
    avg_time_respond: 'Within 2 Days',
    avg_time_triage: 'Within 3 Days',

};
export default Inner_Program;   