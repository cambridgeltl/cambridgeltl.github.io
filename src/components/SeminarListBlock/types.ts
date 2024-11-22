import { TFunction } from "react-i18next";
export interface SeminarListBlockType {
    upcoming_talks: {
        type: string;
        title: string;
        speaker: string;
        link: string;
        venue: string;
        place: string;
        date: string;
        time: string;
        affiliation: string;
        abstract: string;
        bio: string;
    }[];
    completed_talks: {
        type: string;
        title: string;
        speaker: string;
        link: string;
        venue: string;
        place: string;
        date: string;
        time: string;
        affiliation: string;
        abstract: string;
        bio: string;
    }[];
    t: TFunction;
    id: string;
    direction: "left" | "right";
    fade_direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
