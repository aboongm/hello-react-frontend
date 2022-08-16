import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      text: 'Home',
      path: '/',
      id: 0,
    },
    {
      text: 'Greeting',
      path: '/greeting',
      id: 1,
    },
  ];

  return (
    <header className="bg-slate-200 flex justify-between my-4 mx-12 border p-5">
      <a href="/" className="text-2xl font-bold text-slate-700">Greetings</a>

      <nav>
        <ul className="flex gap-4">
          {
          links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="bg-slate-700 p-2 rounded text-white">{link.text}</NavLink>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
