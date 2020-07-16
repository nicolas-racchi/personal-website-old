import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';
import Title from '../components/Title';

const newsletter = () => {
  return (
    <Layout>
      <Head title="Newsletter Confirmed" desc="Thank you for subscribing to my newsletter!" />

      <section className="container max-w-3xl mx-auto text-center">
        <Title>Thank you!</Title>
        <p className="mx-2 mt-6 font-normal texl-lg sm:text-xl">
          Wow! You&apos;ve successfully signed up to my newsletter. <br />
          You&apos;ll be hearing from me soon. Take care!
        </p>
      </section>
    </Layout>
  );
};

export default newsletter;
