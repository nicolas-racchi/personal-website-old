import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import CustomThemeToggler from '../CustomThemeToggler';
import '../../css/hamburgerMenu.css';

const Header = () => (
  <header className="top-0 z-10">
    <div className="block w-full h-2 bg-red-700" />
    <div className="container flex flex-col items-center justify-between px-8 py-3 mx-auto sm:flex-row">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-semibold border-none darkmode">
          Nicolas Racchi
        </Link>
      </div>
      <div className="block sm:hidden">
        <Menu right disableAutoFocus>
          <Link className="mt-1" to="/">
            Home
          </Link>
          <Link className="mt-3" to="/blog">
            Articles
          </Link>
          <Link className="mt-3" to="/projects">
            Projects
          </Link>
          <Link className="mt-10" to="/about">
            About Me
          </Link>
          {/* <Link className="mt-3" to="/newsletter">
            Newsletter
          </Link> */}
        </Menu>
      </div>
      <div className="flex hidden mt-2 text-base sm:inline">
        <Link to="/blog" className="px-4 border-none" activeClassName="navlink">
          Articles
        </Link>
        <Link to="/projects" className="px-4 border-none" activeClassName="navlink">
          Projects
        </Link>
        <Link to="/about" className="px-4 border-none" activeClassName="navlink">
          About Me
        </Link>
        {/* <Link
          to="/newsletter"
          className="hidden px-4 border-none md:inline"
          activeClassName="navlink"
        >
          Newsletter
        </Link> */}
      </div>

      <CustomThemeToggler />
    </div>
  </header>
);

export default Header;
