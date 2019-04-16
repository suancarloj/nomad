import styled from 'styled-components';
import { InnerContainer as baseInnerContainer } from '../components/InnerContainer';
import { Text1 } from '../components/Text';

export const InnerContainer = styled(baseInnerContainer)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    > div {
      flex: 1;
    }
  }
`;

export const Section = styled.section`
  background-color: rgba(86, 102, 99, 0.05);
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }

  ${Text1} {
    margin-bottom: 20px;
  }
`;
