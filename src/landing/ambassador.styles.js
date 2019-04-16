import styled from 'styled-components';
import { Text2 } from '../components/Text';
import { InnerContainer as baseInnerContainer } from '../components/InnerContainer';

export const Section = styled.section`
  background-color: #fff4d3;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Description = styled(Text2.withComponent('p'))``;

export const InnerContainer = styled(baseInnerContainer)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  > div {
    flex: 1;
  }
  > .image {
    font-size: 0;
  }
  > .image img {
    max-width: 100%;
  }

  > .content {
    padding: 20px;
  }
`;
