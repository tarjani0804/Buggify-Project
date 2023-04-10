import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Academy1 from "../image/academy1.png";
import Academy2 from "../image/academy2.png";
import Academy3 from "../image/academy3.png";
import Academy4 from "../image/academy4.png";
import Academy5 from "../image/academy5.png";
import Academy6 from "../image/academy6.png";
import Academy7 from "../image/academy7.png";
import Academy8 from "../image/academy8.png";
import HeathAdam from "../image/heathAdam.png";
import activeDirectory from '../image/active_directory_pentesting.jpg';
import bash from '../image/Bash_scripting.jpg';
import web from '../image/Web_Application_Pentesting.jpg';
import offensive from '../image/Offensive_Red_Teaming.jpg';
import malware from '../image/Malware_Analysis.jpg';
import api from '../image/API_pentesting.jpg';
import mobile from '../image/Mobile_Application_Pentesting.jpg';
import python from '../image/Pentesting_with_Python.jpg';

import "./AcademyCourse.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AcademyCourses = () => {
  const scrollRef = useRef(null);
  useLayoutEffect(() => {
    if (scrollRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

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


  const courses = [
    {
      id: 1,
      title: "Pentesting with Python",
      level: "Beginner",
      category: "Programming",
      description:
        "Learn Python concepts & modules important for hacking. Learn how to use python as scripting language.",
      price: "10",
      img: Academy1,
      avatar: python,
      instrutor: "HackerSploit",
      link: "/PentestingWithPython",
      videoLink: "/course-video-pentesting-with-python",
    },
    {
      id: 2,
      title: "Bash for Beginners",
      level: "Beginner",
      category: "Programming",
      description:
        "Bash Scripting or Shell Scripting Course includes everything you need for Command-line, Automate Daily Tasks, and a lot of fun and experiment with shell.",
      price: "15",
      img: Academy2,
      avatar: bash,
      instrutor: "HackerSploit",
      link: "/BashWithBeginner/",
      videoLink: "/course-video-bash-for-beginner",
    },
    {
      id: 3,
      title: "Web Applicataion Pentesting",
      level: "Advanced",
      category: "Web",
      description:
        "Web Application Pentesting Covers Basic of Web Applications, OWASP Top 10 attacks in-depth. Latest Exploits and Techniques in wild.",
      price: "150",
      img: Academy3,
      avatar: web,
      instrutor: "Heath Adams",
      link: "/WebApplicationPentesting/",
      videoLink: "/course-video-web-application-pentesting",
    },
    {
      id: 4,
      title: "Offensive Red Teaming ",
      level: "Advanced",
      category: "Exploitation",
      description:
        "Offensive Red Teaming Covers Every Techniques & Tactics covered in MITRE Framework and other infamous Frameworks.",
      img: Academy4,
      avatar: offensive,
      instrutor: "HackerSploit",
      price: "220",
      link: "/OffensiveRedTeaming/",
      videoLink: "/course-video-offensive-red-teaming",
    },
    {
      id: 5,
      title: "Malware Analysis & RE ",
      level: "Advanced",
      category: "Malware",
      description:
        "Advance Malware Analysis Training Consist of Static and Dynamic Analysis of Recent Malwares and Reverse Enginner them.",
      avatar: malware,
      instrutor: "HackerSploit",
      price: "150",
      img: Academy5,
      link: "/MalwareAnalysis/",
      videoLink: "/course-video-malware-analysis",
    },
    {
      id: 6,
      title: "Active Directory Exploitation ",
      level: "Advanced",
      category: "Windows",
      img: Academy6,
      description:
        "AD Exploitation is one of the top notch skill to Pentest 99% of Forbs top 500 Companies and get into their Networks Ethically.",
      avatar: activeDirectory,
      instrutor: "qhum7",
      price: "200",
      link: "/ActiveDirectoryExploitation/",
      videoLink: "/course-video-active-diretory-exploitation",
    },
    {
      id: 7,
      title: "Mobile App Pentesting ",
      level: "Intermediate",
      category: "Mobile",
      img: Academy7,
      description:
        "Mobile Application Pentesting One of the Most Untouched Area of Pentesting, Hunting Bugs in Mobile App gives High Payouts.",
      avatar: mobile,
      instrutor: "BitsPlease",
      price: "120",
      link: "/MobileAppPentesting/",
      videoLink: "/course-video-mobile-app-pentesting",
    },
    {
      id: 8,
      title: "API Pentesting ",
      level: "Advanced",
      category: "Web",
      img: Academy8,
      description:
        "API is a way of Communication Between Systems and Breaking it, Testing it is a Fun.",
      avatar: api,
      instrutor: "insiderPhD",
      price: "150",
      link: "/ApiPentesting/",
      videoLink: "/course-video-API-pentesting",
    },
  ];

  const [coursePurchase, setCoursePurchase] = useState([]);

  /* navigation  */
  const navigate = useNavigate();

  const goto = (redirectLink) => {
    navigate(redirectLink);
  };

  const gotoCourseVideo = (redirectLink) => {
    navigate(redirectLink);
  }
  var course2 = []

  useEffect(() => {
    const course1 = async () => {
      const rsrc_id = Cookies.get("rsrc_id");
      const courseUrl1 = `http://127.0.0.1:5173/getcourse/${rsrc_id}`;
      const response = await fetch(courseUrl1);
      const jwt = await response.json();
      const status = jwt.status
      course2 = status[0].course_id;

      setCoursePurchase(course2);
      console.log(coursePurchase)
    };

    course1();
  }, []);

  const gotoGetStarted = () => {
    navigate("/AcademyGetStarted");
  };
  const gotoCourses = () => {
    navigate("/AcademyCourses");
  };
  const gotoAnnouncemenet = () => {
    navigate("/AcademyAnnouncement");
  };
  const gotoVideo = () => {
    navigate("/AcademyVideos");
  };
  const gotoBlogs = () => {
    navigate("/AcademyBlogs");
  };
  const gotoDiscord = () => {
    navigate("/AcademyDiscord");
  };

  const handleLevelFilterChange = (event) => {
    setLevelFilters({
      ...levelFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilters({
      ...categoryFilters,
      [event.target.name]: event.target.checked,
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

  const courseAdd = async (course_id) => {
    const myCookie = Cookies.get("myCookie");
    const data = {
      myCookie: myCookie,
      course_id: course_id,
    };
    const courseUrl = "http://127.0.0.1:5173/courseAdd";
    const response = await fetch(courseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
  };

  const initPayment = (data, course_id) => {
    const options = {
      key: "rzp_test_hksk4ng15qBw7Q",
      amount: data.amount,
      currency: data.currency,
      course_id: course_id,
      description: "Test Transaction",
      order_id: data.order_id,
      handler: async (data) => {
        try {
          const verifyUrl = "http://127.0.0.1:5173/verify";
          const response = await fetch(verifyUrl, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const jwt = await response.json();
          alert(jwt.status);
          courseAdd(course_id);
        } catch (e) {
          console.log(e);
        }
      },
      theme: {
        color: "#04ff66",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async (val1, val2) => {
    const amount = val1;
    const course_id = val2;
    const myCookie = Cookies.get("myCookie");
    if (myCookie != undefined) {
      const data = {
        myCookie: myCookie,
        amount: amount,
        course_id: course_id,
      };
      const response = await fetch(`http://127.0.0.1:5173/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      initPayment(jwt.data, course_id);
    }
  };

  return (
    <>
      <div className="nav" ref={scrollRef}>
        <nav className="academy-nav">
          <ul className="academy-nav-ul">
            <li className="academy-nav-li" onClick={gotoGetStarted}>
              Get Started with Hackacdemy
            </li>
            <li
              className="academy-nav-li academy-nav-selected"
              onClick={gotoCourses}
            >
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

        <div className="container">
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
                    <label className="form-check-label" for="Beginner">
                      Beginner
                    </label>
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
                    <label className="form-check-label" for="Intermediate">
                      Intermediate
                    </label>
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
                    <label className="form-check-label" for="Advanced">
                      Advanced
                    </label>
                  </div>
                </div>
              </div>
              <div className="category-filter col-3">
                <h5 className="category-filter-h" for="myCheckbox">
                  Category
                </h5>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="Web"
                    id="Web"
                    checked={categoryFilters.Web}
                    onChange={handleCategoryFilterChange}
                  />
                  <label className="form-check-label" for="Web">
                    Web
                  </label>
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
                  <label className="form-check-label" for="Mobile">
                    Mobile
                  </label>
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
                  <label className="form-check-label" for="Malware">
                    Malware
                  </label>
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
                  <label className="form-check-label" for="Windows">
                    Windows
                  </label>
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
                  <label className="form-check-label" for="Exploitation">
                    Exlpoitation
                  </label>
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
                  <label className="form-check-label" for="Programming">
                    Programming
                  </label>
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
                        <p className="card-body-div2-text">
                          {course.description}
                        </p>
                        <button className="card-body-div2-level-button">
                          {" "}
                          {course.level}
                        </button>
                        <button className="card-body-div2-category-button">
                          {" "}
                          {course.category}
                        </button>
                        <p className="card-body-div2-instrutor">
                          Course instrutor : <br />
                          <img
                            src={course.avatar}
                            className="card-body-div2-avatar"
                          />
                          <p className="card-body-div2-instrutor-span">
                            {course.instrutor}
                          </p>
                        </p>
                      </div>
                      <div className="card-body-div3">
                        {coursePurchase.includes(String(course.id)) ? (
                          <div
                            className="button_ani card-div3-button1"
                            style={{ marginTop: "15rem" }}
                            onClick={() => gotoCourseVideo(course.videoLink)}
                          >
                            <button className="button2">Continue to Course</button>
                          </div>
                        ) : (
                          <center>
                            <p className="card-body-div3-price">
                              Course Price : {"$" + course.price}
                            </p>
                            <div
                              className="button_ani card-div3-button1"
                              onClick={() => goto(course.link)}
                            >
                              <button className="button2"> View More</button>
                            </div>
                            <div
                              className="button_ani card-div3-button2"
                              onClick={(event) =>
                                handlePay(course.price, course.id)
                              }
                            >
                              <button className="btn card-div3-button2-button">
                                Buy Now
                              </button>
                            </div>
                          </center>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default AcademyCourses;
