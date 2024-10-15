import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        path : string;
      }
    | {
        title: string;
        color: string;
        path : string;
  }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
