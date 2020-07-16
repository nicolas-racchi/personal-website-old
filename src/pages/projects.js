import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';
import Title from '../components/Title';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: createdDate, order: DESC }) {
        edges {
          node {
            projectName
            description
            createdDate(formatString: "MMM YYYY")
            link
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Projects" desc="Take a look at my projects!" />
      <div className="container mx-auto text-center">
        <Title>Take a look at my Projects</Title>
        <div className="mx-3 mt-4 cards">
          {data.allContentfulProject.edges.map(edge => {
            return (
              <div className="p-4 rounded shadow-lg card" key={edge.node.projectName}>
                <h4 className="mb-2 text-lg font-medium">{edge.node.projectName}</h4>
                <h4 className="text-xs font-semibold tracking-wider text-red-600 uppercase sm:text-sm">
                  {edge.node.createdDate || 'WORK IN PROGRESS'}
                </h4>
                <h4 className="mt-1 mb-2 text-sm font-light">{edge.node.description}</h4>
                <h4>
                  <Link to={edge.node.link || '/404'}>
                    <button type="button" className="text-sm sm:text-base">
                      Learn More
                    </button>
                  </Link>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
