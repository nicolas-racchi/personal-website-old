import React from 'react';

function Title({ children }) {
  return (
    <h1 className="text-center mt-8 sm:text-3xl md:text-4xl sm:font-semibold mx-2 text-2xl">
      {children}
    </h1>
  );
}

export default Title;
