import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="static/fonts/inter-latin-400-normal.woff"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="static/fonts/inter-latin-500-normal.woff"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont500"
    />,
    <link
      rel="preload"
      href="static/fonts/inter-latin-600-normal.woff"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont600"
    />,
    <link
      rel="preload"
      href="static/fonts/inter-latin-700-normal.woff"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont700"
    />,
    <link
      rel="preload"
      href="static/fonts/inter-latin-800-normal.woff"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont800"
    />,
  ]);
};
