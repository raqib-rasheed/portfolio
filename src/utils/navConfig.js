import { useMemo } from "react";

export default function useNavConfig() {
  const navLinks = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "About Me", path: "/Aboutme" },
      { label: "Blogs", path: "/Blogs/" },
      { label: "Projects", path: "/Projects" },
    ],
    []
  );
  return navLinks;
}
