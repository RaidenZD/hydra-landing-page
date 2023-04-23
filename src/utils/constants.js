import { navigation, call, message } from "../assets";

const navLinks = [
  {
    id: "nav1",
    title: "About",
  },
  {
    id: "nav2",
    title: "Services",
  },
  {
    id: "nav3",
    title: "Technologies",
  },
  {
    id: "nav4",
    title: "How To",
  },
];

const contacts = [
  {
    id: 1,
    title: "Pay Us a Visit",
    description: "Union St, Seattle, WA 98101, United States",
    icon: navigation,
  },
  {
    id: 2,
    title: "Give Us a Call",
    description: "(110) 1111-1010",
    icon: call,
  },
  {
    id: 3,
    title: "Send Us a Message",
    description: "Contact@HydraVTech.com",
    icon: message,
  },
];

export { navLinks, contacts };
