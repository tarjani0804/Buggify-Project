import React, { useState } from "react";
import ReactPlayer from 'react-player';

import './TestCourse.css';

const CourseVideo = () => {
    // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoProgress, setVideoProgress] = useState(0);
    const [currentVideoListIndex, setCurrentVideoListIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const handleCompleteLesson = () => {
        if (currentVideoListIndex < courseData.videos.length - 1) {
            setCurrentVideoListIndex(currentVideoListIndex + 1);
        }
    };


    const handleNextLessonClick = () => {
        if (currentVideoIndex < courseData.videos[0].videosList.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const handlePreviousLessonClick = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };
    const handleVideoEnd = () => {
        if (
            currentVideoIndex < courseData.videos.length - 1 &&
            courseData.videos[currentVideoIndex].videosList.length - 1
        ) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        } else {
            setVideoProgress(1);
        }
    };


    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);



    const handleVideoCompletion = () => {
        if (currentVideo === courseData.videos[0].videosList[currentLesson].length - 1) {
            // mark current lesson as completed
            videosList[currentLesson].forEach(video => {
                video.completed = true;
            });

            // move to next lesson
            setCurrentLesson(currentLesson + 1);
            setCurrentVideo(0);
        } else {
            // move to next video in current lesson
            setCurrentVideo(currentVideo + 1);
        }
    }




    const courseData = {
        videos: [
            {
                id: 1,
                title: 'Introduction',
                videosList: [
                    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/watch?v=eVI0Ny5cZ2c', completed: false },
                    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/watch?v=zHxgZJCy9fA', completed: false },
                    { id: 3, title: 'Video 3', url: 'hhttps://www.youtube.com/@TCMSecurityAcademy', completed: false },
                    { id: 4, title: 'Video 4', url: 'https://www.youtube.com/watch?v=POgrNo4xRko', completed: false },
                    { id: 5, title: 'Video 5', url: 'https://youtube.com/watch?v=7utwZYKweho', completed: false },
                ],
            },
            {
                id: 2,
                title: 'Basics of Networking',
                videosList: [
                    { id: 6, title: 'Video 6', url: 'https://example.com/video6.mp4' },
                    { id: 7, title: 'Video 7', url: 'https://example.com/video7.mp4' },
                    { id: 8, title: 'Video 8', url: 'https://example.com/video8.mp4' },
                    { id: 9, title: 'Video 9', url: 'https://example.com/video9.mp4' },
                    { id: 10, title: 'Video 10', url: 'https://example.com/video10.mp4' },
                ],
            },
        ],
    };



    return (
        <>
            <div className="academy-courseVideo">
                <div className="academy-course-video">
                    {/* Video List */}

                    <div className="academy-course-video-progree-list">
                        <div className="academy-course-video-progress">
                            <div className="CourseVideo-progress">Complete Course - {Math.floor(videoProgress * 100)}%</div>
                            <progress value={videoProgress} max="1" className="academy-course-video-progress-bar" />
                        </div>
                        <div>
                            <ul className="academy-course-video-list">
                                {courseData.videos.map((video, index) => (
                                    <li key={video.id}>
                                        <h2>{video.title}</h2>
                                        <ul>
                                            {video.videosList.map((videoList) => (
                                                <li
                                                    key={videoList.id}>

                                                    {videoList.title}

                                                    <span style={{
                                                        color: "#878787",
                                                        marginLeft: "2rem",
                                                        fontSize: "16px",
                                                    }}>  {videoProgress >= (index + 1) / courseData.videos[1].videosList.length && "✔"}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                    {/* Video Player */}
                    <div className="academy-course-video-videos">
                        <h2 className="academy-course-video-videos-h">
                            {courseData.videos[0].videosList[currentVideoIndex].title}
                        </h2>
                        <ReactPlayer
                            controls
                            url={courseData.videos[0].videosList[currentVideoIndex].url}
                            onEnded={handleVideoEnd}

                            className="academy-course-video-videos-video-player"
                        />
                        <div>
                            {currentVideoIndex > 0 && (
                                <button onClick={handlePreviousLessonClick} className="previous-button">
                                    Previous Lesson
                                </button>
                            )}
                            {currentVideoIndex < courseData.videos[0].videosList.length - 1 ? (
                                <button onClick={handleNextLessonClick} className="next-button" >
                                    Complete and Next Lesson
                                </button>
                            ) : (
                                <button className="complete-course-button">Complete Course</button>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};


export default CourseVideo;

