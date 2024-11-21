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

const Seminar = () => {
  return (
    <Container>

      <ContentBlock
        direction="right"
        title={"Seminars"}
        content={"LTL seminars are held every Thursday during term time, either in person at the English Faculty Building or online. Some in-person seminars may also offer a hybrid option for remote participation. We welcome attendees from the University and the wider public."}
        button={[]}
        icon="LTL-seminar-2.jpeg"
        id="home"
        fade_direction={"up"}
      />

    </Container>
  );
};

export default Seminar;
