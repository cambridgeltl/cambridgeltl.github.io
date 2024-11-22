import { Badge, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { NewsListBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
    ContentSection,
    ContentWrapper,
    StyledRow,
    ButtonWrapper,
    StyledTitle,
    CardPhoto, StyledDate, StyledAbstract,
} from "./styles";
import {useHistory} from "react-router-dom";
import {StyledContent} from "../SeminarCardBlock/styles";

const { Meta } = Card;

const NewsListBlock = ({
                         title,
                         content = [],
                         button,
                         t,
                         id,
                         fade_direction,
                       }: NewsListBlockProps) => {
    const history = useHistory();
    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };
    return (
      <ContentSection>
        <Fade direction={fade_direction} triggerOnce>
          <div>

              <StyledRow
                  justify="start" // Align items to the left
                  align="middle"
                  id={id}
                  direction={"left"}
                  gutter={[24, 24]}
              >
                  {content.map((item, index) => (
                      <Col
                          key={index}
                          lg={8}
                          md={12}
                          sm={24}
                          xs={24}
                      >
                          <Badge.Ribbon
                              text={item.type}
                              // placement={"start"}
                          >
                              <Card
                                  style={{
                                      height: 440,
                                  }}
                                  hoverable
                                  cover={
                                      <CardPhoto
                                          src={`/img/photo/${item.photo}`}
                                          width="100%"
                                          height="250px"
                                          alt={item.title}
                                      />
                                  }
                              >
                                  <StyledTitle>{item.title}</StyledTitle>
                                  <StyledAbstract>
                                      {truncateText(item.text, 150)}
                                  </StyledAbstract>
                                  <Meta description={item.date} />
                              </Card>
                          </Badge.Ribbon>
                      </Col>
                  ))}
              </StyledRow>
          </div>
        </Fade>
      </ContentSection>
  );
};

export default withTranslation()(NewsListBlock);
