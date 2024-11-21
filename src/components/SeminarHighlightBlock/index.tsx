import {Col, Badge, Card, Tooltip} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SeminarHighlightBlockType } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  ButtonWrapper, StyledTitle, StyledContent
} from "./styles";

import {useState} from "react";

const SeminarHighlightBlock = ({
     title,
     content = [],
     button,
     t,
     id,
     direction,
     fade_direction,
}: SeminarHighlightBlockType) => {


  const highlight_seminar = content.length > 0 ? content[1] : null;
    // State to handle abstract toggle
    const [showFullAbstract, setShowFullAbstract] = useState(false);

    // Function to toggle abstract visibility
    const toggleAbstract = () => {
        setShowFullAbstract(!showFullAbstract);
    };

    // Function to truncate text to the first 100 characters
    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={fade_direction}  triggerOnce>
          <div>


        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={12} md={11} sm={12} xs={24}>

            <ContentWrapper>
              {highlight_seminar && (

              <Badge.Ribbon text={highlight_seminar.venue}>
                <Card size="small">


                    <StyledTitle style={{ maxWidth: "90%" }}>{highlight_seminar.title}</StyledTitle>


                    <Tooltip placement="right"   color={"#18216d"}  title={highlight_seminar.bio}
                             overlayStyle={{ maxWidth: "900px" }}  // Set the width or maxWidth
                            showArrow={false}
                    >                    <StyledContent>

                    {("By "+ highlight_seminar.speaker )}
                    </StyledContent>

                </Tooltip>
                    <StyledContent>
                        {("When: " + highlight_seminar.time + ", " + highlight_seminar.date)}
                    </StyledContent>



                    {highlight_seminar.place && (
                        <StyledContent>
                            {("Where: " + highlight_seminar.place)}
                        </StyledContent>
                    )}


                    <StyledContent>
                        {showFullAbstract && (
                            "Abstract: " + highlight_seminar.abstract)
                        }
                    </StyledContent>

                    <ButtonWrapper>



                        {highlight_seminar.link && (
                            <Button

                                onClick={() => window.open(highlight_seminar.link, "_blank")}  // Open link in a new tab
                            >
                                Join Zoom Meeting
                            </Button>
                        )}
                    </ButtonWrapper>

                </Card>
              </Badge.Ribbon>




              )}
            </ContentWrapper>

          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t("LTL Seminars")}</h6>
              <Content>{("LTL seminars are held every Thursday during term time, either in person at the English Faculty Building or online. Some in-person seminars may also offer a hybrid option for remote participation. We welcome attendees from the University and the wider public.")}</Content>
            </ContentWrapper>

          </Col>
        </StyledRow>

          </div>

      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(SeminarHighlightBlock);
