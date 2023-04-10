import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { MdOutlineDoneOutline } from "react-icons/md";

var videoComplete = [];

const WebApplication = () => {
  const [videoProgress, setVideoProgress] = useState([]);

  const courseData = [
    {
      id: 1,
      title: " HTTP Fundamentals ",
      url: "https://www.youtube.com/embed/qv5-5hhsKpE",
    },
    {
      id: 2,
      title: "Enumeration of Web Application",
      url: "https://www.youtube.com/embed/ZBi8Qa9m5c0?feature=share",
    },
    {
      id: 3,
      title: "Fuzzing 101",
      url: "https://www.youtube.com/embed/M_guA0wjrLg",
    },
    {
      id: 4,
      title: "BurpSuite Professional Walkthrough",
      url: "https://www.youtube.com/embed/ePiAM4Vd3fg",
    },
    {
      id: 5,
      title: "Best BurpSuite Plugins for Collaboration",
      url: "https://youtube.com/embed/AI5Sz5E0qhE"
    },
    {
      id: 6,
      title: "XSS & UI Bypassing",
      url: "https://www.youtube.com/embed/zu_aNhbMhnQ?feature=share",
    },
    {
      id: 7,
      title: "SQL Injection, XSS, Broken Access Control",
      url: "https://www.youtube.com/embed/azYwfI26oXo?feature=share",
    },
    {
      id: 8,
      title: "XXE, Input Validation, BAC, more XSS",
      url: "https://www.youtube.com/embed/xH8WbuApFXw",
    },
    {
      id: 9,
      title: "File Upload Vulnerabilities",
      url: "https://www.youtube.com/embed/YAFVGQ-lBoM",
    },
    {
      id: 10,
      title: "NoSQL Injection",
      url: "https://www.youtube.com/embed/zHxgZJCy9fA",
    },
    {
      id: 11,
      title: "SSRF Exploitation",
      url: "https://www.youtube.com/embed/eVI0Ny5cZ2c",
    },
    {
      id: 12,
      title: "Attacking JWT",
      url: "https://www.youtube.com/embed/2aanc20xnaQ",
    },
    {
      id: 13,
      title: "Cracking JWT",
      url: "https://www.youtube.com/embed/2RKCDhH6dyA",
    },
    {
      id: 14,
      title: "Build & Break WebSockets",
      url: "https://www.youtube.com/embed/kKOzvqkP4UM",
    },
    {
      id: 15,
      title: "Broken Object Level Authorization",
      url: "https://www.youtube.com/embed/YciLnEY1AN0",
    },

    {
      id: 16,
      title: "Live Web App Bug Hunting",
      url: "https://www.youtube.com/embed/U3Qzc2YUNIU",
    },
    {
      id: 17,
      title: "Hunting for Third Level Domains",
      url: "https://www.youtube.com/embed/AMmGtFsZutk",
    },

  ];

  const [currentVideoId, setCurrentVideoId] = useState(courseData[0].id);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(courseData[0].url);
  const [currentVideoTitle, setCurrentVideoTitle] = useState(
    courseData[0].title
  );

  const [onClickCount, setOnClickCount] = useState(0);
  useEffect(() => {
    const abc = async () => {
      const myCookie = Cookies.get("myCookie");
      const data = {
        myCookie: myCookie,
        course_id: 3,
      };
      const response = await fetch(`http://127.0.0.1:5173/vids`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      console.log(jwt.status[0].vid_num);

      videoComplete = jwt.status[0].vid_num;
      console.log(videoComplete);

      setVideoProgress(...videoProgress, videoComplete);
    };
    abc();
  }, [onClickCount]);
  console.log(videoProgress);
  const [progress, setProgress] = useState(calculateProgress());
  function calculateProgress() {
    const numVideos = courseData.length;
    const numSeenVideos = videoProgress.length;
    const progress = (numSeenVideos / numVideos) * 100;
    const slideincrease = Math.floor(progress);


    console.log(numSeenVideos);
    console.log(numVideos);
    console.log(progress);
    return slideincrease;



  }

  // Update progress state whenever videoProgress prop changes
  useEffect(() => {
    setProgress(calculateProgress());
  }, [videoProgress]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const scrollRef = useRef(null);
  useLayoutEffect(() => {
    if (scrollRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleVideoClick = (id, title, url) => {
    setCurrentVideoId(id);
    setCurrentVideoTitle(title);
    setCurrentVideoUrl(url);
  };

  const handleNextLessonClick = async () => {
    const currentVideoIndex = courseData.findIndex(
      (video) => video.id === currentVideoId
    );
    if (currentVideoIndex < courseData.length - 1) {
      const nextVideo = courseData[currentVideoIndex + 1];
      setCurrentVideoId(nextVideo.id);
      setCurrentVideoUrl(nextVideo.url);
      setCurrentVideoTitle(nextVideo.title);
    }

    const vid_num = currentVideoId;
    const course_id = 3;
    const myCookie = Cookies.get("myCookie");
    const data = {
      myCookie: myCookie,
      course_id: course_id,
      vid_num: vid_num,
    };
    const response = await fetch(`http://127.0.0.1:5173/seenVideo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    alert(jwt.status);

    // window.location.href = "/TestCourse";
    setOnClickCount(onClickCount + 1);
  };

  const handlePreviousLessonClick = () => {
    const currentVideoIndex = courseData.findIndex(
      (video) => video.id === currentVideoId
    );
    if (currentVideoIndex > 0) {
      const previousVideo = courseData[currentVideoIndex - 1];
      setCurrentVideoId(previousVideo.id);
      setCurrentVideoUrl(previousVideo.url);
      setCurrentVideoTitle(previousVideo.title);
    }
  };

  return (
    <>
      <div className="academy-courseVideo" ref={scrollRef}>
        <div className="academy-course-video">
          {/* Video List */}

          <div className="academy-course-video-progree-list">
            <div className="academy-course-video-progress">
              <div className="CourseVideo-progress">
                Complete Course - {progress}%
              </div>
              <progress
                value={progress / 100}
                max="1"
                className="academy-course-video-progress-bar"
              />
            </div>
            <div>
              <ul className="academy-course-video-list">
                <h2 className="academy-course-video-list-h">Basic of Web Hacking</h2>
                {courseData.slice(0, 3).map((video, index) => (
                  <li
                    key={video.id}
                    onClick={() =>
                      handleVideoClick(video.id, video.title, video.url)
                    }
                    className={
                      videoComplete.includes(String(video.id)) ? "watched" : ""
                    }
                    style={{ display: "flex" }}
                  >
                    {video.title}

                    {videoComplete.includes(String(video.id)) && (
                      <span
                        style={{
                          color: "#04ff69",
                          fontSize: "20px",
                        }}
                      >
                        <MdOutlineDoneOutline />
                      </span>
                    )}
                  </li>
                ))}
                <h2 className="academy-course-video-list-h">
                  Tooling
                </h2>
                {courseData.slice(3, 5).map((video, index) => (
                  <li
                    key={video.id}
                    onClick={() =>
                      handleVideoClick(video.id, video.title, video.url)
                    }
                    className={
                      videoComplete.includes(String(video.id)) ? "watched" : ""
                    }
                    style={{ display: "flex" }}
                  >
                    {video.title}

                    {videoComplete.includes(String(video.id)) && (
                      <span
                        style={{
                          color: "#04ff69",
                          fontSize: "20px",
                        }}
                      >
                        <MdOutlineDoneOutline />
                      </span>
                    )}
                  </li>
                ))}
                <h2 className="academy-course-video-list-h">
                  Exploit Vulnerabilities
                </h2>
                {courseData.slice(5, 15).map((video, index) => (
                  <li
                    key={video.id}
                    onClick={() =>
                      handleVideoClick(video.id, video.title, video.url)
                    }
                    className={
                      videoComplete.includes(String(video.id)) ? "watched" : ""
                    }
                    style={{ display: "flex" }}
                  >
                    {video.title}

                    {videoComplete.includes(String(video.id)) && (
                      <span
                        style={{
                          color: "#04ff69",
                          fontSize: "20px",
                        }}
                      >
                        <MdOutlineDoneOutline />
                      </span>
                    )}
                  </li>
                ))}
                <h2 className="academy-course-video-list-h">
                  Hack Live Target
                </h2>
                {courseData.slice(15, 17).map((video, index) => (
                  <li
                    key={video.id}
                    onClick={() =>
                      handleVideoClick(video.id, video.title, video.url)
                    }
                    className={
                      videoComplete.includes(String(video.id)) ? "watched" : ""
                    }
                    style={{ display: "flex" }}
                  >
                    {video.title}

                    {videoComplete.includes(String(video.id)) && (
                      <span
                        style={{
                          color: "#04ff69",
                          fontSize: "20px",
                        }}
                      >
                        <MdOutlineDoneOutline />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video Player */}
          <div className="academy-course-video-videos">
            <h2 className="academy-course-video-videos-h">
              {currentVideoTitle}
            </h2>
            <iframe
              src={currentVideoUrl}
              className="academy-course-video-videos-video-player"
            ></iframe>
            <div style={{ display: "flex", width: "800px" }}>
              {currentVideoId !== 1 && (
                <button
                  onClick={handlePreviousLessonClick}
                  className="previous-button"
                >
                  Previous Lesson
                </button>
              )}
              {currentVideoIndex < courseData.length - 1 ? (
                <button onClick={handleNextLessonClick} className="next-button">
                  Complete and Next Lesson
                </button>
              ) : (
                <button className="complete-course-button">
                  Complete Course
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplication;
