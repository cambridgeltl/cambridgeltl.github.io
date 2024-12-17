import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;
// Styled Row
export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
          direction === "left" ? "row" : "row-reverse"};
  display: flex;
  align-items: center; // Ensure vertical alignment
  //justify-content: space-between;
`;

// Content Wrapper (for Title)
export const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically center content
  height: 100%; // Optional: set to ensure it takes up the full height
  text-align: left; // Align text to the left
`;

// Button Wrapper (for Button Alignment)
export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // Ensure button wrapper takes full height for vertical alignment
  button {
    margin: 0 auto;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;


export const StyledTitle = styled("h6")`
  font-size: 50px; // Adjust this value to match the button size
  margin: 0;
  font-weight: normal; // Adjust if needed to match the button
`;


// export const CardPhoto = styled.img`
//   width: 100%;  // Ensures the image takes full width of the card
//   height: 200px;  // A fixed height to ensure all images are the same height
//   object-fit: cover;  // Ensures the image covers the space while maintaining its aspect ratio
//   object-position: center;  // Ensures the image is centered
//   border-radius: 5px;  // Optional: add some border-radius for styling
// `;

interface PhotoProps {
    width?: string;
    height?: string;
}

export const CardPhoto = styled.img<PhotoProps>`
  
  width: ${({ width }) => width || "100%"};  // Default width is 100%, but it can be overridden
  height: ${({ height }) => height || "200px"};  // Default height is 200px, but it can be overridden
  object-fit: cover;  // Maintain aspect ratio and cover the given area
  object-position: center;  // Center the image
  border-radius: 5px;  // Optional: add some border-radius
`;
