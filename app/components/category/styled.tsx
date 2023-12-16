import styled from "styled-components";

export const CategoryImageWrapper = styled.div`
  justify-content: center;
  align-content: center;
  overflow: hidden;

`;

export const CategoryHeading = styled.h3`
  color: black;
  text-align: center;
  margin: 1vw;
  @media (max-width: 576px) {
    margin: 2vh;
  }
`;

export const CategoryDescription = styled.p`
  margin: 1vw;
  color: black;
  font-weight: 400;
  @media (max-width: 576px) {
    margin: 2vh;
  }
`;
