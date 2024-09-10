import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  const [page, setPage] = useState("home");
  return (
    <main className="container">
      <Header setPage={setPage} />
      <div style={{ paddingTop: 50 }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "projects" && <Projects />}
        {page === "experience" && <Experience />}
        {page === "contact-us" && <ContactUs />}
      </div>
    </main>
  );
}

export default App;
