/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { SectionWrapper } from "../../styled";
import { AboutContentWrapper, AboutDetailWrapper, AboutHeadingWrapper, AboutInfoWrapper, AboutWrapper, ImageWrapper } from "./styled";
import arif from './../../../public/man.png';

export const About = () => {
  return (
    <SectionWrapper id="about" backgroundColor="white">
      <AboutWrapper>
        <AboutContentWrapper>
              <ImageWrapper>
                <Image
                src={arif}
                alt="Muhammad Arif picture"
                style={{
                  width: '60%',
                  height: '80%',
                }}          />
            </ImageWrapper>
          <AboutInfoWrapper>
            <AboutHeadingWrapper>Our Story</AboutHeadingWrapper>
            <AboutHeadingWrapper>Muhammad Arif - Founder & CEO</AboutHeadingWrapper>
            <br></br>
            <div style={{
              color: 'black',
            }}>
            <AboutDetailWrapper>
              Welcome to Feli Brands, your trusted source for high-quality
              cooking essentials and versatile natural products. We are
              passionate about bringing you the finest and purest offerings to
              enhance your well-being and elevate your daily routines.
            </AboutDetailWrapper>
            <br></br>
            <AboutDetailWrapper>
              With a rich family legacy in the farming business spanning
              generations, Arif brings a deep-rooted passion and expertise to
              our organization. His profound understanding of agriculture and
              commitment to sustainable practices drive our mission to deliver
              quality products to our customers.
            </AboutDetailWrapper>
            </div>
            <br></br>
          </AboutInfoWrapper>
        </AboutContentWrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
}