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
      <div className="text-center container mx-auto">
        <Title>Take a look at my Projects</Title>
        <div className="cards mx-3 mt-4">
          {data.allContentfulProject.edges.map(edge => {
            return (
              <div className="card rounded p-4 shadow-lg" key={edge.node.projectName}>
                <h4 className="font-medium text-lg mb-2">{edge.node.projectName}</h4>
                <h4 className="uppercase text-red-600 text-xs sm:text-sm font-semibold tracking-wider">
                  {edge.node.createdDate || 'WORK IN PROGRESS'}
                </h4>
                <h4 className="mt-1 mb-2 font-light text-sm">{edge.node.description}</h4>
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
