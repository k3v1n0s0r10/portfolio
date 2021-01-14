interface CodeInterface {
  name: string;
  link: string;
}

export interface ProjectItemInterface {
  name: string;
  img: string;
  description: string;
  techs: Array<string>;
  demo: string;
  code: Array<CodeInterface>;
}

// name: "PostMedia",
//     img: PostMedia,
//     description: "In this app you could die",
//     demo: "https://kdev-postmedia.netlify.app/",
//     code: [
//       {
//         name: "Front-End",
//         link: "https://github.com/k3v1n0s0r10/post-media-front",
//       },
//       {
//         name: "Back-End",
//         link: "https://github.com/k3v1n0s0r10/post-media-backend",
//       },
//     ],
