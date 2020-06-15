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

      <section className="container mx-auto max-w-3xl text-center">
        <Title>Sign up to my newsletter</Title>
        <p className="mt-6 md:mt-8 mx-2 font-normal texl-lg sm:text-xl">
          I write about my favorite articles, tools, books, and ideas.
        </p>
        <p className="mt-3 md:mt-5 mx-2 font-normal text-lg sm:text-xl">
          What you can expect to receive in your inbox:
        </p>
        <ul className="mt-3 italic list-disc font-normal text-lg list-inside sm:text-xl">
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
              className="shadow mt-4 appearance-none 
               rounded py-2 px-3 text-black focus:outline-none"
              placeholder="Your best email"
              type="email"
              name="email"
            />
            <button
              className="inline ml-2 shadow bg-red-700 sm:uppercase
                hover:bg-red-600 focus:shadow-outline focus:outline-none 
                text-white py-2 px-5 rounded tracking-wide"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
        <div className="mt-6" />
        <hr className="mx-10 shadow divider" />
        <p className="mt-2 mx-2 font-light text-base sm:text-lg italic">
          No spam. I hate spam just like you.
        </p>
      </section>
    </Layout>
  );
};

export default newsletter;
