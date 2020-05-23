import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  // [nome var, nome funcao para atualizar a var do state]
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api.get(`/task/filter/${ filterActived }/00:19:B9:FB:E2:58`)
    .then( response => {
      setTasks(response.data)
    });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/00:19:B9:FB:E2:58`)
    .then( response => {
      setLateCount(response.data.length)
    });
  }

  function viewNotifications() {
    setFilterActived('late');
  }

  /**
   * Recarregamento das tasks
   * useEffect faz que toda vez que a tela carregar vai chamar loadTasks()
   * e tambem toda vez que filterActived alterar valor 
   */
  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  return (
    <S.Container>
      <Header lateCount={ lateCount } viewNotifications={ viewNotifications } />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={ filterActived === 'all' } />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={ filterActived === 'today' } />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={ filterActived === 'week' } />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={ filterActived === 'month' } />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={ filterActived === 'year' } />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>
          {
            filterActived === 'late' ? 'Tarefas atrasadas' : 'Tarefas'
          }
        </h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(it => (
            <Link to={`/task/${it._id}`}>
              <TaskCard type={ it.type } title={ it.title } when={ it.when } />
            </Link>
          ))
        }
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
