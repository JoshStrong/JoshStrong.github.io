import React, { useEffect } from "react";
import gsap from "gsap/gsap-core";
import "./page.css";
import { rubberBand } from "../../util/animations";
import Particles from "react-particles-js";
export default function PageTemplate(props) {
  let isCharAnimating = [];
  for (let i = 0; i < props.headingRows.length; i++) {
    isCharAnimating[i] = [];
  }
  let charRefs = [];
  let contentRefs = [];
  const onHover = (rowIndex, charIndex) => {
    if (!isCharAnimating[rowIndex][charIndex]) {
      isCharAnimating[rowIndex][charIndex] = true;
      let tl = gsap.timeline();
      rubberBand(charRefs[rowIndex][charIndex], tl, charAnimaitonEnded, [
        rowIndex,
        charIndex,
      ]);
    }
  };
  const charAnimaitonEnded = (rowIndex, charIndex) => {
    gsap.set(charRefs[rowIndex][charIndex], { clearProps: "scale" });
    isCharAnimating[rowIndex][charIndex] = false;
  };
  useEffect(() => {
    gsap.set(contentRefs, {
      opacity: 0,
    });
    charRefs.forEach((refArray, index) => {
      gsap.set(refArray, { opacity: 0 });
      gsap.to(refArray, {
        scale: 0.0,
        opacity: 1,
        duration: 1,
        ease: "Elastic.easeOut",
        color: "#1120a5",
        stagger: {
          each: 0.1,
          from: "center",
        },
      });
      gsap.to(refArray, {
        scale: 1,
        opacity: 1,
        duration: 1,
        color: "#181529",
        ease: "Elastic.easeOut",
        stagger: {
          each: 0.1,
          from: "center",
        },
        delay: 1,
      });
      gsap.to(contentRefs, {
        opacity: 1,
        duration: 1,
        delay: 2.5,
      });
    });
  }, []);
  return (
    <div className="page">
      <Particles
        canvasClassName="particles"
        height="100%"
        width="100%"
        params={{
          particles: {
            number: {
              value: 50,
            },
            opacity: {
              value: 1,
              random: true,
            },
            size: {
              value: 5,
            },
            color: {
              value: "#0E1A88",
            },
            links: {
              color: "#181529",
              width: 0,
            },
            move: {
              speed: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="page__wrapper">
        <div className="page__heading">
          <h1 className="page__h1">
            {props.headingRows.map((row, rowIndex) => {
              charRefs.push([]);
              return (
                <React.Fragment key={"row" + rowIndex}>
                  {[...row].map((char, charIndex) => {
                    return char === " " ? (
                      " "
                    ) : (
                      <span
                        onMouseEnter={() => onHover(rowIndex, charIndex)}
                        className="page__h1Char"
                        ref={(el) => (charRefs[rowIndex][charIndex] = el)}
                        key={"char" + charIndex + rowIndex}
                      >
                        {char}
                      </span>
                    );
                  })}
                  <br />
                </React.Fragment>
              );
            })}
          </h1>
        </div>
        <h2 className="page__h2" ref={(el) => contentRefs.push(el)}>
          {props.subHeading}
        </h2>
        <div className="page__content" ref={(el) => contentRefs.push(el)}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
