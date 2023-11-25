import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "pages/Home";
import Contact from "pages/Contact";
import NotFound from "pages/404/index";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Courses from "pages/Courses";
import Footer from "components/Footer";
import Course from "pages/Courses/Course";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <div>
      <header className="header__container">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:title" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
