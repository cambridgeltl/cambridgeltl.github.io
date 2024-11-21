import { Badge, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import {
    ContentSection, StyledContent,
    StyledRow, StyledTitle,
} from "./styles";
import {cardStyle} from "./styles";

const { Meta } = Card;

const StudentProjectCategoryBlock = () => {
  return (
      <ContentSection>
        <Fade direction={"up"} triggerOnce>
          <div>
          <StyledRow
              justify="space-between"
              align="middle"
              id={"student_project_category"}
              direction={"left"}
              gutter={[24, 24]}
          >
                <Col
                    key={"category_a"} lg={8} md={12} sm={24} xs={24}
                >
                    <Badge.Ribbon text={"A. Machine Learning"} placement={"start"}>

                    <Card
                      hoverable
                      style={cardStyle}

                    >
                      <StyledTitle>{"A. Machine Learning for NLP"}</StyledTitle>
                      <StyledContent>{"For students with a background in computer science, engineering, or quantitative disciplines. Strong programming skills are essential."}</StyledContent>
                  </Card>
                        </Badge.Ribbon>
                </Col>

              <Col
                  key={"category_b"} lg={8} md={12} sm={24} xs={24}
              >
                  <Badge.Ribbon text={"B. Computational Linguistics"} placement={"start"} color="cyan">

                  <Card
                      hoverable

                      style={cardStyle}

                  >
                      <StyledTitle>{"B. Computational Linguistics"}</StyledTitle>
                      <StyledContent>{"For students from linguistics or non-science backgrounds with strong programming skills (e.g., Python)."}</StyledContent>
                  </Card>
                  </Badge.Ribbon>

              </Col>

              <Col
                  key={"category_c"} lg={8} md={12} sm={24} xs={24}
              >
                  <Badge.Ribbon text={"C. Data-Driven Linguistics"} placement={"start"} color="green">

                  <Card
                      hoverable
                      style={cardStyle}

                  >
                      <StyledTitle>{"C. Data-Driven Linguistics"}</StyledTitle>
                      <StyledContent>{"For linguistics students with a foundation in quantitative methods focused on leveraging corpora and data for linguistic insights."}</StyledContent>
                  </Card>
                  </Badge.Ribbon>

              </Col>


          </StyledRow>
          </div>
        </Fade>
      </ContentSection>
  );
};

export default withTranslation()(StudentProjectCategoryBlock);
