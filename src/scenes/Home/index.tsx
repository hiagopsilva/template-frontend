import React from 'react';

import { Welcome } from '~/components';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <Welcome />
  </Container>
);

export default Home;
