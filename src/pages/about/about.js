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
          I have a great passion for all things data, statistics. computer
          science and technology. I hold a first-class BSc in Mathematics, and
          I've just graduated from with an MSc in Data Science from UCL.
        </p>
        <p>
          When I'm not spending time doing the above, I'm usually on a long walk
          in the hills with my three dogs: Leo, Gracie and Luka.
        </p>
        <p>
          I'm actively looking for opportunities in data science and machine
          learning across the UK
        </p>
        <p>
          Please get in touch for a copy of my CV, through the contact page or
          by sending me an email to strongjosh@gmail.com
        </p>
        <Button label="CONTACT ME" onClick={props.toContact} />
      </div>
    </PageTemplate>
  );
}
