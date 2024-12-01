import { TFunction } from "react-i18next";
export interface PeopleBlockProps {
  title: string;
  content?: {
    type: string;
    name: string;
    title: string;
    photo: string;
    link: string;
    position: string;
  }[];

  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  );

  t: TFunction;
  id: string;
  fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
    show_photo?: boolean;
}
