import { Row, Col, Card } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { CardListBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  StyledTitle,
  CardPhoto,
} from "./styles";

const { Meta } = Card;

const CardListBlock = ({
                         title,
                         content = [],
                         button,
                         t,
                         id,
                         fade_direction,
                       }: CardListBlockProps) => {
  return (
      <ContentSection>
        <Fade direction={fade_direction} triggerOnce>
          <div>
          <StyledRow justify="space-between" align="middle" id={id} direction={"left"}>
            {/* Left Column for the Title */}
            <Col lg={11} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <StyledTitle>{t(title)}</StyledTitle>
              </ContentWrapper>
            </Col>

            {/* Right Column for the Button */}
            <Col lg={4} md={12} sm={24} xs={24}>
              <ButtonWrapper>
                <Button key={"learn_more"}>{"More " + title}</Button>
              </ButtonWrapper>
            </Col>
          </StyledRow>

          {/* Card Grid */}
          <StyledRow
              justify="space-between"
              align="middle"
              id={id}
              direction={"left"}
              gutter={[24, 24]} // Adds spacing between grid items
          >
            {content.slice(0, 3).map((item, index) => (
                <Col
                    key={index}
                    lg={8} // 3 cards per row on large screens
                    md={12} // 2 cards per row on medium screens
                    sm={24} // 1 card per row on small screens
                    xs={24} // 1 card per row on extra small screens
                >
                  <Card
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
                    <Meta title={item.title} description={item.date} />
                  </Card>
                </Col>
            ))}
          </StyledRow>
          </div>
        </Fade>
      </ContentSection>
  );
};

export default withTranslation()(CardListBlock);
