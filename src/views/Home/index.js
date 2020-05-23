import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  // [nome var, nome funcao para atualizar a var do state]
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api.get(`/task/filter/${ filterActived }/00:19:B9:FB:E2:58`)
    .then( response => {
      setTasks(response.data)
    })
    .catch();
  }

  /**
   * Recarregamento das tasks
   * useEffect faz que toda vez que a tela carregar vai chamar loadTasks()
   * e tambem toda vez que filterActived alterar valor 
   */
  useEffect(() => {
    loadTasks();
  }, [filterActived]);

  return (
    <S.Container>
      <Header />
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
          Tarefas
        </h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(it => (
            <TaskCard type={ it.type } title={ it.title } when={ it.when } />
          ))
        }
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
