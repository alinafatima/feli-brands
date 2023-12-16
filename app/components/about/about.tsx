/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { SectionWrapper } from "../../styled";
import { AboutContentWrapper, AboutInfoWrapper, AboutWrapper, ImageWrapper } from "./styled";
import arif from './../../../public/arif.jpg';

export const About = () => {
  return (
    <SectionWrapper id="about" backgroundColor="white">
      <AboutWrapper>
        <h2>Our Story</h2>
        <AboutContentWrapper>
              <ImageWrapper>
              <Image
              src={arif}
              alt="Muhammad Arif picture"
              style={{
                width: '100%',
                height: '100%',
              }}          />
            </ImageWrapper>
          <AboutInfoWrapper>
            <h2>Muhammad Arif - Founder & CEO</h2>
            <br></br>
            <div style={{
              color: 'black',
            }}>
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
            </div>
            <br></br>
          </AboutInfoWrapper>
        </AboutContentWrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
}