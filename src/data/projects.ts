import { ProjectItemInterface } from "./../@types/types";

//Project images
import PostMedia from "../assets/img/postmedia.gif";
import ChatApp from "../assets/img/chatapp.gif";
import Bienes from "../assets/img/bienes.gif";
import Quote from "../assets/img/quoteapp.png";

//Technologies images
import HTMLLogo from "../assets/img/logo-html.png";
import CSSLogo from "../assets/img/logo-css.png";
import JSLogo from "../assets/img/logo-js.png";
import ReactLogo from "../assets/img/logo-react.png";
//import NextLogo from "../assets/img/logo-nextjs.svg";
import GraphQLLogo from "../assets/img/logo-graphql.png";
import SocketIOLogo from "../assets/img/logo-socketio.png";
import ExpressLogo from "../assets/img/logo-express.png";
import MongoDBLogo from "../assets/img/logo-mongodb.png";
//import PostgreSQLLogo from "../assets/img/logo-postgresql.svg";

export const ProjectsData: Array<ProjectItemInterface> = [
  {
    name: "PostMedia",
    img: PostMedia,
    description: "App where you can share your thougths",
    techs: [ReactLogo, ExpressLogo, GraphQLLogo, MongoDBLogo],
    demo: "https://kdev-postmedia.netlify.app/",
    code: [
      {
        name: "Front-End",
        link: "https://github.com/k3v1n0s0r10/post-media-front",
      },
      {
        name: "Back-End",
        link: "https://github.com/k3v1n0s0r10/post-media-backend",
      },
    ],
  },
  {
    name: "Realtime Chat",
    img: ChatApp,
    description:
      "App to enter chat rooms open to everyone, messages are not stored",
    techs: [ReactLogo, SocketIOLogo, ExpressLogo],
    demo: "https://kdev-chat.netlify.app/",
    code: [
      {
        name: "Front-End",
        link: "https://github.com/k3v1n0s0r10/chat-app-frontend",
      },
      {
        name: "Back-End",
        link: "https://github.com/k3v1n0s0r10/chat-app-backend",
      },
    ],
  },
  {
    name: "Bienes Raices",
    img: Bienes,
    description: "Landing page to rent houses and apartments",
    techs: [HTMLLogo, CSSLogo],
    demo: "https://kdev-bienes.netlify.app/",
    code: [
      {
        name: "Front-End",
        link: "https://github.com/k3v1n0s0r10/bienes-raices ",
      },
    ],
  },
  {
    name: "Quote Generator",
    img: Quote,
    description: "Share random quotes on your twitter feed",
    techs: [HTMLLogo, CSSLogo, JSLogo],
    demo: "https://kdev-quote.netlify.app/",
    code: [
      {
        name: "Front-End",
        link: "https://github.com/k3v1n0s0r10/quote-generator",
      },
    ],
  },
];
