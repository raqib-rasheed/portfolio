import React from 'react';
import Nav from '../components/Nav';
import Seo from '../components/SEO';
import avatars from '../images/avatars.webp';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Seo title="About Me" image={avatars && avatars} />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
