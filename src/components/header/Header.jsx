import { useState } from "react";
import "./header.css";

export default function Header({ setPage }) {
  const [showModal, setShowModal] = useState(false);

  const handleSetPage = (pageName) => {
    setPage(pageName);
  };
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setShowModal(true)}
      />
      <nav>
        <menu className="flex">
          <li>
            <a onClick={() => handleSetPage("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => handleSetPage("about")}>About</a>
          </li>
          <li>
            <a onClick={() => handleSetPage("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleSetPage("experience")}>Experience</a>
          </li>
          <li>
            <a onClick={() => handleSetPage("contact-us")}>Contact us</a>
          </li>
        </menu>
      </nav>

      {showModal && (
        <div className="fixed">
          <menu className="modal">
            <li>
              <button
                className="icon-clear"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a
                onClick={() => {
                  handleSetPage("home");
                  setShowModal(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleSetPage("about");
                  setShowModal(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleSetPage("projects");
                  setShowModal(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleSetPage("experience");
                  setShowModal(false);
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleSetPage("contact-us");
                  setShowModal(false);
                }}
              >
                Contact us
              </a>
            </li>
          </menu>
        </div>
      )}
    </header>
  );
}
