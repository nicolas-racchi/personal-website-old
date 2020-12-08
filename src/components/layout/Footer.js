import React from 'react';

import EmailIcon from '../../svg/EmailIcon';

const Footer = () => (
  <footer>
    <div className="mt-20 mb-10 text-center leading-relaxed">
      <p className="text-sm font-light opacity-75">
        <span className="">© 2020 — Nicolas Racchi </span>
      </p>
      <div className="flex items-center justify-center">
        <div className="w-4 mr-1 text-red-600">
          <EmailIcon />
        </div>
        <a
          className="font-light text-sm text-red-600 border-none"
          href="mailto:nicksmavic@gmail.com"
          rel="noopener noreferrer"
        >
          nicksmavic@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
