import styled from 'styled-components';

import { Background, Logo } from '~/assets';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;

  background: #fff;
`;

export const Content = styled.div`
  display: flex;
`;

export const WrapperBackground = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${Background});

  display: flex;
  width: 680px;
`;

export const Image = styled.img.attrs({
  src: `${Logo}`,
})`
  margin: auto;
`;
