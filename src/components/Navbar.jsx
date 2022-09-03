import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <Link className="home" to="/">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};
