import { StaticImageData } from "next/image";

interface CodeInterface {
  name: string;
  link: string;
}

export interface ProjectItemInterface {
  name: string;
  img: StaticImageData;
  description: string;
  techs: Array<StaticImageData>;
  demo: string;
  code: Array<CodeInterface>;
}
