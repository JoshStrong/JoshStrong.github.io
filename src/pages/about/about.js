import React from "react";
import "./about.css";
import Button from "../../components/button/button";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
export default function About(props) {
  return (
    <PageTemplate headingRows={["About Me"]}>
      <div className={"about"}>
        <p>Hello! I'm Josh, a data scientist based in Manchester, UK.</p>
        <p>
          I have a great passion for all things data, statistics and computer
          science. I'm currently finishing an MSc in Data Science at UCL, and
          actively looking for opportunities in data science and machine
          learning across the UK.
        </p>
        <p>Please get in touch for a copy of my CV.</p>
        <Button label="CONTACT ME" />
      </div>
    </PageTemplate>
  );
}
