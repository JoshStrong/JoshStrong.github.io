import React, { useState, useEffect } from "react";
import "./contact.css";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import Button from "../../components/button/button";
export default function Contact(props) {
  const [contactForm, setContactForm] = useState({
    name: { input: "", isError: false, errorMsg: "" },
    email: { input: "", isError: false, errorMsg: "" },
    subject: { input: "", isError: false, errorMsg: "" },
    message: { input: "", isError: false, errorMsg: "" },
  });

  const handleInputChange = (event) => {
    let tempContactForm = { ...contactForm };
    tempContactForm[event.target.name].input = event.target.value;
    setContactForm(tempContactForm);
  };

  const removeError = (event) => {
    let tempContactForm = { ...contactForm };
    tempContactForm[event.target.name] = {
      ...tempContactForm[event.target.name],
      isError: false,
      errorMsg: "",
    };
    setContactForm(tempContactForm);
  };

  const validateForm = (event) => {
    let tempContactForm = { ...contactForm };
    console.log(tempContactForm);
    tempContactForm.name =
      tempContactForm.name.input.length === 0
        ? {
            input: tempContactForm.name.input,
            isError: true,
            errorMsg: "Please enter your name.",
          }
        : tempContactForm.name;
    tempContactForm.email =
      tempContactForm.email.input.length === 0
        ? {
            input: tempContactForm.email.input,
            isError: true,
            errorMsg: "Please enter your email.",
          }
        : tempContactForm.email;
    tempContactForm.subject =
      tempContactForm.subject.input.length === 0
        ? {
            input: tempContactForm.subject.input,
            isError: true,
            errorMsg: "Please enter a subject.",
          }
        : tempContactForm.subject;
    tempContactForm.message =
      tempContactForm.message.input.length === 0
        ? {
            input: tempContactForm.message.input,
            isError: true,
            errorMsg: "Please enter a message.",
          }
        : tempContactForm.message;
    setContactForm(tempContactForm);
  };

  return (
    <PageTemplate headingRows={["Contact Me"]}>
      <div>
        <p>
          Cillum labore ullamco nostrud aute commodo eiusmod nostrud in nisi
          eiusmod irure sit. Culpa eiusmod qui labore ea aute et id culpa.
          Cillum labore consectetur adipisicing fugiat Lorem laboris.
        </p>
        <ul className={"contactForm"}>
          <li>
            <div className={"flexContainer"}>
              <div className="half">
                <Input
                  placeholder="Name"
                  value={contactForm.name}
                  name="name"
                  removeError={removeError.bind(this)}
                  type="text"
                  onChange={handleInputChange.bind(this)}
                />
              </div>
              <div className="half">
                <Input
                  placeholder="Email"
                  value={contactForm.email}
                  name="email"
                  removeError={removeError.bind(this)}
                  type="email"
                  onChange={handleInputChange.bind(this)}
                />
              </div>
            </div>
          </li>
          <li>
            <Input
              placeholder="Subject"
              value={contactForm.subject}
              name="subject"
              removeError={removeError.bind(this)}
              type="text"
              onChange={handleInputChange.bind(this)}
            />
          </li>
          <li>
            <Textarea
              placeholder="Message"
              value={contactForm.message}
              name="message"
              removeError={removeError.bind(this)}
              onChange={handleInputChange.bind(this)}
            />
          </li>
          <li>
            <Button label="Submit" onClick={validateForm} />
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
}
