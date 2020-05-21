import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png';

function FilterCard() {
  return (
    <S.Container>
        <img src={filter} alt="Filtro" />
        <span>Hoje</span>
    </S.Container>
  );
}

export default FilterCard;

// Attribution to filter png
{/* <div>Icons made by <a href="http://fontawesome.io/" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}