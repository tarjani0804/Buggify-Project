import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { MdOutlineDoneOutline } from "react-icons/md";

var videoComplete = [];

const Offensive = () => {
  const [videoProgress, setVideoProgress] = useState([]);

  const courseData = [
    {
      id: 1,
      title: " Adversary Emulation with Caldera",
      url: "https://www.youtube.com/embed/EIHLXWnK1Dw",
    },
    {
      id: 2,
      title: "Reconnaissance Techniques",
      url: "https://www.youtube.com/embed/BWaGnsRirtU",
    },
    {
      id: 3,
      title: "Luckystrike & Powershell Empire",
      url: "https://www.youtube.com/embed/dRebw65X5eQ",
    },
    {
      id: 4,
      title: "Dynamic Shellcode Injection & Powershell Obfuscation",
      url: "https://www.youtube.com/embed/6xexyQwG7SY",
    },
    {
      id: 5, title: "Bypassing UAC & Kernel Exploits",
      url: "https://youtube.com/embed/vPTbWnCZ0sg"
    },
    {
      id: 6,
      title: "Credential Access Techniques - Mimikatz & WCE",
      url: "https://www.youtube.com/embed/wH2kE527cwQ",
    },
    {
      id: 7,
      title: "Persistance with Powershell Empire",
      url: "https://www.youtube.com/embed/7h_5BJHIpnU",
    },
    {
      id: 8,
      title: "Lateral Movement Techniques - PsExec & RDP",
      url: "https://www.youtube.com/embed/QGkmlsvjMYI",
    },
    {
      id: 9,
      title: "Mimikatz & Privilege Escalation",
      url: "https://www.youtube.com/embed/52xkWbDMUUM",
    },
    {
      id: 10,
      title: "Post Exploitation with Empire & LaZagne",
      url: "https://www.youtube.com/embed/AwFyiFOXrd0",
    },
    {
      id: 11,
      title: "Windows Credential Editor - Dump Window Password Hashes ",
      url: "https://www.youtube.com/embed/u0RppDmw1So",
    },

    {
      id: 12,
      title: "Pivoting and Persistance with Armitage",
      url: "https://www.youtube.com/embed/kRXVQdzRbzI",
    },
    {
      id: 13,
      title: "Linux RTE - Exploit Wordpress & MySQL",
      url: "https://www.youtube.com/embed/_1QnyKTqQ6w",
    },
    {
      id: 14,
      title: "Kernal Exploits & SUDO Permissions ",
      url: "https://www.youtube.com/embed/w2rElXYV2Fs",
    },
    {
      id: 15,
      title: "Persistance Techniques - SSH Keys, Web Shells & Cron Jobs",
      url: "https://www.youtube.com/embed/tNJs8CFj_B8",
    },
    {
      id: 16,
      title: "Defense Evasion - Apache2 Rootkit ",
      url: "https://www.youtube.com/embed/ChgqGBwl8NQ",
    },
    {
      id: 17,
      title: "Hiding Linux Processes",
      url: "https://www.youtube.com/embed/GT-ClZAi6rE",
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
        course_id: 4,
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
    const course_id = 4;
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
                <h2 className="academy-course-video-list-h">Initial Actions</h2>
                {courseData.slice(0, 2).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Powerfull Powershell
                </h2>
                {courseData.slice(2, 4).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Windows Exploitation
                </h2>
                {courseData.slice(4, 6).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Windows Persistance & Lateral Movement
                </h2>
                {courseData.slice(6, 12).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Linux Exploitation
                </h2>
                {courseData.slice(12, 15).map((video, index) => (
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
                <h2 className="academy-course-video-list-h">
                  Hiding Yourself
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

export default Offensive;
