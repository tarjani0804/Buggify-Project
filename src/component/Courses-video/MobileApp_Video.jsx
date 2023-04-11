import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { MdOutlineDoneOutline } from "react-icons/md";

var videoComplete = [];

const MobileAppPentesting = () => {
  const [videoProgress, setVideoProgress] = useState([]);

  const courseData = [
    {
      id: 1,
      title: " Introduction, Architecture, Permissions ",
      url: "https://www.youtube.com/embed/vx-FKEqi9b8",
    },
    {
      id: 2,
      title: "Android Applications & Signing an application",
      url: "https://www.youtube.com/embed/2-WTAgd6YZ8",
    },
    {
      id: 3,
      title: "Genymotion & App Components",
      url: "https://www.youtube.com/embed/bVcfBKcblmE",
    },
    {
      id: 4,
      title: "Dex File Analysis and ADB ",
      url: "https://www.youtube.com/embed/iZCbKELR8ok",
    },
    {
      id: 5,
      title: "Logging based Vulnerabilities",
      url: "https://youtube.com/embed/kxY6dPPB-34"
    },
    {
      id: 6,
      title: "Reversing an Application",
      url: "https://www.youtube.com/embed/uP5W2hCLar0",
    },
    {
      id: 7,
      title: "Malware Analysis (Static)",
      url: "https://www.youtube.com/embed/TbbxtDQ_LlM",
    },
    {
      id: 8,
      title: " Traffic Analysis (Dynamic",
      url: "https://www.youtube.com/embed/RPPEfy39aos",
    },
    {
      id: 9,
      title: "Bypass SSL Pinning",
      url: "https://www.youtube.com/embed/WXStzGTosSA",
    },
    {
      id: 10,
      title: "Content Providers",
      url: "https://www.youtube.com/embed/DCzhsibPfh8",
    },
    {
      id: 11,
      title: "Drozer basics",
      url: "https://www.youtube.com/embed/RwM1sRMBDZM",
    },
    {
      id: 12,
      title: "Drozer - Content Provider Vulnerabilities",
      url: "https://www.youtube.com/embed/si1LhLHhmzk",
    },
    {
      id: 13,
      title: "Advanced Drozer example",
      url: "https://www.youtube.com/embed/a4UJNIYHyWY",
    },
    {
      id: 14,
      title: "Injection Attacks",
      url: "https://www.youtube.com/embed/Hp9MMYinwlU",
    },
    {
      id: 15,
      title: " Dynamic Hooking with Frida",
      url: "https://www.youtube.com/embed/92vjtZhbl2s",
    },
    {
      id: 16,
      title: "Debugging using Andbug and JDB",
      url: "https://www.youtube.com/embed/-D4GNijEbZ8",
    },
    {
      id: 17,
      title: "Webview Vulnerabilities",
      url: "https://www.youtube.com/embed/mVAshGZxu7g",
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
        course_id: 7,
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
    const numSeenVideos = videoComplete.length;
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
    const course_id = 7;
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
    alert(jwt.status);
    alert(jwt.status);
    alert(jwt.status);
    alert(jwt.status);
    alert(jwt.status);
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
                <h2 className="academy-course-video-list-h">Introduction</h2>
                {courseData.slice(0, 17).map((video, index) => (
                  <li
                    key={video.id}
                    onClick={() =>
                      handleVideoClick(video.id, video.title, video.url)
                    }
                    className={
                      videoComplete.includes(String(video.id)) ? "watched" : ""
                    }

                  >
                    {video.title}

                    {videoComplete.includes(String(video.id)) && (
                      <span
                        style={{
                          marginLeft: "1rem",
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

export default MobileAppPentesting;
