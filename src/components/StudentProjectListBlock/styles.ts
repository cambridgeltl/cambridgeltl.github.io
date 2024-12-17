import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 2rem;
  }
`;

export const Content = styled("p")`
  margin: 1rem 0 1rem 0;
  color: #000000;

`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column; // Stack items on smaller screens
    justify-content: center;
    align-items: center;
  }
`;

export const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: left;

  @media only screen and (max-width: 768px) {
    text-align: center; // Center-align text on smaller screens
    margin-bottom: 2rem; // Add spacing between stacked items
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  button {
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    display: none; // Hide the button on screens smaller than 768px
  }
`;


export const StyledTitle = styled("h6")`
  margin: 1rem 0 1rem 0;
  font-size: 20px;
  font-weight: normal;

  @media only screen and (max-width: 768px) {
    font-size: 30px; // Reduce title size on smaller screens
  }
`;



export const ReferenceText = styled("p")`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
  color: #bababa;
  //color: gray;

  //color: #18216d;
  
  @media only screen and (max-width: 768px) {
    font-size: 18px; // Reduce title size on smaller screens
  }
`;



export const StyledReferenceItem = styled("li")`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
  color: #808080;
  //color: #18216d;

  @media only screen and (max-width: 768px) {
    font-size: 18px; // Reduce title size on smaller screens
  }
`;


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
