import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Todo{
  id?:string,
  content:string,
  checked?:boolean,
  title:string
}