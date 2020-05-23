import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import { getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import isConnected from '../../utils/isConnected';

function Header({ viewNotifications }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
    .then( response => {
      setLateCount(response.data.length)
    });
  }

  async function logout() {
    await localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  useEffect(() => {
    lateVerify();
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>

        <span className="separator"></span>
        <Link to="/task">NOVA TAREFA</Link>

        <span className="separator"></span>
        {
          !isConnected  
          ? <Link to="/qrcode">SINCRONIZAR</Link>
          : <button type="button" onClick={logout}>SAIR</button>
        }
        
        {
          lateCount ?
          <>
            <span className="separator"></span>
            <button id="notification" type="button" onClick={() => viewNotifications()}>
              <FontAwesomeIcon icon={getIconByKey(4)} size="lg" />
              <span>{lateCount}</span>
            </button>
          </>
          : ""
        }

      </S.RightSide>
    </S.Container>
  );
}

export default Header;
