import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { navItems } from "./navItems";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.85 } },
    closed: { opacity: 0, x: "200%", transition: { duration: 0.85 } },
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="./lux.png" alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <button onClick={() => setToggle((prev) => !prev)} type="button">
          <HiMenuAlt4 fontSize={22} />
        </button>
        {toggle && (
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            initial={false}
          >
            <ul>
              <HiX onClick={() => setToggle(false)} />
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
