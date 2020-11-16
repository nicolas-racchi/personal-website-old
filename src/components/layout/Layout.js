import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Spinner from './Spinner';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <React.Suspense fallback={Spinner}>
        <main>{children}</main>
        <Footer />
      </React.Suspense>
    </>
  );
};

export default Layout;
