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

  function Show5Posts() {
    return (
      <ul className="mt-5 mx-5 sm:mx-auto sm:max-w-xl">
        <li className="my-4">
          <Link
            className="border-none whitespace-nowrap overflow-x-auto"
            to={`/blog/${edge[0].node.slug}`}
          >
            <p className="text-left sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
              {edge[0].node.publishedDate}
            </p>
            <h2 className="inline-block sm:text-lg font-light sm:hover:font-medium">
              {edge[0].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="border-none whitespace-nowrap overflow-x-auto"
            to={`/blog/${edge[1].node.slug}`}
          >
            <p className="text-left sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
              {edge[1].node.publishedDate}
            </p>
            <h2 className="inline-block sm:text-lg font-light sm:hover:font-medium">
              {edge[1].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="border-none whitespace-nowrap overflow-x-auto"
            to={`/blog/${edge[2].node.slug}`}
          >
            <p className="text-left sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
              {edge[2].node.publishedDate}
            </p>
            <h2 className="inline-block sm:text-lg font-light sm:hover:font-medium">
              {edge[2].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="border-none whitespace-nowrap overflow-x-auto"
            to={`/blog/${edge[3].node.slug}`}
          >
            <p className="text-left sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
              {edge[3].node.publishedDate}
            </p>
            <h2 className="inline-block sm:text-lg font-light sm:hover:font-medium">
              {edge[3].node.title}
            </h2>
          </Link>
          <hr className="mt-3 shadow divider" />
        </li>
        <li className="my-4">
          <Link
            className="border-none whitespace-nowrap overflow-x-auto"
            to={`/blog/${edge[4].node.slug}`}
          >
            <p className="text-left sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
              {edge[4].node.publishedDate}
            </p>
            <h2 className="inline-block sm:text-lg font-light sm:hover:font-medium">
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

      {/* SEZIONE AVATAR + BIO */}
      <section>
        <div className="flex items-start mt-8 sm:mt-16 justify-center">
          <div className="w-32 sm:w-48 md:w-56">
            <img src={profilepic} alt="profile pic" />
          </div>
        </div>
        <div className="mt-5 mx-5 sm:mx-auto text-center sm:max-w-2xl">
          <h3 className="text-base sm:text-2xl font-light">
            Hi! I love spending time developing & building things.
            <br /> I write about the technologies that inspire me.
          </h3>
        </div>
        <div className="mx-auto text-center mt-5">
          <Link to="/newsletter" className="border-none">
            <button
              className="shadow bg-red-700 
                hover:bg-red-600 focus:outline-none
                text-white py-1 sm:py-2 px-3 sm:px-4 rounded sm:font-medium tracking-wide"
              type="button"
            >
              Join my Newsletter
            </button>
          </Link>
        </div>
      </section>

      {/* PRIMA SEZIONE PER DESKTOP */}
      <section className="container mx-auto hidden sm:block mx-12">
        <div className="mt-5">
          <p
            className="text-red-600 font-semibold text-center 
            text-lg sm:text-left sm:mt-12 sm:ml-10 sm:text-xl uppercase"
          >
            Featured Articles
          </p>
          <hr className="mt-1 mx-10 shadow divider" />
        </div>

        <div className="mt-5 sm:mt-8 sm:ml-10 mx-5">
          <div className="md:flex md:justify-center">
            <Link to="/blog/ebec_2020" className="border-none w-full sm:mr-10 md:w-1/4 ">
              <img
                src={ebec}
                alt="ebec 2020 engineering competition"
                className="shadow-xl rounded card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 font-medium text-xl leading-tight mb-5">
                EBEC 2020 Engineering Competition
              </h4>
            </Link>
            <Link to="/blog/stock_price_prediction" className="border-none w-full sm:mx-0 md:w-1/4">
              <img
                src={stock}
                alt="stock price prediction bot"
                className="shadow-xl rounded card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 font-medium text-xl leading-tight mb-5">
                Stock Price Prediction Bot with LSTM RNNs
              </h4>
            </Link>
            <Link to="/blog/ml-course-coursera" className="border-none w-full sm:ml-10 md:w-1/4">
              <img
                src={machineLearning}
                alt="machine learning on Coursera"
                className="shadow-xl rounded card2"
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                }}
              />
              <h4 className="mt-5 font-medium text-xl leading-tight mb-5">
                Machine Learning @Coursera by Andrew Ng (review)
              </h4>
            </Link>
          </div>
        </div>
      </section>

      {/* PRIMA SEZIONE PER MOBILE */}
      <section className="hidden sm:hidden">
        <div className="mt-5">
          <p
            className="text-red-600 font-semibold text-center 
            text-lg sm:text-left sm:mt-12 sm:ml-10 sm:text-2xl uppercase"
          >
            Featured Articles
          </p>
          <hr className="mt-1 mx-10 divider" />
        </div>
        <div className="mt-5 sm:mt-8 sm:ml-10 mx-5">
          <div className="md:flex md:justify-center ">
            <div className="relative">
              <Link to="/blog/ebec_2020" className="border-none">
                <img
                  src={ebec}
                  alt="ebec 2020 engineering competition"
                  className="z-0 opacity-25 w-full h-48 shadow-xl rounded-lg "
                  style={{
                    boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                  }}
                />
                <h4 className="absolute inset-0 mt-20 mx-4 text-center leading-snug text-xl">
                  EBEC 2020 Engineering Competition
                </h4>
              </Link>
            </div>
            <div className="relative mt-5">
              <Link to="/blog/stock_price_prediction" className="border-none">
                <img
                  src={stock}
                  alt="stock price prediction bot"
                  className="z-0 opacity-25 w-full shadow-xl rounded-lg"
                  style={{
                    boxShadow: '0 10px 28px rgba(0,0,0,.38)'
                  }}
                />
                <h4 className="absolute inset-0 mt-20 mx-4 text-center leading-snug text-xl">
                  Stock Price Prediction Bot with LSTM RNNs
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ULTIMI ARTICOLI */}
      <section>
        <div className="mt-12 sm:mt-16 mb-8">
          <Show5Posts />
        </div>
        <div className="text-center mb-12">
          <Link to="/blog" className="border-none">
            <button
              className="fill-current rounded-sm divider uppercase text-xs font-semibold
            border-solid border-2 px-4 py-1 hover:border-gray-600 tracking-wide focus:outline-none"
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
