import {Col, Badge, Card, Tooltip, Result} from "antd";
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
import SeminarContent from "../../content/SeminarContent.json";
import {LoadingOutlined} from "@ant-design/icons";

const SeminarHighlightBlock = ({
     title,
     content = [],
     instruction,
     button,
     t,
     id,
     direction,
     fade_direction,
}: SeminarHighlightBlockType) => {

    const today = new Date();
    const parsedSeminars = SeminarContent.map((seminar) => {
        const seminarDate = new Date(seminar.date);
        return { ...seminar, seminarDate };
    });



    const upcoming_talks = parsedSeminars.filter((seminar) => seminar.seminarDate >= today);

    const highlight_seminar = upcoming_talks.length > 0 ? upcoming_talks[0] : null;


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
              {highlight_seminar ? (

              <Badge.Ribbon text={highlight_seminar.venue}>
                <Card size="small">


                    <StyledTitle style={{ maxWidth: "90%" }}>{highlight_seminar.title}</StyledTitle>


                    <Tooltip placement="right"   color={"#18216d"}  title={highlight_seminar.bio}
                             overlayStyle={{ maxWidth: "900px" }}  // Set the width or maxWidth
                            showArrow={false}
                    >                    <StyledContent>

                        {(highlight_seminar.speaker + " (" + highlight_seminar.affiliation + ")")}
                    </StyledContent>

                </Tooltip>
                    <StyledContent>
                        {(highlight_seminar.time + ", " + highlight_seminar.date)}
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




              )
              :
                  <ContentWrapper>
                      <Result
                          icon={<LoadingOutlined style={{ color: "#18216d"}} />}
                          title={
                              <span style={{ color: "#18216d" }}>
                                              More exciting talks coming at the start of the next term!
                                            </span>
                          }

                      />
                  </ContentWrapper>
              }
            </ContentWrapper>

          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{(instruction)}</Content>
            </ContentWrapper>

          </Col>
        </StyledRow>

          </div>

      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(SeminarHighlightBlock);
