import { lazy } from "react";
import PIGoogleScholarContent from "../../content/PIGoogleScholarContent.json";
import PeopleListBlock from "../../components/PeopleListBlock";
import IntroContent from "../../content/IntroContent.json";
import ResearchProjectContent from "../../content/ResearchProjectContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProjectBlock = lazy(() => import("../../components/ProjectBlock"));



const Research = () => {
  return (
    <Container>

      <ContentBlock
        direction="right"
        title={"Publications"}
        content={"The Language Technology Lab is at the forefront of NLP and AI research. Explore the ongoing research topics by visiting the Google Scholar profiles of our Principal Investigators (PIs). Click on the profiles below to learn more about their work."}
        button={[]}
        icon="earth_small_blue.jpg"
        id="publications"
        fade_direction={"up"}
      />

        <PeopleListBlock
            title={"Principal Investigators"}
            content={PIGoogleScholarContent}
            id="staff"
            fade_direction={"up"}
        />

    </Container>
  );
};

export default Research;
