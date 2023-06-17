import styled from 'styled-components';

interface ISectionWrapper {
  backgroundColor?: string;
  height?: string;
}

export const MainWrapper = styled.div`
  background-image: url(/mustard-field.jpeg);
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  align-self: center;
  background-size: cover;
  background-position: center;
`;

export const SectionWrapper = styled.div<ISectionWrapper>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: 100vw;
  padding: 5vw;
  background-color: ${(props) => props.backgroundColor};
`;

export const CategoryWrapper = styled.div`
  background-color: rgba(167, 143, 3, 0.1);
  color: #484a09;
  width: 20vw;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
  margin: 1vw;
  box-shadow: 5px 5px 8px rgba(72, 74, 9, 0.6);

  &:hover {
    transform: translateY(40px);
    transition: transform 0.3s ease-out;
  }
`;

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const MainHeadingWrapper = styled.h1`
  text-align: center;
  margin: 4vw;
  color: white;
  position: absolute;
  top: 37%;
  left: 47%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  font-family: serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const MainSubHeadingWrapper = styled.p`
  text-align: center;
  margin: 5vw;
  color: white;
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-family: serif;
`;

export const SectionsWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
