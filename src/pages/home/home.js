import React from "react";
import "./home.css";
import Button from "../../components/button/button";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
export default function Home(props) {
  return (
    <PageTemplate
      headingRows={["Hello,", "I'm Josh", "Data Scientist."]}
      subHeading="UCL MSc Data Science student"
    >
      <Button label="CONTACT ME" />
    </PageTemplate>
  );
}
