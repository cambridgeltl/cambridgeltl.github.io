import {Row, Col, Card} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { CardListBlockProps } from "./types";
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
  ButtonWrapper, StyledTitle, CardPhoto,
} from "./styles";



const { Meta } = Card;


const CardListBlock = ({
  title,
  content = [],
  button,
  t,
  id,
  fade_direction
}: CardListBlockProps) => {

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <ContentSection>
      <Fade direction={fade_direction}  triggerOnce>
        <div>

        <StyledRow
            justify="space-between"
            align="middle"
            id={id}
            direction={"left"}
        >
          {/* Left Column for the Title */}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <StyledTitle>{t(title)}</StyledTitle>
            </ContentWrapper>
          </Col>

          {/* Right Column for the Button */}
          <Col lg={4} md={11} sm={11} xs={24}>
            <ButtonWrapper>
              <Button key={"learn_more"}>
                {"More " + title}
              </Button>
            </ButtonWrapper>
          </Col>
        </StyledRow>

        <StyledRow justify="space-between" align="middle" id={id}  direction={"left"}
                   style={{ marginTop: "20px" }}  // Adds space above the second row

                   gutter={50}>
          {content.slice(0, 3).map((item, index) => (
              <Col span={8}>
              <Card
                  hoverable
                  style={{
                    // width: 240,
                    // height: 500,
                  }}
                  // cover={<Photo src={item.photo} width="100%" height="100%" alt={item.title} />}
                  cover={<CardPhoto src={`/img/photo/${item.photo}`} width="100%"  height="250px"  alt={item.title} />}
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
