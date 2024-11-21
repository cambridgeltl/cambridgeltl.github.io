import {Row, Col, Card, Avatar} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { PeopleBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { UserOutlined } from '@ant-design/icons';

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


const PeopleListBlock = ({
  title,
  content = [],
  button,
  t,
  id,
  fade_direction
}: PeopleBlockProps) => {

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
          </StyledRow>

          <StyledRow  id={id}  direction={"left"}
                      style={{ marginTop: "0px", marginRight: "60px" }}

                      gutter={4}>
            {content.map((item, index) => (
                <Col span={6}>

                  <Card
                      hoverable
                      style={{
                        width: 200,
                        height: 330,
                        marginTop : 20,
                      }}
                      onClick={item.link ? () => window.open(item.link, '_blank') : undefined}  // Conditionally apply the onClick event

                      // cover={<Photo src={item.photo} width="100%" height="100%" alt={item.title} />}
                      cover={
                        item.photo ? (
                            <CardPhoto
                                src={`/img/photo/${item.photo}`}
                                width="100%"
                                height="200px"
                                alt={item.title}
                                // onClick={() => window.open(item.link, '_blank')}  // Open link in a new tab
                            />
                        ) : (
                            <Avatar
                                shape="square"
                                size={200}
                                icon={<UserOutlined />}
                                style={{ width: '100%', height: '200px' }}  // Adjust to match the dimensions of the CardPhoto
                                // onClick={item.link ? () => window.open(item.link, '_blank') : undefined}  // Conditionally apply the onClick event

                            />
                        )
                      }
                  >
                    <Meta
                        title={
                          <div style={{ fontWeight: "bold", whiteSpace: "normal", wordWrap: "break-word" }}>
                            {item.name}
                          </div>
                        }
                        description={item.position}
                    />
                  </Card>
                </Col>
            ))}

          </StyledRow>

        </div>






      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(PeopleListBlock);
