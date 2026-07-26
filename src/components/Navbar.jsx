import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home">ND<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
      </nav>
    </header>
  );
}
