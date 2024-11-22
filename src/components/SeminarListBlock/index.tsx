import {Col, Badge, Card, Tooltip} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SeminarListBlockType } from "./types";
import { Button } from "../../common/Button";
import {
    ContentSection,
    Content,
    ContentWrapper,
    StyledRow,
    ButtonWrapper, StyledTitle, StyledContent, StyledSmallTitle
} from "./styles";

import {useState} from "react";
import SeminarCardBlock from "../SeminarCardBlock";
import {StyledAbstract, StyledUnderline} from "../SeminarCardBlock/styles";

const SeminarListBlock = ({
                              upcoming_talks = [], completed_talks = [],
     t,
     id,
     direction,
     fade_direction,
}: SeminarListBlockType) => {


  return (
    <ContentSection>
      <Fade direction={fade_direction}  triggerOnce>
          <div>

        <StyledRow
            // align="top"
          justify="space-between"
          align="top"
          id={id}
          direction={direction}
        >

          <Col lg={12} md={12} sm={12} xs={24}>
            <StyledTitle>{t("Upcoming Talks")}</StyledTitle>
          {upcoming_talks.length > 0 && upcoming_talks.map((talk, index) => (
              <ContentWrapper
                  style={{marginBottom: "20px"}}
              >

                  <SeminarCardBlock
                      content={talk}
                      show_detail={true}
                  />
              </ContentWrapper>
          ))}
          </Col>
            <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper>
                    <StyledTitle>{"Previous Talks"}</StyledTitle>
                    {upcoming_talks.length > 0 && upcoming_talks.map((talk, index) => (
                        <ContentWrapper
                            style={{marginBottom: "20px"}}
                        >

                            <Card size="small">

                                <StyledSmallTitle style={{maxWidth: "90%"}}>{talk.title}</StyledSmallTitle>


                                <Tooltip placement="right" color={"#18216d"} title={talk.bio}
                                         overlayStyle={{maxWidth: "900px"}}
                                         showArrow={false}
                                >
                                    <StyledContent>

                                        {(talk.speaker + " (" + talk.affiliation + ")")}
                                    </StyledContent>
                                </Tooltip>
                                <StyledContent>
                                    {(talk.date)}
                                </StyledContent>

                            </Card>
                        </ContentWrapper>
                    ))}
                </ContentWrapper>
            </Col>
        </StyledRow>

          </div>

      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(SeminarListBlock);
