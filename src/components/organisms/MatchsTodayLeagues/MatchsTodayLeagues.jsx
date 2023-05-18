import React, { useEffect } from 'react'
import ContainerCards from '../../molecules/ContainerCards/ContainerCards'
import CardMatch from '../../molecules/CardMatch/CardMatch'
import TitleContainer from '../../atoms/TitleContainer/TitleContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchesArgentina, fetchMatchesToday } from '../../../redux/features/api/apiMatchesSlice';
import Loader from '../../molecules/Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import ItemMatch from '../../molecules/ItemMatch/ItemMatch';

const MatchsTodayLeagues = ({titleLeague, idLeague, handleState}) => {
    const isLoading = useSelector(state => state.apiMatches.isLoading);
    const dispatch = useDispatch();
    
    const renderItemsMatchesToday = () => {
      if(handleState.length >= 1){
      return handleState.map( match => {
        const { hour, date } = match;
        const teamHome = match.homeTeam === undefined ? match.teams.home.name : match.homeTeam.name;
        const teamAway = match.awayTeam === undefined ? match.teams.away.name : match.awayTeam.name;
        const league = match.competition === undefined ? match.league.name : match.competition.name
        const homeScore = match.score.fullTime === undefined ? match.score.fulltime.home : match.score.fullTime.home ;
        const awayScore = match.score.fullTime === undefined ? match.score.fulltime.away : match.score.fullTime.away ;
        const imgHome = match.homeTeam ? match.homeTeam.crest : match.teams.home.logo;
        const imgAway = match.awayTeam ? match.awayTeam.crest : match.teams.away.logo;
        const progress = match.status == 'IN_PLAY' ? 'LIVE' : match.status == 'FINISHED' ? 'FINISHED' :  match.status == 'PAUSED' ? 'PAUSED' :'';
      
        return (
          <CardMatch 
            teamHome={teamHome}
            teamAway={teamAway}
            hour={hour}
            date={date}
            league={league}
            quantityBets={145}
            success={true}
            imgURLHome={imgHome}
            imgURLAway={imgAway}
            homeScore={homeScore}
            awayScore={awayScore}
            status={progress}
            key={uuidv4()}
          />
        )
      })
    } else {
      return (
        <h4 style={{fontFamily:'Raleway'}}>{`Hoy no hay partidos en ${titleLeague}`}</h4>
      )
    }
    }

    useEffect(()=> {
      dispatch(fetchMatchesToday(idLeague))
    },[ dispatch ])

  return (
    <>
    <TitleContainer>{titleLeague}</TitleContainer>
    <ContainerCards >
        {isLoading 
        ? <Loader/>
        : <ItemMatch handleState={handleState} titleLeague={'asd'} idLeague={idLeague}/>
}
    </ContainerCards>
    </>
    
  )
}

export default MatchsTodayLeagues