import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import {ProjectBlockProps} from "./types";
import { Button } from "../../common/Button";

import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper, StyledTitle, NoMerginContent, UnderlineContent,
} from "./styles";
import {Photo} from "../../common/Photo";

const ProjectBlock = ({
  icon,
  title,
  content,
  people,
  section,
  link, funder, year,
  t,
  id,
  direction, fade_direction
}: ProjectBlockProps) => {

  const history = useHistory();

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
            <Photo src={icon} width="100%" height="100%" alt={"Research Project"}/>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <StyledTitle>{t(title)}</StyledTitle>

              <Content>{t(content)}</Content>

              {
                people && people.map((person, index) => {
                  return (
                      <NoMerginContent key={index}>{t(person.name + " (" +  person.position +")")}</NoMerginContent>
                  );
                })
              }


              {
                 funder && (
                      <NoMerginContent
                          onClick={link ? () => window.open(link, '_blank') : undefined} >{"Funded by " + funder + " (" + year + ")"}
                      </NoMerginContent>
                  )
              }
              {
                link && (
                      <UnderlineContent
                          onClick={link ? () => window.open(link, '_blank') : undefined} >
                        {t("Further details...")}
                      </UnderlineContent>
                  )
              }




              {direction === "right" ? (
                <div></div>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <Photo
                                  src={item.icon}
                                  width="60px"
                                  height="60px"
                                  alt={"LTL Group"}
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ProjectBlock);
