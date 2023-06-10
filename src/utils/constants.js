import {
  navigation,
  call,
  message,
  vr2,
  vr3,
  vr4,
  vr5,
  unreal,
  unity,
  oculus,
  vive,
  facebook,
  twitter,
  linkedin,
  youtube,
  instagram,
  pinterest,
} from "../assets";
import { nanoid } from "nanoid";

const navLinks = [
  {
    id: "nav1",
    title: "About",
    path: "#about",
  },
  {
    id: "nav2",
    title: "Services",
    path: "#services",
  },
  {
    id: "nav3",
    title: "Technologies",
    path: "#tech",
  },
  {
    id: "nav4",
    title: "How To",
    path: "#how",
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

const buildList = [
  {
    id: nanoid(),
    image: vr2,
    title: "SIMULATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae",
  },
  {
    id: nanoid(),
    image: vr3,
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae",
  },
  {
    id: nanoid(),
    image: vr4,
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbi nunc Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae",
  },
  {
    id: nanoid(),
    image: vr5,
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbi nunc Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae",
  },
];

const techList = [
  {
    id: nanoid(),
    image: unreal,
  },
  {
    id: nanoid(),
    image: unity,
  },
  {
    id: nanoid(),
    image: oculus,
  },
  {
    id: nanoid(),
    image: vive,
  },
];

const processList = [
  {
    id: nanoid(),
    number: "01",
    upperText: "3D Conception",
    downText: "& Design",
  },
  {
    id: nanoid(),
    number: "02",
    upperText: "Interaction",
    downText: "Design",
  },
  {
    id: nanoid(),
    number: "03",
    upperText: "VR World",
    downText: "User Testing",
  },
  {
    id: nanoid(),
    number: "04",
    upperText: "Hydra VR",
    downText: "Deploy",
  },
];

const footerList = [
  {
    id: nanoid(),
    title: "F.A.Q",
  },
  {
    id: nanoid(),
    title: "SITEMAP",
  },
  {
    id: nanoid(),
    title: "CONDITIONS",
  },
  {
    id: nanoid(),
    title: "LICENSES",
  },
];

const footerSocials = [
  {
    id: nanoid(),
    image: facebook,
    name: "facebook",
  },
  {
    id: nanoid(),
    image: twitter,
    name: "twitter",
  },
  {
    id: nanoid(),
    image: linkedin,
    name: "linkedin",
  },
  {
    id: nanoid(),
    image: youtube,
    name: "youtube",
  },
  {
    id: nanoid(),
    image: instagram,
    name: "instagram",
  },
  {
    id: nanoid(),
    image: pinterest,
    name: "pinterest",
  },
];

export {
  navLinks,
  contacts,
  buildList,
  techList,
  processList,
  footerList,
  footerSocials,
};
