export const rubberBand = (ref, tl, callbackFunc, callbackParams) => {
  tl.to(ref, {
    transform: "scale3d(1, 1, 1)",
    color: "#1120a5",
    duration: 0.1,
    ease: "Elastic.easeIn",
  });
  tl.to(ref, {
    transform: "scale3d(1.25, 0.75, 1)",
    duration: 0.2,
  });
  tl.to(ref, {
    transform: "scale3d(0.75, 1.25, 1)",
    duration: 0.2,
  });
  tl.to(ref, {
    transform: "scale3d(1.15, 0.85, 1)",
    color: "#181529",
    duration: 0.1,
  });
  tl.to(ref, {
    transform: "scale3d(0.95, 1.05, 1)",
    duration: 0.2,
  });
  tl.to(ref, {
    transform: "scale3d(1.05, 0.95, 1)",
    duration: 0.2,
  });
  tl.to(ref, {
    transform: "scale3d(1, 1, 1)",
    duration: 0.2,
    onComplete: callbackFunc,
    onCompleteParams: callbackParams,
  });
};
