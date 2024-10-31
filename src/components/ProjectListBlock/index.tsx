import React from "react";
import { List, Card, Typography } from "antd";
import projects from "../../content/StudentProjectListContent.json";
import {
    cardTitleContainerStyle,
    cardTitleTextStyle,
    cardStyle,
    listGridSettings,
    contentContainerStyle,
    scrollContentStyle,
} from "./styles";

const { Paragraph } = Typography;

const ProjectListBlock = () => {
    return (
        <List
            grid={listGridSettings}
            dataSource={projects}
            renderItem={(project) => (
                <List.Item>
                    <Card hoverable style={cardStyle}>
                        {/* Title */}
                        <div style={cardTitleContainerStyle}>
                            <div style={cardTitleTextStyle}>{project.title}</div>
                        </div>

                        {/* Scrollable Content Container */}
                        <div style={contentContainerStyle}>
                            <div style={scrollContentStyle}>
                                {/* Abstract */}
                                <Paragraph>{project.abstract}</Paragraph>

                                {/* References */}
                                {project.references && project.references.length > 0 && (
                                    <Paragraph>
                                        <strong>References:</strong>
                                        <ul>
                                            {project.references.map((reference, index) => (
                                                <li key={index}>
                                                    <a
                                                        href={reference.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {reference.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </Paragraph>
                                )}

                                {/* Contact Information */}
                                {project.contacts && project.contacts.length > 0 && (
                                    <Paragraph>
                                        <strong>Contact:</strong> {project.contacts.join(", ")}
                                    </Paragraph>
                                )}
                            </div>
                        </div>
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default ProjectListBlock;