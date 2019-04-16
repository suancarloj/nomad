import styled from 'styled-components';
import { Text1, Text2 } from '../components/Text';
import { InnerContainer } from '../components/InnerContainer';
import { Heading2 } from '../components/Heading';

export const Section = styled.section`
  background-color: rgba(86, 102, 99, 0.05);
  padding: 40px 20px;
  ${InnerContainer} {
    max-width: 960px;
  }
  .partner-logo-container {
    display: flex;
  }
  ${Text1}, ${Text2} {
    display: none;
  }
  .backer + .backer {
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-top: 100px;
    .partner-logo-container > div {
      flex: 1;
    }
    ${Heading2} {
      text-align: center;
    }
    ${Text1} {
      display: block;
      text-align: center;
      max-width: 80%;
      margin: 0 auto 50px;
    }
    ${Text2} {
      display: block;
    }
    img {
      margin-bottom: 20px;
    }
  }
`;
