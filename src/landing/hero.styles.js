import styled from 'styled-components';
import { InnerContainer as baseInnerContainer } from '../components/InnerContainer';

export const Section = styled.section`
  background-color: rgb(230, 245, 242);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 450px;
`;

export const InnerContainer = styled(baseInnerContainer)`
  img {
    width: 100%;
  }

  button {
    margin-bottom: 20px;
  }

  .content {
    padding: 20px 20px 40px 20px;
  }
  .backed-by {
    display: flex;
    align-items: center;
  }
  .backed-by img {
    margin-left: 6px;
    max-width: 65px;
  }
`;
