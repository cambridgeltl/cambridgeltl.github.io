import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import HighlightContent from "../../content/HighlightContent.json";

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
        button={{ link: "/news", title: "More Highlights" }}
      />


      <SeminarHighlightBlock
        title={"LTL Seminars"}
        content={SeminarContent}
        id="seminar"
        direction={"left"}
        fade_direction={"up"}
        instruction={"LTL seminars are held every Thursday during term time, either in person at the English Faculty Building or online. Some in-person seminars may also offer a hybrid option for remote participation. We welcome attendees from the University and the wider public."}

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
