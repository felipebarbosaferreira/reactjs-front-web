import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

function FilterCard({ title, actived }) {
  return (
    <S.Container actived={ actived } >
        <FontAwesomeIcon icon={ faFilter } size="lg" />
        <span>{ title }</span>
    </S.Container>
  );
}

export default FilterCard;

// Attribution to filter png
// <div>Icons made by <a href="http://fontawesome.io/" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>