import styled from 'styled-components';
import { Text1 } from '../components/Text';

export const Section = styled.section`
  padding: 40px 20px;
  ${Text1} {
    margin-bottom: 20px;
  }
`;

export const RuleList = styled.ul`
  @media screen and (min-width: 768px) {
    column-count: 2;
    padding: 0 0 0 20px;
    li {
      break-inside: avoid;
      list-style-position: inside;
    }
  }
`;
