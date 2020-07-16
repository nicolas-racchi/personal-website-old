/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';

// Every page supports a Head component which can be used
// to specify Title and Description of the page.
// Blog articles have their own meta changed accordingly at build time.

const Head = ({ title, desc }) => {
  return (
    <Helmet title={`${title} | Nicolas Racchi`}>
      <meta name="Description" content={desc} />
    </Helmet>
  );
};

export default Head;
