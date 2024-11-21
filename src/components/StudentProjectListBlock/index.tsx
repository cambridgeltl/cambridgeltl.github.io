import { Badge, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { StudentProjectListBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
    ContentSection,
    ContentWrapper,
    StyledRow,
    ButtonWrapper,
    StyledTitle,
    CardPhoto, Content, StyledReferenceItem, ReferenceText,
} from "./styles";

const { Meta } = Card;

const StudentProjectListBlock = ({
                         content = [],
                         t,
                         id,
                         fade_direction,
                       }: StudentProjectListBlockProps) => {
  return (
      <ContentSection>
        <Fade direction={fade_direction} triggerOnce>
          <div>
          <StyledRow
              justify="space-between"
              align="middle"
              id={id}
              direction={"left"}
              gutter={[24, 24]}
          >
              {content.map((item, index) => {
                  // Dynamically set Badge text and color
                  const badgeProps = {
                      text:
                          item.category === "A"
                              ? "A. Machine Learning"
                              : item.category === "B"
                                  ? "B. Computational Linguistics"
                                  : "C. Data-Driven Linguistics",
                      color:
                          item.category === "A"
                              ? "default"
                              : item.category === "B"
                                  ? "cyan"
                                  : "green",
                  };

                  return (
                      <Col key={index} lg={24} md={24} sm={24} xs={24}>
                          <Badge.Ribbon
                              text={badgeProps.text}
                              placement={"start"}
                              color={badgeProps.color}
                          >
                              <Card hoverable>
                                  <StyledTitle style={{ maxWidth: "100%" }}>
                                      {item.title}
                                  </StyledTitle>
                                  <Content>{item.abstract}</Content>
                                  {item.references && item.references.length > 0 && (
                                      <div>
                                          <ReferenceText>{"Reference:"}</ReferenceText>
                                          <ol>
                                              {item.references.map((ref_item, ref_index) => (
                                                  <StyledReferenceItem key={ref_index}>
                                                      {ref_item.text}
                                                  </StyledReferenceItem>
                                              ))}
                                          </ol>
                                      </div>
                                  )}
                                  {item.contacts && (
                                      <div>
                                          <ReferenceText>{"Contact:"}</ReferenceText>
                                          <ul>
                                              {item.contacts.map((contact_item, contact_index) => (
                                                  <StyledReferenceItem key={contact_index}>
                                                      {contact_item}
                                                  </StyledReferenceItem>
                                              ))}
                                          </ul>
                                      </div>
                                  )}
                              </Card>
                          </Badge.Ribbon>
                      </Col>
                  );
              })}
          </StyledRow>
          </div>
        </Fade>
      </ContentSection>
  );
};

export default withTranslation()(StudentProjectListBlock);
