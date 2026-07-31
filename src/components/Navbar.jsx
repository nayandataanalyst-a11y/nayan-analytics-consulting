import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Case Studies" },
  { id: "about", label: "About" },
  { id: "recommendations", label: "Testimonials" },
  { id: "resources", label: "Resources" },
  { id: "book-meeting", label: "Book a Call" },
  {
   id:"packages",
   label:"Packages"
}
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Brand */}
      <a
        className="brand"
        href="#home"
        onClick={() => setOpen(false)}
      >
        ND<span>.</span>
      </a>

      {/* Mobile Menu */}
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Navigation */}
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}

        {/* CTA Button */}
        <a
          href="#book-meeting"
          className="nav-consult-btn"
          onClick={() => setOpen(false)}
        >
          Book a Strategy Call
        </a>
      </nav>
    </header>
  );
}