import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import PeopleContent from "../../content/PeopleContent.json";

import CardListBlock from "../../components/CardListBlock";
import SeminarHighlightBlock from "../../components/SeminarHighlightBlock";
import SeminarContent from "../../content/SeminarContent.json";
import PeopleListBlock from "../../components/PeopleListBlock";
import HighlightContent from "../../content/HighlightContent.json";
import NewsListBlock from "../../components/NewsListBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const StudentProject = () => {
  return (
    <Container>

      {/*<ContentBlock*/}
      {/*  direction="right"*/}
      {/*  title={"News & Events"}*/}
      {/*  content={"Stay up to date with the latest news and events from the lab. "}*/}
      {/*  button={[]}*/}
      {/*  icon="cheers.jpeg"*/}
      {/*  id="home"*/}
      {/*  fade_direction={"up"}*/}
      {/*/>*/}


        <MiddleBlock
            title={"News & Events"}
            content={"Stay up to date with the latest news and events from us."}
            // button={MiddleBlockContent.button}
            // url={MiddleBlockContent.url}
        />


        <NewsListBlock
            title={"Highlights"}
            content={HighlightContent}
            id="highlight"
            fade_direction={"up"}
            button={{ link: "/news", title: "More Highlights" }}
        />


    </Container>
  );
};

export default StudentProject;
