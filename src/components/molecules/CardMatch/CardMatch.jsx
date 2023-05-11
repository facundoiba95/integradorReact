import React from 'react';
import { CardContainerStyle } from './CardMatchStyles';
import { useNavigate, useParams } from 'react-router-dom';


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
  imgURLAway,
  isBet,
  idMatch
 }) => {
  const navigator = useNavigate();
  const params = useParams();

  const goProde = (e) => {
     const idMatch = e.target.dataset.idmatch;
     params.idMatch = idMatch;
     window.scrollTo(0,0)
     navigator(`/prode/league/${params.idLeague}/${params.idMatch}`)
  }
  return (
    <CardContainerStyle status={status} isBet={isBet}>
        <span className='dateMatch'>
          <h4>{hour}</h4>
          <p>{date}</p>
          <p className='progress'>{status}</p>
        </span>
        <div className='containerTeam'>
            <span className='teamsMatchHome'>
              <img src={imgURLHome} alt="image from team 1" />
              <p className='nameTeam'>{teamHome}</p>
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
              <p className='nameTeam'>{teamAway}</p>
            </span>
        </div>
        <span className='containerBets'> 
          <small>Bets: {quantityBets}</small>
        </span>
        <small className='goBet' data-idmatch={idMatch} onClick={(e) => goProde(e)}>{isBet}</small>
    </CardContainerStyle>
  )
}

export default CardMatch