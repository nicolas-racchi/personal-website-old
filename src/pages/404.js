import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';
import Title from '../components/Title';

import NotFoundImage from '../svg/NotFoundImage';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" desc="Oops. Page not found." />
      <div className="flex items-start mt-8 sm:mt-16 justify-center">
        <div className="w-48 sm:w-64">
          <Title>404 ...</Title>
          <NotFoundImage />
        </div>
      </div>
      <div className="text-center mt-16">
        <Link to="/">
          <button
            className="shadow bg-indigo-600
                hover:bg-indigo-500 focus:shadow-outline focus:outline-none 
                text-white py-2 px-4 rounded"
            type="button"
          >
            Go back Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
