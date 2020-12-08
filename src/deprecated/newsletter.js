import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';
import Title from '../components/Title';

const newsletter = () => {
  return (
    <Layout>
      <Head
        title="Newsletter"
        desc="Hey! Sign up to my newsletter to receive emails from me about my next write-ups and more interesting stuff!"
      />

      <section className="container max-w-3xl mx-auto text-center">
        <Title>Sign up to my newsletter</Title>
        <p className="mx-2 mt-6 font-normal md:mt-8 texl-lg sm:text-xl">
          I write about my favorite articles, tools, books, and ideas.
        </p>
        <p className="mx-2 mt-3 text-lg font-normal md:mt-5 sm:text-xl">
          What you can expect to receive in your inbox:
        </p>
        <ul className="mt-3 text-lg italic font-normal list-disc list-inside sm:text-xl">
          <li>Links to articles I find interesting</li>
          <li>A short summary of books I read</li>
          <li>Updates on projects I&apos;m developing</li>
          <li>Bad jokes</li>
        </ul>
        <div className="inline-block mt-1">
          <form
            className="text-sm"
            name="newsletter"
            method="post"
            action="/newsletter_confirm"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              className="px-3 py-2 mt-4 text-black rounded shadow appearance-none focus:outline-none"
              placeholder="Your best email"
              type="email"
              name="email"
            />
            <button
              className="inline px-5 py-2 ml-2 tracking-wide text-white bg-red-700 rounded shadow sm:uppercase hover:bg-red-600 focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
        <div className="mt-6" />
        <hr className="mx-10 shadow divider" />
        <p className="mx-2 mt-2 text-base italic font-light sm:text-lg">
          No spam. I hate spam just like you.
        </p>
      </section>
    </Layout>
  );
};

export default newsletter;
