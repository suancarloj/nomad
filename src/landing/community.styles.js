import styled from 'styled-components';

export const Section = styled.section`
  background-image: url('/images/plant-blue-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 40px 20px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }
`;
