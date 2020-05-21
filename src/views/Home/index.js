import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  return (
    <S.Container>
      <Header />
      <FilterCard />
      <Footer />
    </S.Container>
  );
}

export default Home;
