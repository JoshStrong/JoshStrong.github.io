import React from "react";
import "./navBar.css";
import { ReactComponent as KaggleSvg } from "../../assets/svg/kaggle-icon.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/svg/linkedin.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";

export default function NavBar(props) {
  return (
    <div className="navBar">
      <div className="logo">
        J<span>S</span>
      </div>
      <ul className="navBar__nav">
        {props.pages.map((page, index) => {
          return (
            <li
              onClick={() => props.changePage(index)}
              key={page.name + "NavMenuItem"}
            >
              <span
                className={
                  props.activeIndex === index
                    ? "navBar__navItem navBar__navItem--active"
                    : "navBar__navItem"
                }
              >
                {page.icon}
                <h3>{page.name}</h3>
              </span>
            </li>
          );
        })}
      </ul>
      <ul className={"socialBar"}>
        <li>
          <a
            className={"navBar__socialItem"}
            href="https://www.kaggle.com/joshstrong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KaggleSvg />
          </a>
        </li>
        <li>
          <a
            className={"navBar__socialItem"}
            href="https://www.linkedin.com/in/josh-strong-454465186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSvg />
          </a>
        </li>

        <li>
          <a
            className={"navBar__socialItem"}
            href="https://github.com/JoshStrong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSvg />
          </a>
        </li>
      </ul>
    </div>
  );
}
