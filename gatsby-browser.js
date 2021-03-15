import React from "react";
import Layout from "./src/components/Layout";
// import ModeContext  from "./src/components/ModeContext";

const shouldUpdateScroll = () => {
  return false;
};

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
// export function wrapRootElement({ element }) {
//   return <ModeContext>{element}</ModeContext>;
// }

export { shouldUpdateScroll };