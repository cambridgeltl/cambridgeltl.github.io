import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 4rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;


export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};

  @media only screen and (max-width: 768px) {
    flex-direction: column; // Stack columns vertically for smaller screens
    justify-content: center;
    align-items: center;
  }
`;


export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
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

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 0px;
  }
`;


export const StyledTitle = styled("h6")`
  font-size: 20px; // Adjust this value to match the button size
  margin: 0;
  font-weight: normal; // Adjust if needed to match the button
`;


export const StyledContent = styled("p")`
  font-size: 20px; // Adjust this value to match the button size
  margin: 0;
  font-weight: normal; // Adjust if needed to match the button
`;
