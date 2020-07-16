import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';
import Title from '../components/Title';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Articles" desc="Welcome to my blog. Here's a list of all my articles." />

      <div>
        <Title>
          Here&apos;s a list of all my articles.
          <br />
          Subscribe to my <Link to="/newsletter">newsletter</Link> to not miss my next write-up.
        </Title>
        <ol className="mx-5 mt-10 sm:mx-auto sm:max-w-xl">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="my-4" key={edge.node.slug}>
                <Link
                  className="overflow-x-auto border-none whitespace-nowrap"
                  to={`/blog/${edge.node.slug}`}
                >
                  <p className="mr-5 text-xs font-semibold tracking-wider text-red-600 uppercase sm:inline-block">
                    {edge.node.publishedDate}
                  </p>
                  <h2 className="inline-block font-light sm:text-lg sm:hover:font-medium">
                    {edge.node.title}
                  </h2>
                </Link>
                <hr className="mt-3 shadow divider" />
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
