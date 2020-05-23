import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { getMapIcons, getIconByKey } from '../../utils/typeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconCalendar = 5;
const iconClock = 6;

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [typeTaskSelected, setTypeTaskSelected] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState("00:19:B9:FB:E2:58");

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

    async function loadTaskDetail(id) {
        await api.get(`/task/${id}`, {
            macaddress,
            type: typeTaskSelected,
            title,
            description,
            when: `${date}T${hour}:00.000`,
        })
        .then(response => {
            setTypeTaskSelected(response.data.type)
            setId(response.data.id)
            setDone(response.data.done)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
            setMacaddress(response.data.macaddress)
        })
        .catch(() => {
            alert(`Error`); // TODO - implementar popover
        });
    }

    async function save() {
        if (match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress,
                done,
                type: typeTaskSelected,
                title,
                description,
                when: `${date}T${hour}:00.000`,
            })
            .then(() => {
                alert('Sucesso!'); // TODO - implementar popover
                setRedirect(true)
            })
            .catch(() => {
                alert(`Error`); // TODO - implementar popover
            });
        } else {
            await api.post('/task', {
                macaddress,
                type: typeTaskSelected,
                title,
                description,
                when: `${date}T${hour}:00.000`,
            })
            .then(() => {
                alert('Sucesso!'); // TODO - implementar popover
                setRedirect(true)
            })
            .catch(() => {
                alert(`Error`); // TODO - implementar popover
            });
        }
    }

    useEffect(() => {
        lateVerify();

        match.params.id && loadTaskDetail(match.params.id);
    }, []);

    return (
        <S.Container>
            {redirect && <Redirect to="/" />}
            <Header lateCount={lateCount} viewNotifications={viewNotifications} />

            <S.Content>
                <S.TypeIcons>
                    {
                        getMapIcons().map((it, index) => showIcons(it, index + 1))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text"
                        placeholder="nome da tarefa"
                        onChange={e => setTitle(e.target.value)}
                        value={title} />
                </S.Input>

                <S.Textarea>
                    <span>Descrição</span>
                    <textarea
                        rows={5}
                        placeholder="Detalhes da tarefa"
                        onChange={e => setDescription(e.target.value)}
                        value={description} />
                </S.Textarea>

                <S.Input>
                    <span>Data</span>
                    <input type="date"
                        placeholder="dd/mm/aaaa"
                        onChange={e => setDate(e.target.value)}
                        value={date} />
                    <FontAwesomeIcon icon={getIconByKey(iconCalendar)} size="lg" />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="hh:mm"
                        onChange={e => setHour(e.target.value)}
                        value={hour} />
                    <FontAwesomeIcon icon={getIconByKey(iconClock)} size="lg" />
                </S.Input>

                <S.Options>
                    <div>
                        <input
                            id="done"
                            name="done"
                            type="checkbox"
                            checked={done}
                            onChange={() => setDone(!done)} />
                        <label for="done">Concluída</label>
                    </div>
                    <button type="button">EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save}>SALVAR</button>
                </S.Save>

            </S.Content>

            <Footer />
        </S.Container>
    );
}

export default Task;
