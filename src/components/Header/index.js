import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="separator"></span>

        <a href="#">NOVA TAREFA</a>
        <span className="separator"></span>

        <a href="#">SINCRONIZAR</a>
        <span className="separator"></span>

        <a href="#" id="notification">
          <img src={bell} alt="Notificação"/>
          <span>3</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
