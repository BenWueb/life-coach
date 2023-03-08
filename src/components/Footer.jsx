import {
  FooterContainer,
  ContactContainer,
  CompanyContainer,
  ConnectContainer,
  FooterBackground,
} from "../components/styles/Footer.styled";

import { Container } from "../components/styles/Container.styled";

import {
  GrInstagram,
  GrPinterest,
  GrTwitter,
  GrFacebook,
  GrPhone,
  GrMail,
  GrLocation,
} from "react-icons/gr";

function Footer() {
  return (
    <>
      <FooterBackground>
        <Container>
          <FooterContainer>
            <ContactContainer>
              <h4>Contact Me</h4>
              <h5>
                <GrPhone style={{ height: "30px", width: "30px" }} />
                &nbsp; +1 555 5555
              </h5>
              <h5>
                <GrMail style={{ height: "30px", width: "30px" }} />
                &nbsp; contactus@ourwebsite.com
              </h5>
              <h5>
                <GrLocation style={{ height: "30px", width: "30px" }} />
                &nbsp; 555 Industry Road, Minneapolis, MN
              </h5>
            </ContactContainer>
            <CompanyContainer>
              <p>&copy; 2023 Jessica Thompson</p>
            </CompanyContainer>
            <ConnectContainer>
              <h4>Get In Touch</h4>
              <GrInstagram style={{ height: "30px", width: "30px" }} />
              <GrPinterest
                style={{ height: "30px", width: "30px", marginLeft: "10px" }}
              />
              <GrTwitter
                style={{ height: "30px", width: "30px", marginLeft: "10px" }}
              />
              <GrFacebook
                style={{ height: "30px", width: "30px", marginLeft: "10px" }}
              />
            </ConnectContainer>
          </FooterContainer>
        </Container>
      </FooterBackground>
    </>
  );
}
export default Footer;
