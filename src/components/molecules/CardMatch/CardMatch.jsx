import React from 'react';
import { CardContainerStyle } from './CardMatchStyles';


const CardMatch = ({ 
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
  imgURLAway
 }) => {
  return (
    <CardContainerStyle status={status}>
        <span className='dateMatch'>
          <h4>{hour}</h4>
          <p>{date}</p>
          <p className='progress'>{status}</p>
        </span>
        <div className='containerTeam'>
            <span className='teamsMatchHome'>
              <img src={imgURLHome} alt="image from team 1" />
              <p>{teamHome}</p>
            </span>
            <span className='status'>
              <p className='vs'>{ 'VS' }</p>
              <span>
                <p>{homeScore}</p>
                <small>-</small>
                <p>{awayScore}</p>
              </span>
            </span>
            <span className='teamsMatchAway'>
              <img src={imgURLAway} alt="image from team 2" />
              <p>{teamAway}</p>
            </span>
        </div>
        <span className='containerBets'> 
          <small>Bets: {quantityBets}</small>
        </span>
    </CardContainerStyle>
  )
}

export default CardMatch