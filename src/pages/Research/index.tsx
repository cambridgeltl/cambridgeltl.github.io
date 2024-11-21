import { lazy } from "react";
import PeopleContent from "../../content/PeopleContent.json";
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
        title={"Research"}
        content={"The Language Technology Lab is actively engaged in and has completed numerous projects that push the boundaries of what NLP and AI technologies can achieve."}
        button={[]}
        icon="earth_small_blue.png"
        // icon="kings.jpg"
        id="research"
        fade_direction={"up"}
      />

        {ResearchProjectContent.map((project, index) => {
            const direction = index % 2 === 0 ? "left" : "right"; // Even index: "left", Odd index: "right"
            const photo = project.photo || "earth_small_blue.png"; // Use default "earth.png" if project.photo is empty

            return (
                <ProjectBlock
                    key={project.title} // Add a unique key for better rendering performance
                    direction={direction}
                    title={project.title}
                    content={project.abstract}
                    people={project.people}
                    link={project.link}
                    funder={project.funder}
                    year={project.year}
                    icon={photo} // Use the dynamic photo
                    id={project.title}
                    fade_direction={"up"}
                />
            );
        })}


    </Container>
  );
};

export default Research;
