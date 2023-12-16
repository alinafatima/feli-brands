import styled from "styled-components";

export const AboutWrapper = styled.div`
 background-color: rgb(244, 248, 253);
 color: black;
 flex: 1;
 padding: 5vh;
`;

export const AboutContentWrapper= styled.div`
  margin: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(244, 248, 253);
  color: #2270E2;
  align-items: flex-start;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 2vh;
  flex: 1;
  width: 30vw;
  height: 50vh;
  justify-content: center;
  @media (max-width: 576px) {
    width: 65vw;
    margin: 0.5vw;
  }
`;


export const AboutInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  padding: 2vw;
  align-items: flex-start;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

export const AboutHeadingWrapper = styled.h2`
  text-align: left;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const AboutDetailWrapper = styled.p`
  text-align: left;

  @media (max-width: 576px) {
    text-align: center;
  }
`;