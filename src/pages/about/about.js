import React from "react";
import "./about.css";
import Button from "../../components/button/button";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
export default function About(props) {
  return (
    <PageTemplate headingRows={["About Me"]}>
      <div className={"about"}>
        <p>
          I'm currently completing an MSc in Data Science at UCL, and looking
          for opportunities in data science and machine learning across England.
        </p>
        <Button label="View Resumé" />
      </div>
    </PageTemplate>
  );
}
