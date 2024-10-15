import { TFunction } from "react-i18next";
export interface SeminarHighlightBlockType {
    title: string;
    content?: {
        type: string;
        title: string;
        speaker: string;
        link: string;
        venue: string;
        place: string;
        date: string;
        time: string;
        abstract: string;
        bio: string;
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
    direction: "left" | "right";
    fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
