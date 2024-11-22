import {Col, Badge, Card, Tooltip} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SeminarNextBlockType } from "./types";
import { Button } from "../../common/Button";
import {
    ContentSection,
    Content,
    ContentWrapper,
    StyledRow,
    ButtonWrapper, StyledTitle, StyledContent, StyledUnderline, StyledAbstract
} from "./styles";

import {useState} from "react";

const SeminarNextBlock = ({
     title,
     content,
     instruction,
     button,
     t,
     id,
     direction,
     fade_direction,
}: SeminarNextBlockType) => {


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

              <Badge.Ribbon text={content.venue}>
                <Card size="small">


                    <StyledTitle style={{ maxWidth: "90%" }}>{content.title}</StyledTitle>


                    <Tooltip placement="right"   color={"#18216d"}  title={content.bio}
                             overlayStyle={{ maxWidth: "900px" }}  // Set the width or maxWidth
                            showArrow={false}
                    >
                        <StyledContent>

                    {(content.speaker + " (" + content.affiliation + ")")}
                    </StyledContent>
                </Tooltip>
                    <StyledContent>
                        {(content.time + ", " + content.date)}
                    </StyledContent>



                    {content.place && (
                        <StyledContent>
                            {(content.place)}
                        </StyledContent>
                    )}
                    <br/>
                    {!showFullAbstract && (
                        <div>
                            <StyledAbstract>
                                {"Abstract: " + truncateText(content.abstract, 200)}
                            </StyledAbstract>
                            <StyledUnderline onClick={() =>  toggleAbstract()}>{"Find more..."}</StyledUnderline>
                        </div>
                        )
                    }
                    <StyledAbstract>
                        {showFullAbstract && (
                            "Abstract: " + content.abstract)
                        }
                    </StyledAbstract>

                    <ButtonWrapper>



                        {content.link && (
                            <Button

                                onClick={() => window.open(content.link, "_blank")}  // Open link in a new tab
                            >
                                Join Zoom Meeting
                            </Button>
                        )}
                    </ButtonWrapper>

                </Card>
              </Badge.Ribbon>





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

export default withTranslation()(SeminarNextBlock);
