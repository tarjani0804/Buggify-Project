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
      title: "Video 1",
      url: "https://www.youtube.com/embed/eVI0Ny5cZ2c",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/embed/zHxgZJCy9fA",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/kKOzvqkP4UM",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/POgrNo4xRko",
    },
    { id: 5, title: "Video 5", url: "https://youtube.com/embed/7utwZYKweho" },
    {
      id: 6,
      title: "Video 6",
      url: "https://www.youtube.com/embed/zHxgZJCy9fA",
    },

    { id: 7, title: "Video 7", url: "https://example.com/video7.mp4" },
    { id: 8, title: "Video 8", url: "https://example.com/video8.mp4" },
    { id: 9, title: "Video 9", url: "https://example.com/video9.mp4" },
    { id: 10, title: "Video 10", url: "https://example.com/video10.mp4" },
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
                <h2 className="academy-course-video-list-h">Introduction</h2>
                {courseData.slice(0, 5).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Basic of Networking
                </h2>
                {courseData.slice(5, 10).map((video, index) => (
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

export default WebApplication;
