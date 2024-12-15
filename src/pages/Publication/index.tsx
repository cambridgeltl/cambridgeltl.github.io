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
        content={"Our research projects are led by three Principal Investigators (PIs). Explore our ongoing research topics by visiting their Google Scholar profiles. Click on the profiles below to learn more about our work."}
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
