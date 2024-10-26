import React from "react";
import { Navbar } from "./Navbar";
import { Helmet } from "react-helmet";

import "../styles/global.css";
import { graphql, useStaticQuery } from "gatsby";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const { copyright } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p>{copyright}</p>
        </footer>
      </div>
    </>
  );
};
