import React from 'react';

function Title({ children }) {
  return (
    <h1 className="mx-2 mt-8 text-2xl text-center sm:text-3xl md:text-4xl sm:font-semibold">
      {children}
    </h1>
  );
}

export default Title;
