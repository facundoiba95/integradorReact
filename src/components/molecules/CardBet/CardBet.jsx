import React, { useEffect, useState } from 'react'
import { CardBetContainer } from './CardBetStyles'
import { GiCrossMark } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CardBet = ({
  teamHome, 
  teamAway,
  hour, 
  date, 
  league, 
  quantityBets,
  success,
  result,
  status,
  homeScore,
  awayScore,
  imgURLHome,
  imgURLAway,
  isBet,
  idMatch,
  draw
}) => {
const [ valueWinner, setValueWinner ] = useState('');
const matchBet = useSelector(state => state.apiMatches.matchesLeague.rewriteResponse);
const params = useParams();
const filterMatch = matchBet.filter(match => match.id == params.idMatch)
const user = useSelector(state => state.apiAuth.user);
/*

 Desde este componente se debe generar la apuesta.

 const bet = {
  user: {
    idUser: 1231231,
    nameuser: nombredeusuario,
  },
  match: {match de la apuesta, betTo: 'homeTeam' || 'awayTeam' || 'draw'},
  status: 'PENDING',
 }

 Para recibir codigo 200, se debe guardar la apuesta en la base de datos, sino codigo 400.
 El objeto enviado, se debe guardar como nuevo documento de la coleccion 'Bets'. Este documento
 se guardara con un ID, que servirá para buscar la apuesta el dia que finalice el match (status: 'FINISH').
 Al finalizar el match, se comparará la propiedad 'winner' del documento guardado en 'Bets',
 con la propiedad 'winner' actualizada del objeto obtenido en la API externa, y ahi se arrojaran los resultados
 segun cada caso.

 * Buscar solucion para la comparacion de status entre, el documento guardado en bdd y el obtenido por la API.
 Como sabe la base de datos que el match finalizo ?
 Comparar fecha actual con fecha del match ? Comparar status ?

*/

const generateBet = (e) => {
  setValueWinner(e.target.value)
  const bet = {
    user: {},
    match: filterMatch,
    status: 'TIMED',
    winner: valueWinner
  }
  console.log(bet);
}

useEffect(() => {
    console.log(matchBet);
    console.log(filterMatch);
    console.log(valueWinner);
    console.log(user);
}, [ valueWinner ])

  return (
    <CardBetContainer>
      <span className='teamsContainer'>
        <span className='team'>
         <img src={imgURLHome} alt="img" className='imgTeam'/>
         <p className='nameTeam'>{teamHome}</p>
        </span>
        <small>✗</small>
        <span className='team'>
          <img src={imgURLAway} alt="" className='imgTeam'/>
          <p className='nameTeam'>{teamAway}</p>
        </span>
      </span>
      <span className='betButtonsContainer'>
        <button className='buttonBet' value={'HOME_TEAM'} onClick={(e) => generateBet(e)}>Gana <strong>{teamHome}</strong></button>
        <button className='buttonBet' value={draw}>Empate</button>
        <button className='buttonBet' value={'AWAY_TEAM'} onClick={(e) => generateBet(e)}>Gana <strong>{teamAway}</strong></button>
      </span>
      <span className='matchDate'>
        <h4>Hora: {hour}</h4>
        <h4>Fecha: {date}</h4>
      </span>
      
    </CardBetContainer>
  )
}

export default CardBet