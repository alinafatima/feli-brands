import styled from 'styled-components';


export const MainHeadingWrapper = styled.h2`
  text-align: center;
  margin-bottom: 4vw;
  font-family: Poppins, sans-serif;
  color: black;
  font-size: 2.5rem; 
  margin: 4vh; 
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 3vh;
  margin-top: 3vh;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;