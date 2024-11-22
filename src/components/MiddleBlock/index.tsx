import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {MiddleBlockSection, Content, ContentWrapper, SocialIconContainer} from "./styles";
import {FooterContainer} from "../Footer/styles";
import {SvgIcon} from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  url?: string;
  t: TFunction;
}

interface SocialLinkProps {
  href: string;
  src: string;
}


const MiddleBlock = ({ title, content, button, url, t }: MiddleBlockProps) => {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit"
                        // onClick={() => scrollTo("mission")}
                        onClick={() => window.open(url, '_blank')}  // Conditionally apply the onClick event

                >
                  {/**/}

                  {t(button)}
                </Button>
              )}




            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
