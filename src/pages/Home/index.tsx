import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import HighlightContent from "../../content/HighlightContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CardListBlock from "../../components/CardListBlock";
import SeminarHighlightBlock from "../../components/SeminarHighlightBlock";
import SeminarContent from "../../content/SeminarContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>

        {/*<ScrollToTop />*/}
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="group_1_zoomed.jpg"
        id="home"
        fade_direction={"up"}
      />

      <CardListBlock
        title={"Highlights"}
        content={HighlightContent}
        id="highlight"
        fade_direction={"up"}
      />


      <SeminarHighlightBlock
        title={"Next LTL Seminar"}
        content={SeminarContent}
        id="seminar"
        direction={"left"}
        fade_direction={"up"}

      />

        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
          url={MiddleBlockContent.url}
        />


    </Container>
  );
};

export default Home;
