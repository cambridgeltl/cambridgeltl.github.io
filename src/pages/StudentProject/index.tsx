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

const StudentProject = () => {
  return (
    <Container>

      <ContentBlock
        direction="right"
        title={"Student Project"}
        content={"We are a team of academics, professionals, and students from around the world, working together at the University of Cambridge to tackle critical real-world challenges using cutting-edge technologies in NLP and AI."}
        button={[]}
        icon="ltl_garden_high.jpg"
        id="home"
        fade_direction={"up"}
      />

    </Container>
  );
};

export default StudentProject;
