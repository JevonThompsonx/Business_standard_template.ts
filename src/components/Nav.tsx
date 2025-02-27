// src/components/Nav.tsx
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

type NavLinksType = { path: string; label: string }[];

const navLinks: NavLinksType = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/contact', label: 'Contact Me' }
  // add dropdown
];

const navLinksMapped = () => {
  return navLinks.map(({ path, label }) => (
    <Link
      key={path}
      to={path}
      className=""
    >
      {label}
    </Link>
  ));
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 fixed w-screen top-0 z-10 navLinksColors h-14">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <a href='https://github.com/JevonThompsonx'
          className="font-bold navLinksColors">WebDevJev</a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                ` ${isActive ? 'font-bold' : ''}
                rounded-2xl py-1 px-4 navLinksStyle navLinksColors `
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none navLinksColors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 right-0 bg-white space-y-4 p-4`}
      >
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block ${isActive ? 'font-bold' : ''}
              navLinksColors
              `
            }
            onClick={() => setIsOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export { Nav, navLinks, navLinksMapped };
