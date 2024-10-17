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
import ProjectListBlock from "../../components/ProjectListBlock";



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
        title={"Student Projects"}
        content={"We offer research projects for MPhil students, some of which can also be adapted for Part II and Part III students. Because we supervise students from a variety of courses in Cambridge, we have classified our projects according to the educational background and the skills required."}
        button={[]}
        icon="chia_presentation.jpeg"
        id="home"
        fade_direction={"up"}
      />
        <ProjectListBlock />

    </Container>
  );
};

export default StudentProject;
