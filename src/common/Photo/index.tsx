import { ImageProps } from "../types";



export const Photo = ({ src, width, height, alt }: ImageProps) => (
    <img
        src={`${process.env.PUBLIC_URL}/img/photo/${src}`}
        alt={alt || src}
        width={width}
        height={height}
        style={{ maxWidth: "100%", height: "auto" }}
        onError={(e) => {
            e.currentTarget.src = `${process.env.PUBLIC_URL}/img/photo/fallback.png`;
            e.currentTarget.alt = "Image not found";
        }}
    />

);