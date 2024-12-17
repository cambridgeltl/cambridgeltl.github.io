import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;



export const SocialIconContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: center; // Center horizontally
  text-align: center;
  align-items: center;
  //transition: all 0.1s ease-in-out;
  gap: 50px;  // Adds 20px space between the icons, you can adjust this value

  //a {
  //  &:hover,
  //  &:active,
  //  &:focus {
  //    -webkit-transform: scale(1.1);
  //    -ms-transform: scale(1.1);
  //    transform: scale(1.1);
  //  }
  //}

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 20px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;
