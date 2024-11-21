import { TFunction } from "react-i18next";
export interface StudentProjectListBlockProps {
  content?: {
    title: string;
    abstract: string;
    references?: {
        text: string;
        link: string;
    }[];
    contacts?: string[];
      category: string;
  }[];
  t: TFunction;
  id: string;
  fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
