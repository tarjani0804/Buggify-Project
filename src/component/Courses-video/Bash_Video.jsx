import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { MdOutlineDoneOutline } from "react-icons/md";

var videoComplete = [];

const Bash = () => {
  const [videoProgress, setVideoProgress] = useState([]);

  const courseData = [
    {
      id: 1,
      title: "Introduction & Shebang",
      url: "https://www.youtube.com/embed/LTuuMtQR1uQ",
    },
    {
      id: 2,
      title: "Variables",
      url: "https://www.youtube.com/embed/WhqfbwQbWVE",
    },
    {
      id: 3,
      title: "User Input & Comments",
      url: "https://www.youtube.com/embed/yLQnpmkNFmk",
    },
    {
      id: 4,
      title: " If & If/else Statements",
      url: "https://www.youtube.com/embed/qoem5hqCH6A",
    },
    { id: 5, title: "Test Scripts", url: "https://youtube.com/embed/ujp6d1he-jk" },
    {
      id: 6,
      title: " For Loops",
      url: "https://www.youtube.com/embed/T7hVOiTsSUU",
    },

    { id: 7, title: "Functions", url: "https://www.youtube.com/embed/Jx9yhQ76o8U" },
    { id: 8, title: "Ping Sweep Script", url: "https://www.youtube.com/embed/U79cJfDTIrQ" },
    { id: 9, title: "Password Generator", url: "https://www.youtube.com/embed/P5552IJp7tU" },
    { id: 10, title: "Positional Parameters", url: "https://www.youtube.com/embed/MBYnhVaN4rU" },
    { id: 11, title: " File Encryptor/Decryptor", url: "https://www.youtube.com/embed/p7JctZmdhuo" },
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
        course_id: 2,
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
    const course_id = 2;
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
                <h2 className="academy-course-video-list-h">Basic of Bash</h2>
                {courseData.slice(0, 7).map((video, index) => (
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
                  Let's Hack With Scripts
                </h2>
                {courseData.slice(7, 11).map((video, index) => (
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

export default Bash;
