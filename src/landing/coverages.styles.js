import styled from 'styled-components';
import { Text1, Text3 } from '../components/Text';
import { InnerContainer as baseInnerContainer } from '../components/InnerContainer';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  ${Text1} {
    margin-bottom: 40px;
  }
  ${Text3} {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export const InnerContainer = styled(baseInnerContainer)`
  display: flex;
  .content {
    padding: 20px;
  }

  > .image {
    font-size: 0;
    display: none;
    max-width: 400px;
    width: 100%;

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    column-count: 2;
  }
`;

export const ListItem = styled.li`
  align-items: center;
  break-inside: avoid;
  display: flex;
  list-style-position: inside;
  min-height: 46px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  img {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
`;
