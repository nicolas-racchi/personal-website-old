import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';
import { CopyBlock, dracula } from 'react-code-blocks';
import { Disqus } from 'gatsby-plugin-disqus';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import '../css/blogPost.css';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMM DD, Y")
      body {
        json
      }
    }
  }
`;

// Custom code highlighting
const Code = ({ children }) => {
  if (children.indexOf('•') !== -1) {
    const text = children.split('•');
    const language = text[0];
    const code = text[1];

    // Custom language highlighting
    return (
      <div className="lg:max-w-3xl sm:max-w-xl mx-auto">
        <CopyBlock
          language={language}
          text={code}
          theme={dracula}
          showLineNumbers={false}
          wrapLines={false}
          codeBlock
        />
      </div>
    );
  }

  // default code syntax: bash shell
  return (
    <div className="lg:max-w-3xl sm:max-w-xl mx-auto">
      <CopyBlock
        language="bash"
        text={children}
        theme={dracula}
        showLineNumbers={false}
        wrapLines={false}
        codeBlock
      />
    </div>
  );
};

// Custom quote styling
const Quote = ({ children }) => <p className="custom-quote">{children}</p>;

const Blog = props => {
  const { data } = props;
  const { title, publishedDate, body, slug } = data.contentfulBlogPost;

  const disqusConfig = () => ({
    identifier: slug,
    title
  });

  const options = {
    renderMark: {
      [MARKS.CODE]: code => <Code>{code}</Code>
    },
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US'];
        const { url } = node.data.target.fields.file['en-US'];
        return (
          <div className="lg:max-w-3xl sm:max-w-xl mx-auto">
            <img className="rounded" alt={alt} src={url} />
          </div>
        );
      },
      [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>
    }
  };

  const getReadingTime = () => {
    const doc = props.data.contentfulBlogPost.body.json;
    const text = documentToPlainTextString(doc);
    const result = readingTime(text);
    return result;
  };

  return (
    <Layout>
      <Head title={title} />
      {/* Note: the default meta description for blog posts is set to the first 3-4 lines of the article.
      add a "desc" field to the Head element just like every other page to customize it. */}

      <div className="lg:max-w-6xl mx-auto mt-6 sm:mt-10">
        <div className="lg:mx-16 md:mx-12 sm:mx-8 mx-3">
          <p className="text-center uppercase text-red-600 text-sm font-bold tracking-widest">
            {publishedDate} – {getReadingTime().text}
          </p>
          <div className="flex text-center justify-center items-start">
            <h1 className="text-2xl font-bold mb-6 md:mb-10 md:text-5xl max-w-3xl custom-title">
              {title}
            </h1>
          </div>

          <div className="blogpost text-base sm:text-lg lg:text-xl font-normal sm:font-light">
            {documentToReactComponents(body.json, options)}
          </div>

          {/* Newsletter subscription form - adjust top border radius to keep */}
          {/* <div className="bg-gray-100 p-4 rounded-t-lg mb-1 mt-10 sm:mx-16 shadow">
            <div className="mx-4 flex justify-between items-center ">
              <p className="text-sm sm:text-xl text-gray-700 italic">
                Subcribe to my <span className="underline">awesome</span> tech newsletter
              </p>

              <a
                href="/newsletter"
                className="bg-yellow-400 px-4 sm:px-10 py-1 text-black rounded-full 
                    ml-4 shadow text-lg sm:text-xl focus:outline-none animate-scale border-none"
              >
                Join
              </a>
            </div>
          </div> */}

          {/* if adding newsletter button, change rounded-lg to rounded-b-lg */}
          <div className="bg-gray-100 p-4 rounded-lg mb-10 sm:mx-16 shadow">
            <div className="mx-4 flex justify-between items-center ">
              <p className="text-sm sm:text-xl text-gray-700 italic">
                Share this article on <span className="underline">Twitter</span> to help others see
                it!
              </p>

              <a
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20post%20by%20@NicolasRacchi&url=https://www.nicolasracchi.com/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 px-4 sm:px-10 py-1 text-black rounded-full 
                    ml-4 shadow text-lg sm:text-xl focus:outline-none animate-scale border-none"
              >
                Share
              </a>
            </div>
          </div>
          <Disqus config={disqusConfig} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
