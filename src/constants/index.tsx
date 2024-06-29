import { SocialsType } from "@/utils/Types";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";

export const socialMedia: SocialsType[] = [
  { id: 1, link: "", icon: <Facebook /> },
  { id: 2, link: "", icon: <Twitter /> },
  { id: 3, link: "", icon: <Instagram /> },
  { id: 4, link: "", icon: <Pinterest /> },
];

export const navLinks = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "about",
    link: "/about",
  },
  {
    id: 3,
    title: "contact",
    link: "/contact",
  },
];
