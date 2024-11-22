import { TFunction } from "react-i18next";
export interface NewsListBlockProps {
  title: string;
  content?: {
    type: string;
    title: string;
    text: string;
    photo: string;
    link: string;
    date: string;
  }[];

  button?:
    { title: string;
        link: string;
    };

  t: TFunction;
  id: string;
  fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
