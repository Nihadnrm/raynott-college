import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Faculty from './components/Faculty'
import Events from './components/Events'
import Contact from './components/Contact'
import AddCourse from './components/admin/AddCourse'
import AddEvent from './components/admin/AddEvent'
import AddFaculty from './components/admin/AddFaculty'
import ViewMessages from './components/admin/ViewMessages'
import AdminLayout from './components/admin/AdminLayout'
import ListofFaculty from './components/admin/ListofFaculty'
import ListofEvent from './components/admin/ListofEvent'
import ScrollToTop from './components/ScrollToTop'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const location = useLocation();

  // HIDE NAVBAR ON ALL ADMIN PAGES
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/addcourse") ||
    location.pathname.startsWith("/addevent") ||
    location.pathname.startsWith("/addfaculty") ||
    location.pathname.startsWith("/viewmessages") ||
    location.pathname.startsWith("/facultylist") ||
    location.pathname.startsWith("/eventlist");

 

  return (
    <>
      <ScrollToTop/>
      {!hideNavbar && <Navbar />}

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/addfaculty" element={<AddFaculty />} />
        <Route path="/viewmessages" element={<ViewMessages />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/facultylist" element={<ListofFaculty />} />
        <Route path="/eventlist" element={<ListofEvent />} />
      </Routes>
      {!hideNavbar && <Footer/>}

    </>
  );
}

export default App;
