import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import ebec from '../img/ebec.jpeg';
import stock from '../img/stock.jpeg';
import profilepic from '../img/profilepic.png';
import machineLearning from '../img/machine-learning.jpg';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM DD")
          }
        }
      }
    }
  `);

  const edge = data.allContentfulBlogPost.edges;

  // Shows the last 5 blog posts on the home page:
  function Show5Posts() {
    return (
      <ul className="mx-5 mt-5 sm:mx-auto sm:max-w-xl">
        <li className="my-4">
          <Link
            className="overflow-x-auto border-none whitespace-nowrap"
            to={`/blog/${edge[0].node.slug}`}
          >
            <p className="mr-5 text-xs font-semibold tracking-wider text-left text-red-600 uppercase sm:inline-block">
              {edge[0].node.publishedDate}
            </p>
            <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
              {edge[0].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="overflow-x-auto border-none whitespace-nowrap"
            to={`/blog/${edge[1].node.slug}`}
          >
            <p className="mr-5 text-xs font-semibold tracking-wider text-left text-red-600 uppercase sm:inline-block">
              {edge[1].node.publishedDate}
            </p>
            <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
              {edge[1].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="overflow-x-auto border-none whitespace-nowrap"
            to={`/blog/${edge[2].node.slug}`}
          >
            <p className="mr-5 text-xs font-semibold tracking-wider text-left text-red-600 uppercase sm:inline-block">
              {edge[2].node.publishedDate}
            </p>
            <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
              {edge[2].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="overflow-x-auto border-none whitespace-nowrap"
            to={`/blog/${edge[3].node.slug}`}
          >
            <p className="mr-5 text-xs font-semibold tracking-wider text-left text-red-600 uppercase sm:inline-block">
              {edge[3].node.publishedDate}
            </p>
            <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
              {edge[3].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="overflow-x-auto border-none whitespace-nowrap"
            to={`/blog/${edge[4].node.slug}`}
          >
            <p className="mr-5 text-xs font-semibold tracking-wider text-left text-red-600 uppercase sm:inline-block">
              {edge[4].node.publishedDate}
            </p>
            <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
              {edge[4].node.title}
            </h2>
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <Layout>
      <Head
        title="Home"
        desc="Hi! I love spending time developing & building things. One
            day, I want to build robots that learn."
      />

      {/* AVATAR SECTION + BIO */}
      <section>
        <div className="flex items-start justify-center mt-8 sm:mt-16">
          <div className="w-32 sm:w-48 md:w-56">
            <img src={profilepic} alt="profile pic" />
          </div>
        </div>
        <div className="mx-5 mt-5 text-center sm:mx-auto sm:max-w-2xl">
          <h3 className="text-base font-light sm:text-2xl">
            Hi! I love spending time developing & building things.
            <br /> I write about the technologies that inspire me.
          </h3>
        </div>
        {/* <div className="mx-auto mt-5 text-center">
          <Link to="/newsletter" className="border-none">
            <button
              className="px-3 py-1 tracking-wide text-white bg-red-700 rounded shadow hover:bg-red-600 focus:outline-none sm:py-2 sm:px-4 sm:font-medium"
              type="button"
            >
              Join my Newsletter
            </button>
          </Link>
        </div> */}
      </section>

      {/* FIRST SECTION - DESKTOP */}
      <section className="container hidden mx-12 mx-auto sm:block">
        <div className="mt-5">
          <p className="text-lg font-semibold text-center text-red-600 uppercase sm:text-left sm:mt-12 sm:ml-10 sm:text-xl">
            Featured Articles
          </p>
          <hr className="mx-10 mt-1 shadow divider" />
        </div>

        <div className="mx-5 mt-5 sm:mt-8 sm:ml-10">
          <div className="md:flex md:justify-center">
            <Link to="/blog/ebec_2020" className="w-full border-none sm:mr-10 md:w-1/4 ">
              <img
                src={ebec}
                alt="ebec 2020 engineering competition"
                className="rounded shadow-xl card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 mb-5 text-xl font-medium leading-tight">
                EBEC 2020 Engineering Competition
              </h4>
            </Link>
            <Link to="/blog/stock_price_prediction" className="w-full border-none sm:mx-0 md:w-1/4">
              <img
                src={stock}
                alt="stock price prediction bot"
                className="rounded shadow-xl card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 mb-5 text-xl font-medium leading-tight">
                Stock Price Prediction Bot with LSTM RNNs
              </h4>
            </Link>
            <Link to="/blog/ml-course-coursera" className="w-full border-none sm:ml-10 md:w-1/4">
              <img
                src={machineLearning}
                alt="machine learning on Coursera"
                className="rounded shadow-xl card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 mb-5 text-xl font-medium leading-tight">
                Machine Learning @Coursera by Andrew Ng (review)
              </h4>
            </Link>
          </div>
        </div>
      </section>

      {/* FIRST SECTION - MOBILE */}
      <section className="hidden sm:hidden">
        <div className="mt-5">
          <p className="text-lg font-semibold text-center text-red-600 uppercase sm:text-left sm:mt-12 sm:ml-10 sm:text-2xl">
            Featured Articles
          </p>
          <hr className="mx-10 mt-1 divider" />
        </div>
        <div className="mx-5 mt-5 sm:mt-8 sm:ml-10">
          <div className="md:flex md:justify-center ">
            <div className="relative">
              <Link to="/blog/ebec_2020" className="border-none">
                <img
                  src={ebec}
                  alt="ebec 2020 engineering competition"
                  className="z-0 w-full h-48 rounded-lg shadow-xl opacity-25 "
                  style={{
                    boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                  }}
                />
                <h4 className="absolute inset-0 mx-4 mt-20 text-xl leading-snug text-center">
                  EBEC 2020 Engineering Competition
                </h4>
              </Link>
            </div>
            <div className="relative mt-5">
              <Link to="/blog/stock_price_prediction" className="border-none">
                <img
                  src={stock}
                  alt="stock price prediction bot"
                  className="z-0 w-full rounded-lg shadow-xl opacity-25"
                  style={{
                    boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                  }}
                />
                <h4 className="absolute inset-0 mx-4 mt-20 text-xl leading-snug text-center">
                  Stock Price Prediction Bot with LSTM RNNs
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LAST 5 ARTICLES */}
      <section>
        <div className="mt-12 mb-8 sm:mt-16">
          <Show5Posts />
        </div>
        <div className="mb-12 text-center">
          <Link to="/blog" className="border-none">
            <button
              className="px-4 py-1 text-xs font-semibold tracking-wide uppercase border-2 border-solid rounded-sm fill-current divider hover:border-gray-600 focus:outline-none"
              type="button"
            >
              View More
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
