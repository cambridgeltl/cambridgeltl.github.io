import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import PeopleContent from "../../content/PeopleContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CardListBlock from "../../components/CardListBlock";
import SeminarHighlightBlock from "../../components/SeminarHighlightBlock";
import SeminarContent from "../../content/SeminarContent.json";
import PeopleListBlock from "../../components/PeopleListBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Research = () => {
  return (
    <Container>

      <ContentBlock
        direction="right"
        title={"Research"}
        content={"LTL is engaged in ongoing projects that aim to advance the field of NLP & AI. Our research focuses on a range of critical issues, and these projects are driven by a team of researchers and students collaborating to explore new approaches and push the boundaries of what NLP technologies can achieve."}
        button={[]}
        icon="ltl_garden_high.jpg"
        id="home"
        fade_direction={"up"}
      />

      <PeopleListBlock
        title={"Active Projects"}
        content={PeopleContent.filter((item) => item.type === "academic staff")}
        id="staff"
        fade_direction={"up"}
      />


    </Container>
  );
};

export default Research;
