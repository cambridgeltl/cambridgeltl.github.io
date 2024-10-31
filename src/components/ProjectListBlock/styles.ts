import { CSSProperties } from "react";

export const cardTitleContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
};

export const cardTitleTextStyle: CSSProperties = {
    fontWeight: "bold",
    fontSize: "20px",
    wordWrap: "break-word",
};

export const cardStyle: CSSProperties = {
    height: "100%",
};

export const contentContainerStyle: CSSProperties = {
    height: "600px",
    overflowY: "auto",
    paddingRight: "8px",
};

export const scrollContentStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
};

export const listGridSettings = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
};