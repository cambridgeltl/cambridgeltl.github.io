import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import PeopleContent from "../../content/PeopleContent.json";
import CardListBlock from "../../components/CardListBlock";
import SeminarHighlightBlock from "../../components/SeminarHighlightBlock";
import SeminarContent from "../../content/SeminarContent.json";
import PeopleListBlock from "../../components/PeopleListBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const People = () => {
  return (
    <Container>

        {/*<ScrollToTop />*/}
      <ContentBlock
        direction="right"
        title={"People"}
        content={"We are a team of academics, professionals, and students from around the world, working together at the University of Cambridge to tackle critical real-world challenges using cutting-edge technologies in NLP and AI."}
        button={[]}
        icon="ltl_garden_high.jpg"
        id="home"
        fade_direction={"up"}
      />

      <PeopleListBlock
        title={"Academic Staff"}
        content={PeopleContent.filter((item) => item.type === "academic staff")}
        id="staff"
        fade_direction={"up"}
      />


        <PeopleListBlock
            title={"Researchers"}
            content={PeopleContent.filter((item) => item.type === "researcher")}
            id="researchers"
            fade_direction={"up"}
        />

        <PeopleListBlock
            title={"Research Students"}
            content={PeopleContent.filter((item) => item.type === "student")}
            id="researchers"
            fade_direction={"up"}
        />

        <PeopleListBlock
            title={"Administrators"}
            content={PeopleContent.filter((item) => item.type === "administrator")}
            id="administrators"
            fade_direction={"up"}
        />

        <PeopleListBlock
            title={"Alumni"}
            content={PeopleContent.filter((item) => item.type === "alumni")}
            id="alumni"
            fade_direction={"up"}
        />



        {/*<M*/}


    </Container>
  );
};

export default People;
