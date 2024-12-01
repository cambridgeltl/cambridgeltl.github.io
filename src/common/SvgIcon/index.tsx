import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
    <img
        src={`${process.env.PUBLIC_URL}/img/svg/${src}`} // Adjusted for deployment path
        alt={src} // Fallback alt text
        width={width}
        height={height}
        style={{ maxWidth: "100%", height: "auto" }} // Ensures responsiveness
    />
);
