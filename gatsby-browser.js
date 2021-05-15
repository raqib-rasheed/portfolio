import React from "react";
import Layout from "./src/components/Layout";
import { ThemeProvider } from "./src/context/ThemeContext";

const shouldUpdateScroll = () => {
  return false;
};

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      <ThemeProvider>{element}</ThemeProvider>
    </Layout>
  );
}

export { shouldUpdateScroll };
