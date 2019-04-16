import styled from 'styled-components';

export const PrimaryButton = styled.button`
  height: 60px;
  background-color: #fd5353;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: 0;
  padding: 0 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #fd5353;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border: 0;
  width: 100%;
  position: relative;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: auto;
  }
  &.with-icon {
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    padding-left: 50px;
  }
`;
