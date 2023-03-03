import React from "react";
import './Homes7.css'

const homes7 = ({ videoId }) => {
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;


    return (
        <>
            <div className="section-seven">
                <hr className="section-seven-hr" />
                <h3 className="h1 section-seven-h">A Small message from our CEO for all</h3>
                <h1 className=" section-seven-h1 h">The latest in Reducing Attack Surface</h1>
                <div className="responsive-youtube-container">
                    <iframe
                        className="responsive-youtube-video"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </>
    )
}

export default homes7;