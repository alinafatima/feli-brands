/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { SectionWrapper } from "../../styled";
import { AboutContentWrapper, AboutInfoWrapper, AboutWrapper, ImageWrapper } from "./styled";

export const About = () => {
  return (
    <SectionWrapper id="about" backgroundColor="rgba(167, 143, 3, 0.1)">
      <AboutWrapper>
        <h2>Our Story</h2>
        <AboutContentWrapper>
              <ImageWrapper>
              <Image
                src={'/arif.jpg'}
                alt="Muhammad Arif picture"
                width={500}
                height={600}
              />
            </ImageWrapper>
          <AboutInfoWrapper>
            <h2>Muhammad Arif</h2>
            <br></br>
            <h2>Founder & CEO</h2>
            <br></br>
            <p>
              Welcome to Feli Brands, your trusted source for high-quality
              cooking essentials and versatile natural products. We are
              passionate about bringing you the finest and purest offerings to
              enhance your well-being and elevate your daily routines.
            </p>
            <br></br>
            <p>
              With a rich family legacy in the farming business spanning
              generations, Arif brings a deep-rooted passion and expertise to
              our organization. His profound understanding of agriculture and
              commitment to sustainable practices drive our mission to deliver
              quality products to our customers.
            </p>
            <br></br>
          </AboutInfoWrapper>
        </AboutContentWrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
}