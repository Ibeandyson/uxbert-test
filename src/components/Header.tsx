import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link passHref href="/">
            <a className="navbar-brand mb-0 h1">Home</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
