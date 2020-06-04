import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

const newsletter = () => {
  return (
    <Layout>
      <Head title="Newsletter Confirmed" desc="Thank you for subscribing to my newsletter!" />

      <section className="container mx-auto max-w-3xl text-center">
        <h1 className="text-center mt-8 sm:text-3xl sm:font-semibold mx-4 sm:mx-0 text-xl">
          Thank you!
        </h1>
        <p className="mt-6 mx-2 font-normal texl-lg sm:text-xl">
          Wow! You&apos;ve successfully signed up to my newsletter. <br />
          You&apos;ll be hearing from me soon. Take care!
        </p>
      </section>
    </Layout>
  );
};

export default newsletter;
