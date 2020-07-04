import React from "react";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
import Button from "../../components/button/button";

export default function Portfolio(props) {
  return (
    <PageTemplate headingRows={["Portfolio"]} subHeading="Some of my work">
      <Button label="project1"></Button>
      <Button label="project2"></Button>
      <Button label="project3"></Button>
      <Button label="project4"></Button>
    </PageTemplate>
  );
}
