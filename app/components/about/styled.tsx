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
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 248, 253);
  color: #2270E2;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 2vh;
  display: flex;
  width: 30vw;
  height: 50vh;
  justify-content: flex-end;
  border: 5px solid  #2270E2;
  border-radius: 50%;
  @media (max-width: 576px) {
    width: 85vw;
    margin: 1vw;
  }
`;


export const AboutInfoWrapper = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 2vw;
`;