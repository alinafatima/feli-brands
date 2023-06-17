/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SectionWrapper } from '../../styled';
import Insta from '../../icons/insta';
import WhatsApp from '../../icons/whatsapp';
import Facebook from '../../icons/facebook';
import { SocialMediaIconWrapper, SocialMediaWrapper } from './styled';

const Contact = () => {
  return (
    <SectionWrapper id="contact" backgroundColor="#F7F7F7" height="50vh">
      <h1>Have questions? Let's get in touch.</h1>
      <SocialMediaWrapper>
        <SocialMediaIconWrapper>
          <WhatsApp />
        </SocialMediaIconWrapper>
        <SocialMediaIconWrapper>
          <Facebook />
        </SocialMediaIconWrapper>
        <SocialMediaIconWrapper>
          <Insta />
        </SocialMediaIconWrapper>
      </SocialMediaWrapper>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Email:</strong> example@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 123-456-7890
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
