import { lazy } from "react";
import ProjectListBlock from "../../components/ProjectListBlock";
import StudentProjectCategoryBlock from "../../components/StudentProjectCategoryBlock";
import StudentProjectListBlock from "../../components/StudentProjectListBlock";
import StudentProjectListContent from "../../content/StudentProjectListContent.json";



const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const StudentProjectBlock = lazy(() => import("../../components/StudentProjectBlock"));

const StudentProject = () => {
  return (
    <Container>

      <StudentProjectBlock
        direction="right"
        title={"Student Projects"}
        content={"We offer research projects for MPhil students, some of which can also be adapted for Part II and Part III students. Because we supervise students from a variety of courses in Cambridge, we have classified our projects according to the educational background and the skills required."}
        button={[]}
        icon="chia_presentation.jpeg"
        id="home"
        fade_direction={"up"}
      />

        <StudentProjectListBlock
            fade_direction={"up"}
            content={StudentProjectListContent}
            id="student_project_list"

        />

    </Container>
  );
};

export default StudentProject;
