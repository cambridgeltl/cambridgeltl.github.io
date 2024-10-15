import { ImageProps } from "../types";



export const Photo = ({ src, width, height, alt }: ImageProps) => (
    <img
        src={`/img/photo/${src}`} // Adjusted the path to work for all image types
        alt={alt || src} // Uses provided alt text or falls back to src if none is provided
        width={width}
        height={height}
        style={{ maxWidth: "100%", height: "auto" }} // Ensures responsiveness
    />
);