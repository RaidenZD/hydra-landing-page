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
} from "../assets";
import { nanoid } from "nanoid";

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

export { navLinks, contacts, buildList, techList };
