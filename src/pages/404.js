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
      <div className="flex items-start justify-center mt-8 sm:mt-16">
        <div className="w-48 sm:w-64">
          <Title>404 ...</Title>
          <NotFoundImage />
        </div>
      </div>
      <div className="mt-16 text-center">
        <Link to="/">
          <button
            className="px-4 py-2 text-white bg-indigo-600 rounded shadow hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
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
