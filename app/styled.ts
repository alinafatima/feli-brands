import styled from 'styled-components';

interface ISectionWrapper {
  backgroundColor?: string;
  height?: string;
}

export const MainWrapper = styled.div`
  background-image: url(/background-image.png);
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;

  &::before {
    content: ''; 
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4); 
    z-index: 1; 
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const SectionWrapper = styled.div<ISectionWrapper>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: 100vw;
  padding: 5vw;
  background-color: ${(props) => props.backgroundColor};
`;

export const CategoryWrapper = styled.div`
  background-color: #F4F8FD; 
  width: 20vw;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
  margin: 1vw;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(40px);
    transition: transform 0.3s ease-out;
  }

  @media (max-width: 576px) {
    width: 95%;
    margin: 1vh;
  }
`;

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const MainHeadingWrapper = styled.h1`
  text-align: left;
  margin: 4vw;
  color: white;
  position: absolute;
  top: 37%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-family: Poppins, sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const MainSubHeadingWrapper = styled.p`
  text-align: left;
  margin: 5vw;
  color: white;
  position: absolute;
  top: 60%;
  left: 29%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-family: Poppins, sans-serif;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const SectionsWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
