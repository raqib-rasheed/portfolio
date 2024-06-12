import { useMemo } from "react";

export default function useNavConfig() {
  const navLinks = useMemo(
    () => [
      { label: "HOME", path: "/" },
      { label: "ABOUT ME", path: "/Aboutme" },
      { label: "BLOGS", path: "/Blogs/" },
      { label: "PROJECTS", path: "/Projects" },
    ],
    []
  );
  return navLinks;
}
