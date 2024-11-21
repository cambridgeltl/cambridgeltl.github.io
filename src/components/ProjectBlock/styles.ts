import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 4rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;


export const StyledTitle = styled("h6")`
  font-size: 30px;
  margin: 0;
  font-weight: normal;

  @media only screen and (max-width: 768px) {
    font-size: 30px; // Reduce title size on smaller screens
  }
`;


export const Content = styled("p")`
  color: #18216d;
  font-size: 18px;
  line-height: 1.41;
  margin: 1.5rem 0 1rem 0;
`;


export const NoMerginContent = styled("div")`
  color: #18216d;
  font-size: 18px;
  line-height: 1.41;
  margin: 0rem 0 0rem 0;
`;



export const UnderlineContent = styled("u")`


  color: #18216d;
  font-size: 18px;
  line-height: 1.41;
  //text-decoration: underline wavy #18216d; /* Wavy underline in the same color */
  //text-underline-offset: 2px; /* Adjust spacing between text and underline */

  margin: 0rem 0 0rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
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
    margin-left: 20px;
  }
`;
