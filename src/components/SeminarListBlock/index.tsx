import {Col, Badge, Card, Tooltip} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SeminarListBlockType } from "./types";
import { useState } from "react";
import { Button } from "../../common/Button";
import {
    ContentSection,
    Content,
    ContentWrapper,
    StyledRow,
    StyledTitle,
    StyledContent,
    StyledSmallTitle,
} from "./styles";
import SeminarCardBlock from "../SeminarCardBlock";

const SeminarListBlock = ({
                              upcoming_talks = [],
                              completed_talks = [],
                              t,
                              id,
                              direction,
                              fade_direction,
                          }: SeminarListBlockType) => {
    const [visibleCount, setVisibleCount] = useState(10); // Show top 10 initially

    const handleLoadMore = () => {
        setVisibleCount(visibleCount + 10); // Show 10 more items on each click
    };

    return (
        <ContentSection>
            <Fade direction={fade_direction} triggerOnce>
                <div>
                    <StyledRow justify="space-between" align="top" id={id} direction={direction}>
                        {/* Upcoming Talks */}
                        <Col lg={12} md={12} sm={12} xs={24}>
                            {upcoming_talks.length > 0 && (
                                <StyledTitle>{t("Upcoming Talks")}</StyledTitle>
                            )}
                            {upcoming_talks.map((talk, index) => (
                                <ContentWrapper style={{ marginBottom: "20px" }} key={index}>
                                    <SeminarCardBlock content={talk} show_detail={true} />
                                </ContentWrapper>
                            ))}
                        </Col>

                        {/* Previous Talks */}
                        <Col lg={11} md={11} sm={11} xs={24}>
                            <ContentWrapper>
                                <StyledTitle>{t("Previous Talks")}</StyledTitle>
                                {completed_talks.slice(0, visibleCount).map((talk, index) => (
                                    <ContentWrapper style={{ marginBottom: "20px" }} key={index}>
                                        <Card size="small">
                                            <StyledSmallTitle style={{ maxWidth: "90%" }}>
                                                {talk.title}
                                            </StyledSmallTitle>
                                            <Tooltip
                                                placement="right"
                                                color={"#18216d"}
                                                title={talk.bio}
                                                overlayStyle={{ maxWidth: "900px" }}
                                                showArrow={false}
                                            >
                                                <StyledContent>
                                                    {talk.affiliation
                                                        ? `${talk.speaker} (${talk.affiliation})`
                                                        : talk.speaker}
                                                </StyledContent>
                                            </Tooltip>
                                            <StyledContent>{talk.date}</StyledContent>
                                        </Card>
                                    </ContentWrapper>
                                ))}
                                {visibleCount < completed_talks.length && (
                                    <Button
                                        onClick={handleLoadMore}
                                    >
                                        Load More
                                    </Button>
                                )}
                            </ContentWrapper>
                        </Col>
                    </StyledRow>
                </div>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(SeminarListBlock);
