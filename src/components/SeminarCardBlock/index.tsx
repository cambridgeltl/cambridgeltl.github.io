import {Col, Badge, Card, Tooltip} from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import {SeminarCardBlockType} from "./types";
import { Button } from "../../common/Button";
import { message } from "antd";

import {
    ContentSection,
    Content,
    ContentWrapper,
    StyledRow,
    ButtonWrapper, StyledTitle, StyledContent, StyledUnderline, StyledAbstract
} from "./styles";

import {useState} from "react";

const SeminarCardBlock = ({
     content,
     show_detail = true,
}: SeminarCardBlockType) => {
    const [showFullAbstract, setShowFullAbstract] = useState(false);

    const toggleAbstract = () => {
        setShowFullAbstract(!showFullAbstract);
    };

    const truncateText = (text: string, limit: number) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                message.success("Copied Meeting Link to Clipboard!");
            })
            .catch(() => {
                message.error("Failed to Copy!");
            });
    };

    return (

        <Badge.Ribbon text={content.venue}>
            <Card size="small">

                <StyledTitle style={{maxWidth: "90%"}}>{content.title}</StyledTitle>


                <Tooltip placement="right" color={"#18216d"} title={content.bio}
                         overlayStyle={{maxWidth: "900px"}}  // Set the width or maxWidth
                         showArrow={false}
                >
                    <StyledContent>

                        {content.affiliation
                            ? `${content.speaker} (${content.affiliation})`
                            : content.speaker}
                    </StyledContent>
                </Tooltip>
                <StyledContent>
                    {(content.time + ", " + content.date)}
                </StyledContent>


                {content.place && show_detail && (
                    <div>
                        <StyledContent>
                            {(content.place)}
                        </StyledContent>
                    </div>

                )}
                {content.link && show_detail && (
                    <div>
                        <StyledAbstract>
                            <a onClick={() => copyToClipboard(content.link)} style={{ cursor: "pointer", color: "#18216d", textDecoration: "underline" }}>
                                Copy Link
                            </a>
                        </StyledAbstract>
                    </div>
                )}
                <br/>
                {!showFullAbstract && show_detail && (
                    <div>
                        <StyledAbstract>
                            {"Abstract: " + truncateText(content.abstract, 200)}
                        </StyledAbstract>
                        <StyledUnderline onClick={() => toggleAbstract()}>{"Find more..."}</StyledUnderline>
                    </div>
                )
                }
                <StyledAbstract>
                    {showFullAbstract && show_detail && (
                        "Abstract: " + content.abstract)
                    }
                </StyledAbstract>
            </Card>
        </Badge.Ribbon>

    );
};

export default withTranslation()(SeminarCardBlock);
