import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { MdOutlineDoneOutline } from "react-icons/md";

var videoComplete = [];

const ActiveDiratory = () => {
  const [videoProgress, setVideoProgress] = useState([]);

  const courseData = [
    {
      id: 1,
      title: "HackTheBox - Forest",
      url: " https://youtube.com/embed/H9FcE_FMZio",
    },
    {
      id: 2,
      title: "HackTheBox - Sauna",
      url: "https://youtube.com/embed/uLNpR3AnE-Y",
    },
    {
      id: 3,
      title: "HackTheBox - Active",
      url: " https://youtube.com/embed/jUc1J31DNdw",
    },
    {
      id: 4,
      title: "HackTheBox - Blackfield",
      url: "https://youtube.com/embed/IfCysW0Od8w",
    },
    {
      id: 5,
      title: "HackTheBox - Resolute",
      url: " https://youtube.com/embed/8KJebvmd1Fk"
    },
    {
      id: 6,
      title: "HackTheBox - Reel (Bloodhound)",
      url: "https://youtube.com/embed/ob9SgtFm6_g",
    },

    {
      id: 7,
      title: "HackTheBox - Sizzle",
      url: "https://youtube.com/embed/YVhlfUvsqYc"
    },
    {
      id: 8,
      title: "HackTheBox - Mantis",
      url: "https://youtube.com/embed/VVZZgqIyD0Q"
    },
    {
      id: 9,
      title: "HackTheBox - Cascade",
      url: " https://youtube.com/embed/mr-fsVLoQGw"
    },
    {
      id: 10,
      title: "HackTheBox - Multimaste",
      url: "https://youtube.com/embed/iwR746pfTEc"
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
        course_id: 6,
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
    const numSeenVideos = courseData.length;
    const progress = (numSeenVideos / numVideos) * 100;
    const slideincrease = Math.floor(progress);
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
    const course_id = 6;
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
                <h2 className="academy-course-video-list-h">Initial Enumeration</h2>
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
                  Breaching & Exploiting AD
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
                <h2 className="academy-course-video-list-h">Post Enumeration & Exploitation</h2>
                {courseData.slice(5, 7).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">Lateral Movement & Pivoting</h2>
                {courseData.slice(7, 9).map((video, index) => (
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
                          paddingLeft: "12rem",
                          color: "#04ff69",
                          fontSize: "20px",
                        }}
                      >
                        <MdOutlineDoneOutline />
                      </span>
                    )}
                  </li>
                ))}
                <h2 className="academy-course-video-list-h">Full AD Exploitation</h2>
                {courseData.slice(9, 10).map((video, index) => (
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
                          paddingLeft: "12rem",
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

export default ActiveDiratory;
