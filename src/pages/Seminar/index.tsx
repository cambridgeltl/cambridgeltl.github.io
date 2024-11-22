import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import PeopleContent from "../../content/PeopleContent.json";
import CardListBlock from "../../components/CardListBlock";
import SeminarHighlightBlock from "../../components/SeminarHighlightBlock";
import SeminarContent from "../../content/SeminarContent.json";
import PeopleListBlock from "../../components/PeopleListBlock";
import SeminarNextBlock from "../../components/NextSeminarBlock";
import SeminarListBlock from "../../components/SeminarListBlock";
import SeminarCardBlock from "../../components/SeminarCardBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Seminar = () => {
    const next_seminar = SeminarContent.length > 0 ? SeminarContent[1] : null;


    return (
    <Container>

      <ContentBlock
        direction="right"
        title={"Seminars"}
        content={"LTL seminars are held every Thursday during term time, either in person at the English Faculty Building or online. Some in-person seminars may also offer a hybrid option for remote participation. We welcome attendees from the University and the wider public."}
        button={[
        ]}
        icon="LTL-seminar-2.jpeg"
        id="home"
        fade_direction={"up"}
      />

        {next_seminar && (
            <SeminarNextBlock
                title={"Next Talk"}
                content={next_seminar}
                id="seminar"
                instruction={"Our seminars are held every Thursday from 11:00 AM to 12:00 PM during term time (unless otherwise specified). For more information about our talks, please visit our talks.cam page (talks.cam.ac.uk/show/index/60438)."}
                direction={"left"}
                fade_direction={"up"}

            />
        )}


        <SeminarListBlock
            upcoming_talks={SeminarContent}
            completed_talks={SeminarContent}
            id="seminar_list"
            direction={"left"}
            fade_direction={"up"}
        />

    </Container>
  );
};

export default Seminar;
