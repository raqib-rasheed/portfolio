import React from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider
      location={location}
      mode="immediate"
      enter={{
        opacity: 0.5,
        transform: "translate3d(0,20vh,0) scale3d(1.5, 1.5, 1) rotate(0deg)",
        config: {
          mass: 2,
          tension: 240,
          friction: 60,
          clamp: true,
        },
      }}
      usual={{
        opacity: 1,
        transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)",
      }}
      leave={{
        opacity: 0,
        transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0)",
        config: {
          duration: 0,
        },
      }}
    >
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  );
};

export default Layout;
