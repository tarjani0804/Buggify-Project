import React, { useState } from 'react';



import Navbar from './component/Navbar';
import NoNavbar from './component/NoNavbar';
import Footer from './component/Footer';
import NoFooter from './component/NoFooter';


import Home from './component/Home/Home';
import WhyBuggify from './component/Home/WhyBuggify';

import Company from './component/Company/Company';
import ExploreProgram from './component/Company/ExploreProgram';
import RedTeam_Agreement from './component/Company/RedTeam_Agreement';
import BugBounty_Agreement from './component/Company/BugBounty_Agreement';


import Researcher from './component/Researcher/Researcher';



import Program from './component/Program/Program';
import InnerProgram from './component/Program/Inner_Program';
import ProgramLeaderBoard from './component/Program/ProgramLeaderBoard';
import SubmitReport from './component/Program/SubmitReport';

import AcademyGetStarted from './component/academy/AcademyGetStarted';

import AcademyCourses from './component/academy/AcademyCourses';
import PentestingWithPython from './component/Academy-Courses/PentestingWithPython';
import BashWithBeginner from './component/Academy-Courses/BashWithBeginner';
import WebApplicationPentesting from './component/Academy-Courses/WebApplicationPentesting';
import OffensiveRedTeaming from './component/Academy-Courses/OffensiveRedTeaming';
import MalwareAalysis from './component/Academy-Courses/MalwareAnalysis';
import ActiveDirectoryExploitation from './component/Academy-Courses/ActiveDirectoryExploitation';
import MobileAppPentesting from './component/Academy-Courses/MobileAppPentesting';
import ApiPentesting from './component/Academy-Courses/ApiPentesting';

import AcademyVideos from './component/academy/AcademyVideos';
import TestCourse from './component/TestCourse';


import AcademyAnnouncement from './component/academy/AcademyAnnouncement';


import AcademyBlogs from './component/academy/AcademyBlogs';
import ReportBlogs1 from './component/Blog-Descprition/Ukrainian-Blog';
import ReportBlogs4 from './component/Blog-Descprition/GlamblingIndustry-Blog';
import ReportBlogs2 from './component/Blog-Descprition/CiscoVulernability-Blog';
import ReportBlogs3 from './component/Blog-Descprition/Atlassian-Blog';


import AcademyDiscord from './component/academy/AcademyDiscord';


import Login from './component/Login';
import Signup from './component/Signup';
import Forgot from './component/Forgot';
import OTP from './component/OTP';
import SetNewPassword from './component/SetNewPassword';




import BussinessProfile from './component/Dashboard/BusinessProfile';
import ScopeSetting from './component/Dashboard/ScopeSetting';
import RewardUpdate from './component/Dashboard/RewardUpdate';
import BugReport from './component/Dashboard/BugReport';
import ReportInfoUpdate from './component/Dashboard/ReportInfoUpdate';
import ReportInfo from './component/Dashboard/ReportInfo';
import Retesting from './component/Dashboard/Retesting';
import BountyPayment from './component/Dashboard/BountyPayment';
import PreviousFinding from './component/Dashboard/PreviousFinding';
import Dashboardsetting from './component/Dashboard/DashboardSetting'
import FAQs from './component/Dashboard/FAQs';

import ResearcherProfile from './component/Researcher-Dashboard/ResearcherProfile';
import BountyHistory from './component/Researcher-Dashboard/BountyHistory';
import ResearcherFAQs from './component/Researcher-Dashboard/ResearcherFaqs';
import ResearcherSettings from './component/Researcher-Dashboard/ResearcherSettings';
import ResearcherNotification from './component/Researcher-Dashboard/Notification';
import BookmarkedProgram from './component/Researcher-Dashboard/BookmarkedProgram';
import TrackReports from './component/Researcher-Dashboard/TrackReport';
import ResearcherReportInfo from './component/Researcher-Dashboard/ResearcherReportInfo';


import PaymentClearance from './component/Admin-Panel/Payment Clearance';
import CertificationInfo from './component/Admin-Panel/CertificationInfo';
import ExamSchedule from './component/Admin-Panel/ExamSchedule';
import ContactNotification from './component/Admin-Panel/ContactNotification';
import AdminDashboard from './component/Admin-Panel/AdminDashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState("");

  function handleLogin(username) {
    setUsername(username);
  }

  return (
    <>

      <Router>


        <Routes>

          <Route path='/' element={
            <>

              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path='/company' element={
            <>
              <Navbar />
              <Company />
              <Footer />
            </>
          } />
          <Route path='/researcher' element={
            <>
              <Navbar />
              <Researcher />
              <Footer />
            </>
          } />
          <Route path='/program' element={
            <>
              <Navbar />
              <Program />
              <Footer />
            </>
          } />
          <Route path='/program-submitReport' element={
            <>
              <Navbar />
              <SubmitReport />
              <Footer />
            </>
          } />

          <Route path='/inner-program' element={
            <>
              <Navbar />
              <InnerProgram />
              <Footer />
            </>
          } />
          <Route path='/programLeaderBoard' element={
            <>
              <Navbar />
              <ProgramLeaderBoard />
              <Footer />
            </>
          } />
          <Route path='/WhyBuggify' element={
            <>
              <Navbar />
              <WhyBuggify />
              <Footer />
            </>
          } />

          <Route path='/Login' element={
            <>
              <NoNavbar />
              <Login onLogin={handleLogin} />
              <NoFooter />
            </>
          } />
          <Route path='/Forgot' element={
            <>
              <NoNavbar />
              <Forgot />
              <NoFooter />
            </>
          } />
          <Route path='/confirm_otp' element={
            <>
              <NoNavbar />
              <OTP />
              <NoFooter />
            </>
          } />
          <Route path='/newPassword' element={
            <>
              <NoNavbar />
              <SetNewPassword />
              <NoFooter />
            </>
          } />
          <Route path='/Signup' element={
            <>
              <NoNavbar />
              <Signup />
              <NoFooter />
            </>
          } />
          <Route path='/ExploreProgram' element={
            <>
              <Navbar />
              <ExploreProgram />
              <Footer />
            </>
          } />
          <Route path='/BashWithBeginner' element={
            <>
              <Navbar />
              <BashWithBeginner />
              <Footer />
            </>
          } />
          <Route path='/WebApplicationPentesting' element={
            <>
              <Navbar />
              <WebApplicationPentesting />
              <Footer />
            </>
          } />
          <Route path='/OffensiveRedTeaming' element={
            <>
              <Navbar />
              <OffensiveRedTeaming />
              <Footer />
            </>
          } />
          <Route path='/MalwareAnalysis' element={
            <>
              <Navbar />
              <MalwareAalysis />
              <Footer />
            </>
          } />
          <Route path='/ActiveDirectoryExploitation' element={
            <>
              <Navbar />
              <ActiveDirectoryExploitation />
              <Footer />
            </>
          } />
          <Route path='/MobileAppPentesting' element={
            <>
              <Navbar />
              <MobileAppPentesting />
              <Footer />
            </>
          } />
          <Route path='/ApiPentesting' element={
            <>
              <Navbar />
              <ApiPentesting />
              <Footer />
            </>
          } />
          <Route path='/RedTeam_Agreement' element={
            <>
              <Navbar />
              <RedTeam_Agreement />
              <Footer />
            </>
          } />
          <Route path='/BugBounty_Agreement' element={
            <>
              <Navbar />
              <BugBounty_Agreement />
              <Footer />
            </>
          } />

          <Route path='/AcademyGetStarted' element={
            <>
              <Navbar />
              <AcademyGetStarted />
              <Footer />
            </>
          } />

          <Route path='/academyCourses' element={
            <>
              <Navbar />
              <AcademyCourses />
              <Footer />
            </>
          } />
          <Route path='/academyAnnouncement' element={
            <>
              <Navbar />
              <AcademyAnnouncement />
              <Footer />
            </>
          } />
          <Route path='/academyVideos' element={
            <>
              <Navbar />
              <AcademyVideos />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs' element={
            <>
              <Navbar />
              <AcademyBlogs />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs-Blog1' element={
            <>
              <Navbar />
              <ReportBlogs1 />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs-Blog2' element={
            <>
              <Navbar />
              <ReportBlogs2 />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs-Blog3' element={
            <>
              <Navbar />
              <ReportBlogs3 />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs-Blog4' element={
            <>
              <Navbar />
              <ReportBlogs4 />
              <Footer />
            </>
          } />
          <Route path='/academyDiscord' element={
            <>
              <Navbar />
              <AcademyDiscord />
              <Footer />
            </>
          } />


          <Route path='/TestCourse' element={
            <>
              <Navbar />
              <TestCourse />
              <Footer />
            </>
          } />
          <Route path='/pentestingWithPython' element={
            <>
              <Navbar />
              <PentestingWithPython />
              <Footer />
            </>
          } />
          <Route path='/businessProfile' element={
            <>
              <NoNavbar />
              <BussinessProfile />
              <NoFooter />
            </>
          } />
          <Route path='/scopeSetting' element={
            <>
              <NoNavbar />
              <ScopeSetting />
              <NoFooter />
            </>
          } />
          <Route path='/bugReport' element={
            <>
              <NoNavbar />
              <BugReport />
              <NoFooter />
            </>
          } />
          <Route path='/reportInfoUpdate' element={
            <>
              <NoNavbar />
              <ReportInfoUpdate />
              <NoFooter />
            </>
          } />
          <Route path='/reportInfo' element={
            <>
              <NoNavbar />
              <ReportInfo />
              <NoFooter />
            </>
          } />
          <Route path='/rewardUpdate' element={
            <>
              <NoNavbar />
              <RewardUpdate />
              <NoFooter />
            </>
          } />
          <Route path='/retesting' element={
            <>
              <NoNavbar />
              <Retesting />
              <NoFooter />
            </>
          } />
          <Route path='/bountyPayment' element={
            <>
              <NoNavbar />
              <BountyPayment />
              <NoFooter />
            </>
          } />
          <Route path='/previousFinding' element={
            <>
              <NoNavbar />
              <PreviousFinding />
              <NoFooter />
            </>
          } />
          <Route path='/dashboardSetting' element={
            <>
              <NoNavbar />
              <Dashboardsetting />
              <NoFooter />
            </>
          } />
          <Route path='/FAQs' element={
            <>
              <NoNavbar />
              <FAQs />
              <NoFooter />
            </>
          } />
          <Route path='/researcherProfile' element={
            <>
              <NoNavbar />
              <ResearcherProfile />
              <NoFooter />
            </>
          } />
          <Route path='/track-report' element={
            <>
              <NoNavbar />
              <TrackReports />
              <NoFooter />
            </>
          } />
          <Route path='/researcher-ReportInfo' element={
            <>
              <NoNavbar />
              <ResearcherReportInfo />
              <NoFooter />
            </>
          } />
          <Route path='/bounty-history' element={
            <>
              <NoNavbar />
              <BountyHistory />
              <NoFooter />
            </>
          } />
          <Route path='/bookmarked-program' element={
            <>
              <NoNavbar />
              <BookmarkedProgram />
              <NoFooter />
            </>
          } />
          <Route path='/dashboard-notification' element={
            <>
              <NoNavbar />
              <ResearcherNotification />
              <NoFooter />
            </>
          } />
          <Route path='/dashboard-settings' element={
            <>
              <NoNavbar />
              <ResearcherSettings />
              <NoFooter />
            </>
          } />
          <Route path='/researcherFAQs' element={
            <>
              <NoNavbar />
              <ResearcherFAQs />
              <NoFooter />
            </>
          } />
          <Route path='/Admin-Dashboard' element={
            <>
              <NoNavbar />
              <AdminDashboard />
              <NoFooter />
            </>
          } />
          <Route path='/PaymentClearance' element={
            <>
              <NoNavbar />
              <PaymentClearance />
              <NoFooter />
            </>
          } />
          <Route path='/ContactNotification' element={
            <>
              <NoNavbar />
              <ContactNotification />
              <NoFooter />
            </>
          } />
          <Route path='/CertificateInfo' element={
            <>
              <NoNavbar />
              <CertificationInfo />
              <NoFooter />
            </>
          } />
          <Route path='/ExamSchedule' element={
            <>
              <NoNavbar />
              <ExamSchedule />
              <NoFooter />
            </>
          } />

        </Routes>

      </Router>

    </>
  );
}

export default App;
