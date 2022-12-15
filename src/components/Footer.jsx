import React from "react";
import styled from "styled-components";
import IconFacebook from "../assets/icons/facebook.png";
import IconTwitter from "../assets/icons/twitter.png";
import IconInstagram from "../assets/icons/instagram.png";
import IconYoutube from "../assets/icons/youtube.png";
export default function Footer() {
  return (
    <Container>
      <Row>
        <Column>
          <Heading>Support</Heading>
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">Our COVID-19 Response</FooterLink>
          <FooterLink href="#">Cancellation options</FooterLink>
          <FooterLink href="#">Safety information</FooterLink>
        </Column>
        <Column>
          <Heading>Company</Heading>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Community Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Terms of service</FooterLink>
        </Column>
        <Column>
          <Heading>Contact</Heading>
          <FooterLink href="#">Partnerships</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Get in touch</FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterSocial>
            <FooterLink href="#">
              <img alt="facebook" src={IconFacebook} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="twitter" src={IconTwitter} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="insta" src={IconInstagram} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="youtube" src={IconYoutube} width="40px" />
            </FooterLink>
          </FooterSocial>
        </Column>
      </Row>
      <CopyrightWrapper>© Copyright BK Circus Team 2022</CopyrightWrapper>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 90px;
  background: #F7F8FA; 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  max-width: 1406px;
  width: 100%;
  padding: 0 15px 50px 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  border-bottom: 1px solid #D9D9D9;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLink = styled.a`
  color: #727272;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-gap: 1rem;
`;

export const Heading = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #232323;
  margin-bottom: 20px;
`;
export const CopyrightWrapper = styled.p`
  text-align: center;
  padding: 30px;
  font-size: 14px;
  color: #727272;
  font-weight: 400;
`;