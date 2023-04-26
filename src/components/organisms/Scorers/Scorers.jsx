import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TableContainerStyles } from './ScorersStyles';

const Scorers = () => {
  // const localStorageScorersArgentina = JSON.parse(localStorage.getItem('scorersLeagueArgentina'))
  // const localStorageScorers = JSON.parse(localStorage.getItem('scorersLeague'))
  const params = useParams();
  const dataScore = useSelector(state => params.idLeague == 152 ? state.apiScorers.scorersByLeagueArgentina : state.apiScorers.scorersByLeague);

  const renderScorers = (dataScore) => {
    let position = 0;
    return dataScore.map(item => {
      const namePlayer = item.player.name;
      const nameTeam = item.statistics === undefined ? item.team.name : item.statistics[0].team.name ;
      const goals = item.goals ? item.goals : item.statistics[0].goals.total; ;
      const id = item.player.id;
      const imgTeam = item.statistics === undefined ? item.team.crest : item.statistics[0].team.logo;
      const assists = item.statistics === undefined ? item.assists : item.statistics[0].goals.assists;

      return (
        <tr key={id} className='tr'>
          <td className='td'>{position= position+1}</td>
          <td className='td'>{namePlayer}</td>
          <td className='td team'>
            <img src={imgTeam}/>
            {nameTeam}
          </td>
          <td className='td'>{assists}</td>
          <td className='td'>{goals}</td>
        </tr>
      )
    })
  }


  return (
    <div>
 <TableContainerStyles>
  <thead className='headTable'>
    <tr className='head'>
      <th className='th'>Rank</th>
      <th className='th'>Jugador</th>
      <th className='th'>Equipo</th>
      <th className='th'>Asistencias</th>
      <th className='th'>Goles</th>
    </tr>
  </thead>
  <tbody>
    {renderScorers(dataScore)}
  </tbody>
</TableContainerStyles>
    </div>
  )
}

export default Scorers