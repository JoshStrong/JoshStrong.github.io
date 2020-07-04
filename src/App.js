import React, { useState } from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Experience from "./pages/experience/experience";
import Portfolio from "./pages/portfolio/portfolio";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import { ReactComponent as HomeSvg } from "./assets/svg/home.svg";
import { ReactComponent as UserSvg } from "./assets/svg/user.svg";
import { ReactComponent as KeyboardSvg } from "./assets/svg/keyboard.svg";
import { ReactComponent as ScreenSvg } from "./assets/svg/screen.svg";
import { ReactComponent as PhoneSvg } from "./assets/svg/phone.svg";
function App() {
  const pages = [
    { name: "Home", comp: <Home />, icon: <HomeSvg /> },
    { name: "About", comp: <About />, icon: <UserSvg /> },
    { name: "Portfolio", comp: <Portfolio />, icon: <ScreenSvg /> },
    { name: "Contact", comp: <Contact />, icon: <PhoneSvg /> },
  ];
  const completeCall = (target) => {
    gsap.set(target, { clearProps: "x, position" });
  };
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <NavBar
        pages={pages}
        changePage={setActiveIndex}
        activeIndex={activeIndex}
      />
      {pages.map((page, index) => {
        return (
          <Transition
            key={index}
            in={activeIndex === index}
            timeout={2000}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={(node) => {
              gsap.set(node, { clearProps: "all" });
              gsap.to(node, { zIndex: 1 });
              gsap.from(node, {
                x: "-100%",
                duration: 0.5,
                delay: 0.5,
                onComplete: completeCall,
                onCompleteParams: [node],
              });
            }}
            onExit={(node) => {
              gsap.set(node, { clearProps: "all" });
              gsap.to(node, {
                duration: 0.5,
                scale: 0.9,
                opacity: 0.8,
                zIndex: 0,
                transformOrigin: "50% 50%",
              });
            }}
          >
            {page.comp}
          </Transition>
        );
      })}
    </div>
  );
}

export default App;
