import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { useHistory } from "react-router-dom";

import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>

        <CustomNavLinkSmall onClick={() => history.push("/people")}>
          <Span>{t("People")}</Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall onClick={() => history.push("/research")}>
          <Span>{t("Research")}</Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall onClick={() => history.push("/student_project")}>
          <Span>{t("Student Projects")}</Span>
        </CustomNavLinkSmall>


        <CustomNavLinkSmall onClick={() => history.push("/seminar")}>
          <Span>{t("Seminars")}</Span>
        </CustomNavLinkSmall>


        <CustomNavLinkSmall onClick={() => history.push("/resource")}>
          <Span>{t("Resources")}</Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall onClick={() => history.push("/news")}>
          <Span>{t("News & Events")}</Span>
        </CustomNavLinkSmall>



        {/*<CustomNavLinkSmall*/}
        {/*  style={{ width: "180px" }}*/}
        {/*  onClick={() => scrollTo("contact")}*/}
        {/*>*/}
        {/*  <Span>*/}
        {/*    <Button>{t("Contact")}</Button>*/}
        {/*  </Span>*/}
        {/*</CustomNavLinkSmall>*/}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="ltl_logo2.svg" width="220px" height="90px" />
          </LogoContainer>

          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
