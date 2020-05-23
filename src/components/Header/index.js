import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import { getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api';

import logo from '../../assets/logo.png';

function Header({ viewNotifications }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/00:19:B9:FB:E2:58`)
    .then( response => {
      setLateCount(response.data.length)
    });
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
        <Link to="/qrcode">SINCRONIZAR</Link>

        {
          lateCount &&
          <>
            <span className="separator"></span>
            <button id="notification" type="button" onClick={() => viewNotifications()}>
              <FontAwesomeIcon icon={getIconByKey(4)} size="lg" />
              <span>{lateCount}</span>
            </button>
          </>
        }

      </S.RightSide>
    </S.Container>
  );
}

export default Header;
