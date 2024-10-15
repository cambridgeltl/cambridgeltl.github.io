import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container border={false}>
          <Row
              align="middle"
          >
            <Col lg={14} md={10} sm={12} xs={12}>
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                      src="cambridge_logo.svg"
                      aria-label="homepage"
                      width="200px"
                      height="64px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
            {/* Right side - Contact Information */}
            <Col lg={10} md={10} sm={12} xs={12} style={{ textAlign: "right" }}>
              <div style={{ textAlign: "center" }} >
                <Empty />
                <Language>{t("Find Us:")}</Language>
                <Para>Language Technology Lab (LTL)</Para>
                <Para>Dept. of Theoretical & Applied Linguistics</Para>
                <Para>University of Cambridge</Para>
                <Para>English Faculty Building, 9 West Road</Para>
                <Para>Cambridge CB3 9DA, United Kingdom</Para>
                <Para>Tel: +44 (0)1223 335010</Para>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>


    </>
  );
};

export default withTranslation()(Footer);
