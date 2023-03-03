import React, { useState } from "react";
import Academy1 from '../image/academy1.png';
import Academy2 from '../image/academy2.png';
import Academy3 from '../image/academy3.png';
import Academy4 from '../image/academy4.png';
import Academy5 from '../image/academy5.png';
import Academy6 from '../image/academy6.png';
import Academy7 from '../image/academy7.png';
import Academy8 from '../image/academy8.png';
import HeathAdam from '../image/heathAdam.png';
import './AcademyCourse.css';
import { useNavigate } from "react-router-dom";

const AcademyCourses = () => {

    const [levelFilters, setLevelFilters] = useState({
        Beginner: false,
        Intermediate: false,
        Advanced: false,
    });

    const [categoryFilters, setCategoryFilters] = useState({
        Web: false,
        Mobile: false,
        Malware: false,
        Windows: false,
        Exlpoitation: false,
        Programming: false,
    });

    // const btn = document.getElementById("course-btn");
    // btn.addEventListener("click", function () {
    //     window.location.href = courses.link;
    // });

    const courses = [{
        id: 1,
        title: "Pentesting with Python",
        level: "Beginner",
        category: "Programming",
        description: "Learn Python concepts & modules important for hacking. Learn how to use python as scripting language.",
        price: "10",
        img: Academy1,
        avatar: HeathAdam,
        instrutor: "Heath Admans",
        link: "/PentestingWithPython/",
    },
    {
        id: 2,
        title: "Bash for Beginners",
        level: "Beginner",
        category: "Programming",
        description: "Bash Scripting or Shell Scripting Course includes everything you need for Command-line, Automate Daily Tasks, and a lot of fun and experiment with shell.",
        price: "15",
        img: Academy2,
        avatar: HeathAdam,
        instrutor: "Heath Adam",
        link: "/BashWithBeginner/",
    },
    {
        id: 3,
        title: "Web Applicataion Pentesting",
        level: "Advanced",
        category: "Web",
        description: "Web Application Pentesting Covers Basic of Web Applications, OWASP Top 10 attacks in-depth. Latest Exploits and Techniques in wild.",
        price: "150",
        img: Academy3,
        avatar: HeathAdam,
        instrutor: "Heath Adam",
        link: "/WebApplicationPentesting/",
    },
    {
        id: 4,
        title: "Offensive Red Teaming ",
        level: "Advanced",
        category: "Exploitation",
        description: "Offensive Red Teaming Covers Every Techniques & Tactics covered in MITRE Framework and other infamous Frameworks.",
        img: Academy4,
        avatar: HeathAdam,
        instrutor: "Heath Adam",
        price: "220",
        link: "/OffensiveRedTeaming/",
    }, {
        id: 5,
        title: "Malware Analysis & RE ",
        level: "Advanced",
        category: "Malware",
        description: "Advance Malware Analysis Training Consist of Static and Dynamic Analysis of Recent Malwares and Reverse Enginner them.",
        avatar: HeathAdam,
        instrutor: " HeathAdam",
        price: "150",
        img: Academy5,
        link: "/MalwareAnalysis/",
    },
    {
        id: 6,
        title: "Active Directory Exploitation ",
        level: "Advanced",
        category: "Windows",
        img: Academy6,
        description: "AD Exploitation is one of the top notch skill to Pentest 99% of Forbs top 500 Companies and get into their Networks Ethically.",
        avatar: HeathAdam,
        instrutor: "Heath Adam ",
        price: "200",
        link: "/ActiveDirectoryExploitation/",
    },
    {
        id: 7,
        title: "Mobile App Pentesting ",
        level: "Intermediate",
        category: "Mobile",
        img: Academy7,
        description: "Mobile Application Pentesting One of the Most Untouched Area of Pentesting, Hunting Bugs in Mobile App gives High Payouts.",
        avatar: HeathAdam,
        instrutor: "Heath Adam",
        price: "120",
        link: "/MobileAppPentesting/",
    },
    {
        id: 8,
        title: "API Pentesting ",
        level: "Advanced",
        category: "Web",
        img: Academy8,
        description: "API is a way of Communication Between Systems and Breaking it, Testing it is a Fun.",
        avatar: HeathAdam,
        instrutor: "Heath Adam ",
        price: "150",
        link: "/ApiPentesting/",
    },];

    /* navigation  */
    const navigate = useNavigate();
    const paths = ['/PentestingWithPython', '/BashWithBeginner', '/WebApplicationPentesting', '/OffensiveRedTeaming', '/MalwareAnalysis', '/ActiveDirectoryExploitation', '/MobileAppPentesting', '/ApiPentesting'];
    const goto = (redirectLink) => {
        navigate(redirectLink);
    };


    const gotoGetStarted = () => {
        navigate('/AcademyGetStarted');
    };
    const gotoCourses = () => {
        navigate('/AcademyCourses');
    }
    const gotoAnnouncemenet = () => {
        navigate('/AcademyAnnouncement');
    }
    const gotoVideo = () => {
        navigate('/AcademyVideos');
    }
    const gotoBlogs = () => {
        navigate('/AcademyBlogs');
    }
    const gotoDiscord = () => {
        navigate('/AcademyDiscord');
    }


    const handleLevelFilterChange = (event) => {
        setLevelFilters({
            ...levelFilters,
            [event.target.name]: event.target.checked
        });
    };

    const handleCategoryFilterChange = (event) => {
        setCategoryFilters({
            ...categoryFilters,
            [event.target.name]: event.target.checked
        });
    };

    // Define filteredCourses array based on selected filters
    let filteredCourses = courses;
    if (levelFilters.Beginner) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Beginner"
        );
    }
    if (levelFilters.Intermediate) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Intermediate"
        );
    }
    if (levelFilters.Advanced) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Advanced"
        );
    }
    if (categoryFilters.Web) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Web"
        );
    }
    if (categoryFilters.Mobile) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Mobile"
        );
    }
    if (categoryFilters.Malware) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Malware"
        );
    }
    if (categoryFilters.Windows) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Windows"
        );
    }
    if (categoryFilters.Exlpoitation) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Exploitation"
        );
    }
    if (categoryFilters.Programming) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Programming"
        );
    }


    return (
        <>
            <div className="nav">
                <nav className="academy-nav">
                    <ul className="academy-nav-ul">

                        <li className="academy-nav-li" onClick={gotoGetStarted}>
                            Get Started with Hackacdemy
                        </li>
                        <li className="academy-nav-li academy-nav-selected" onClick={gotoCourses}>
                            Courses
                        </li>
                        <li className="academy-nav-li" onClick={gotoAnnouncemenet}>
                            Announcement
                        </li>
                        <li className="academy-nav-li" onClick={gotoVideo}>
                            Videos
                        </li>
                        <li className="academy-nav-li" onClick={gotoBlogs}>
                            Blogs
                        </li>
                        <li className="academy-nav-li" onClick={gotoDiscord}>
                            Discord
                        </li>

                    </ul>
                </nav>


                <div className="container" >
                    <div className="courses-div">
                        <div className="filter-div">

                            <div className="level-filter">
                                <div className="col-md-3 filter-box1">
                                    <h5 className="level-filter-h">Level </h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="Beginner"
                                            id="Beginner"
                                            checked={levelFilters.Beginner}
                                            onChange={handleLevelFilterChange}
                                        />
                                        <label className="form-check-label" for="Beginner">Beginner</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="Intermediate"
                                            id="Intermediate"
                                            checked={levelFilters.Intermediate}
                                            onChange={handleLevelFilterChange}
                                        />
                                        <label className="form-check-label" for="Intermediate">Intermediate</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="Advanced"
                                            id="Advanced"
                                            checked={levelFilters.Advanced}
                                            onChange={handleLevelFilterChange}
                                        />
                                        <label className="form-check-label" for="Advanced">Advanced</label>
                                    </div>
                                </div>
                            </div>
                            <div className="category-filter col-3">
                                <h5 className="category-filter-h" for="myCheckbox">Category</h5>

                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Web"
                                        id="Web"
                                        checked={categoryFilters.Web}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Web">Web</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Mobile"
                                        id="Mobile"
                                        checked={categoryFilters.Mobile}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Mobile">Mobile</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Malware"
                                        id="Malware"
                                        checked={categoryFilters.Malware}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Malware">Malware</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Windows"
                                        id="Windows"
                                        checked={categoryFilters.Windows}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Windows">Windows</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Exploitation"
                                        id="Exploitation"
                                        checked={categoryFilters.Exploitation}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Exploitation">Exlpoitation</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="Programming"
                                        id="Programming"
                                        checked={categoryFilters.Programming}
                                        onChange={handleCategoryFilterChange}
                                    />
                                    <label className="form-check-label" for="Programming">Programming</label>
                                </div>
                            </div>
                        </div>

                        <div className="courses-card-div">
                            <h3 className="h">Courses</h3>
                            <div className="row course-cards">
                                {filteredCourses.map((course) => (
                                    <div className="course-cards" key={course.id}>
                                        <div className="course-card">
                                            <div className="card-body-div1">
                                                <img src={course.img} className="card-body-div1-img" />
                                            </div>
                                            <div className="card-body-div2">
                                                <p className="card-body-div2-title">{course.title}</p>
                                                <p className="card-body-div2-text">{course.description}</p>
                                                <button className="card-body-div2-level-button"> {course.level}</button>
                                                <button className="card-body-div2-category-button"> {course.category}</button>
                                                <p className="card-body-div2-instrutor">Course instrutor : <br />
                                                    <img src={course.avatar} className="card-body-div2-avatar" />
                                                    <p className="card-body-div2-instrutor-span">{course.instrutor}</p>
                                                </p>


                                            </div>
                                            <div className="card-body-div3">
                                                <center>
                                                    <p className="card-body-div3-price">Course Price:{'$' + course.price}</p>

                                                    <div className="button_ani card-div3-button1" onClick={() => goto(course.link)} >

                                                        <button className="button2"> View More</button>
                                                    </div>
                                                    <div className="button_ani card-div3-button2">
                                                        <button className="btn card-div3-button2-button">Buy Now</button>
                                                    </div>
                                                </center>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default AcademyCourses;