import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import profilepic from '../img/profilepic.png';
import EmailIcon from '../svg/EmailIcon';
import LinkedinIcon from '../svg/LinkedinIcon';
import MediumIcon from '../svg/MediumIcon';
import GitHubIcon from '../svg/GitHubIcon';
import TwitterIcon from '../svg/TwitterIcon';

const About = () => {
  return (
    <Layout>
      <Head
        title="About"
        desc="Hi, I'm a sophomore studying automation engineering at Polimi. 
        Read more about me here!"
      />

      <div className="flex items-start justify-center mt-8 sm:mt-16">
        <div className="w-32 sm:w-48 md:w-56">
          <img src={profilepic} alt="profile pic" />
        </div>
      </div>
      <div>
        <div className="container max-w-3xl mx-auto text-center">
          <div className="mx-4 mt-6 sm:mx-2 md:mx-0 sm:mt-5">
            <p className="font-normal texl-lg sm:text-xl">
              I&apos;m a sophomore studying Automation Engineering at{' '}
              <a href="http://www.polimi.it" rel="noopener noreferrer" target="_blank">
                Polimi
              </a>
              .
            </p>
            <p className="mt-2 font-normal texl-lg sm:text-xl">
              Among my interests are Data Science, SaaS, Cryptocurrencies, Finance &amp; Robotics.
            </p>
            <p className="mt-2 font-normal texl-lg sm:text-xl">
              Like many makers, I have a lot of ideas and little time to execute them. When I&apos;m
              offline, I&apos;m headed to the gym or to the bar.
            </p>
            <h2 className="mt-8 mb-3 text-xl font-bold sm:mb-5 lg:text-3xl xl:text-3xl ">
              Reach me
            </h2>

            {/* LINKS SECTION */}
            <div className="container flex justify-center">
              <div className="flex items-end justify-center">
                <a
                  className="text-sm border-none sm:text-lg"
                  href="mailto:nicolas@racchi.com"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 mx-3 sm:w-10 sm:mx-5">
                    <EmailIcon />
                  </div>
                </a>
              </div>
              <div className="flex items-end justify-center mt-3">
                <a
                  className="text-sm border-none sm:text-lg"
                  href="https://twitter.com/@NicolasRacchi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-8 mx-3 sm:w-10 sm:mx-5">
                    <TwitterIcon />
                  </div>
                </a>
              </div>
              <div className="flex items-end justify-center mt-3">
                <a
                  className="text-sm border-none sm:text-lg"
                  href="https://github.com/nicolas-racchi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-8 mx-3 sm:w-10 sm:mx-5">
                    <GitHubIcon />
                  </div>
                </a>
              </div>
              <div className="flex items-end justify-center mt-3">
                <a
                  className="text-sm border-none sm:text-lg"
                  href="https://www.linkedin.com/in/nicolas-racchi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-8 mx-3 sm:w-10 sm:mx-5">
                    <LinkedinIcon />
                  </div>
                </a>
              </div>
              <div className="flex items-end justify-center mt-3">
                <a
                  className="text-sm border-none sm:text-lg"
                  href="https://medium.com/@nicolas_racchi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-8 mx-3 sm:w-10 sm:mx-5">
                    <MediumIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
