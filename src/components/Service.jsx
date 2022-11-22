import React from "react";
import styled from "styled-components";
import img1 from "../assets/contact.png";
export default function Service() {
  return (
    <Section id="service">
      <div className="contactImg">
      <img src={img1} alt="" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 20px 10px;
  text-align: center;
  img {
    width: 100%;
  }
 
  
`;
