import React, { useState } from "react";
import "./contact.css";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function Contact(props) {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    console.log("adawda");
    showLoading();
    try {
      emailjs
        .send(
          "service_byshotq",
          "template_8pm6kf7",
          data,
          "user_VDt0Pqn9PWLIXLzZRmO4x"
        )
        .then(
          (result) => {
            setIsSuccess(true);
          },
          (error) => {
            console.log(error);
            setIsError(true);
          }
        );
    } catch {
      setIsError(true);
    }
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  return (
    <div className="Contact">
      {isLoading ? (
        <div className="Contact__LoadingContainer">
          {/* <AnimatedEnvelope isSuccess={isSuccess} isError={isError} /> */}
          <div className="Contact__LoadingTextContainer">
            {isError ? (
              <>
                <h2>Oops.. Something went wrong..</h2>
                <h3>Please try again, or email me at strongjosh@gmail.com</h3>
              </>
            ) : isSuccess ? (
              <>
                <h2 style={{ color: "#4CA450" }}>
                  <span style={{ opacity: "0.6" }}>Signed.</span>{" "}
                  <span style={{ opacity: "0.8" }}>Sealed.</span>{" "}
                  <span style={{ opacity: "1" }}>Delivered.</span>
                </h2>
                <h3>
                  Thank you for your message. I'll get back to you shortly.
                </h3>
              </>
            ) : (
              <>
                <h2>Sending Message...</h2>
                <h3>Just a second</h3>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="Contact__FormContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Me</h2>
            <div className="Contact__FormSplit">
              <Input
                placeholder="Name"
                name="name"
                register={register({
                  required: "Required",
                })}
                error={errors.name}
              ></Input>
              <Input
                placeholder="Email"
                name="email"
                register={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email}
              ></Input>
            </div>
            <Input
              placeholder="Subject"
              name="subject"
              register={register({
                required: "Required",
              })}
              error={errors.subject}
            ></Input>
            <Textarea
              placeholder="Message"
              name="message"
              register={register({
                required: "Required",
              })}
              error={errors.message}
            />
            <div className="Contact__ButtonContainer">
              <button>Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
