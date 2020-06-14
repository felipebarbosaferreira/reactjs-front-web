import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styles';

import { getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TaskCard({ type, title, when, done }) {

    const dateFormat = 'dd/MM/yyyy';
    const hourFormat = 'HH:mm';

    const date = useMemo(() => format(new Date(when), dateFormat), [when]);
    const hour = useMemo(() => format(new Date(when), hourFormat), [when]);

    return (
        <S.Container done={done} >
            <S.TopCard>
                <FontAwesomeIcon icon={ getIconByKey(type) } size="3x" />
                <h3>{ title }</h3>
            </S.TopCard>
            <S.BottomCard>
                <b>{ date }</b>
                <span>{ hour }</span>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;
