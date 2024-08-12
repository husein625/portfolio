import React from "react";
import gh from "../assets/icons/gh.svg";
import li from "../assets/icons/li.svg";
import mail from "../assets/icons/mail.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__content">
        <h3>
          Husein <br />
          Muftic
        </h3>
        <h6>Frontend / UI Developer</h6>
        <div className="landing__content__buttons">
          <a
            href="/CV.pdf"
            download="Husein Muftic CV.pdf"
            className="button-86"
            role="button"
          >
            Curriculum Vitae
          </a>
          <a
            href="/Sead Sabanovic Cover Letter.pdf"
            download="Sead Sabanovic Cover Letter.pdf"
            className="button-86 d-none"
            role="button"
          >
            Cover Letter
          </a>
        </div>
      </div>
      <div className="landing__socials">
        <a
          href="https://github.com/husein625"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            draggable="false"
            src={gh}
            className="landing__socials__social"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/husein-mufti%C4%87-79655815b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            draggable="false"
            src={li}
            className="landing__socials__social"
          ></img>
        </a>
        <a href="mailto:husein625@gmail.com">
          <img
            draggable="false"
            src={mail}
            className="landing__socials__social"
          ></img>
        </a>
      </div>
    </div>
  );
}
