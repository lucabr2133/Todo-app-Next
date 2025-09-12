import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Todo{
  id?:string,
  content:string,
  checked?:boolean,
  title:string
}export interface List{
  id:string  ,
  title:string
}
export interface Task{
  id:string,
  title:string,
  description:string,
  checked:boolean
}
export type ModalType="createTask"|"createList"|null