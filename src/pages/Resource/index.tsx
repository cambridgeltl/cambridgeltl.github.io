import { lazy } from "react";

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
        title={"Resource"}
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
