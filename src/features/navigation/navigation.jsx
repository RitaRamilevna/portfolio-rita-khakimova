import React from "react";
import {Link} from "react-scroll";
import HomeIcon from "./images/home.svg";
import ContactIcon from "./images/contact.svg";
import PortfolioIcon from "./images/portfolio.svg";
import CvIcon from "./images/cv.svg";

import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="item" to="home" spy={true} smooth={true} duration={500}>
        <div className="icon-wrapper">
          <span className="tooltip">На главную</span>
          <img src={HomeIcon} alt="HomeIcon" />
        </div>
      </Link>
      <Link
        className="item"
        to="education"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="icon-wrapper">
          <span className="tooltip">Образование</span>
          <img src={CvIcon} alt="CvIcon" />
        </div>
      </Link>
      <Link
        className="item"
        to="portfolio"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="icon-wrapper">
          <span className="tooltip">Портфолио</span>
          <img src={PortfolioIcon} alt="PortfolioIcon" />
        </div>
      </Link>
      <Link
        className="item"
        to="contacts"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="icon-wrapper">
          <span className="tooltip">Контакты</span>
          <img src={ContactIcon} alt="ContactIcon" />
        </div>
      </Link>
    </nav>
  );
};
