import { ReactNode } from "react";

export interface ButtonLinkProps {
   link?: string;
   onClick?: ()=>void;
   children: ReactNode;
}