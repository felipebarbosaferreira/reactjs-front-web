import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { getMapIcons, getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconCalendar = 5;
const iconClock = 6;

function Task() {
    const [lateCount, setLateCount] = useState();
    const [typeTaskSelected, setTypeTaskSelected] = useState();

    async function lateVerify() {
        await api.get(`/task/filter/late/00:19:B9:FB:E2:58`)
            .then(response => {
                setLateCount(response.data.length)
            });
    }

    function viewNotifications() {
        // setFilterActived('late');
    }

    function showIcons(name, index) {
        return (
            <button type="button" onClick={() => setTypeTaskSelected(index)}>
                <S.IconTypeTask className={typeTaskSelected && typeTaskSelected != index && 'inative'}>
                    <FontAwesomeIcon icon={name} size="lg" />
                </S.IconTypeTask>
            </button>
        )
    }

    useEffect(() => {
        lateVerify();
    }, []);

    return (
        <S.Container>
            <Header lateCount={lateCount} viewNotifications={viewNotifications} />

            <S.Content>
                <S.TypeIcons>
                    {
                        getMapIcons().map((it, index) => showIcons(it, index + 1))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="nome da tarefa"></input>
                </S.Input>

                <S.Textarea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa" />
                </S.Textarea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="dd/mm/aaaa"></input>
                    <FontAwesomeIcon icon={ getIconByKey(iconCalendar) } size="lg" />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="hh:mm"></input>
                    <FontAwesomeIcon icon={ getIconByKey(iconClock) } size="lg" />
                </S.Input>

                <S.Options>
                    <div>
                        <input id="done" name="done" type="checkbox" />
                        <label for="done">Concluída</label>
                    </div>
                    <button type="button">EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type="button">SALVAR</button>
                </S.Save>

            </S.Content>

            <Footer />
        </S.Container>
    );
}

export default Task;
