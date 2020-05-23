import React from 'react';
import * as S from './styles';

import { getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/logo.png';

function Header({ lateCount, viewNotifications }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={ logo } alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="separator"></span>

        <a href="#">NOVA TAREFA</a>
        <span className="separator"></span>

        <a href="#">SINCRONIZAR</a>
        <span className="separator"></span>

        <button id="notification" type="button" onClick={() => viewNotifications() }>
          <FontAwesomeIcon icon={ getIconByKey(4) } size="lg" />
          <span>{ lateCount }</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
