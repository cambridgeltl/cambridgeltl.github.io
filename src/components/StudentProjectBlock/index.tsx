import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { StudentProjectBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import {Photo} from "../../common/Photo";
import StudentProjectCategoryBlock from "../StudentProjectCategoryBlock";

const StudentProjectBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction, fade_direction
}: StudentProjectBlockProps) => {

  const history = useHistory();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={fade_direction}  triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={12} md={11} sm={12} xs={24}>
            <Photo src={icon} width="100%" height="100%" alt={"LTL Group"}/>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </ContentWrapper>
            
          </Col>

          <StudentProjectCategoryBlock/>

        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(StudentProjectBlock);
