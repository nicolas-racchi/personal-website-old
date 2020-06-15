import React from 'react';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';

// This component is needed for page animations.
// To change the layout, head in /components/layout
// To modify animations instead, edit this file.

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider
      location={location}
      mode="successive"
      enter={{
        opacity: 0,
        transform: 'translate3d(0,-10vh,0) scale3d(1, 1, 1) rotate(0deg)',
        config: {
          mass: 1,
          tension: 210,
          friction: 20,
          clamp: true
        }
      }}
      usual={{
        opacity: 1,
        transform: 'translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)'
      }}
      leave={{
        opacity: 0,
        transform: 'translate3d(0vh,0vh,0) scale3d(2, 2, 1)',
        config: {
          duration: 250
        }
      }}
    >
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  );
};

export default Layout;
