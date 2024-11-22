import { TFunction } from "react-i18next";
export interface SeminarCardBlockType {
    content: {
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
        affiliation: string;
    };
    show_detail: boolean;
}
