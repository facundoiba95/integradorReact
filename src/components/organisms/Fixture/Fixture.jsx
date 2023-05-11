import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatches, fetchMatchesArgentina } from '../../../redux/features/api/apiMatchesSlice';
import { useParams } from 'react-router-dom';
import { isCup, matchesLeague } from '../../../libs/getMatchesLeague';
import ContainerCards from '../../molecules/ContainerCards/ContainerCards';
import CardMatch from '../../molecules/CardMatch/CardMatch';
import { TitleStyle } from '../../atoms/TitleContainer/TitleContainerStyles';
import ItemMatch from '../../molecules/ItemMatch/ItemMatch';
import Loader from '../../molecules/Loader/Loader';

const Fixture = () => {
   const getMatches = useSelector(state => state.apiMatches.matchesLeague);
   const getMatchesArgentina = useSelector(state => state.apiMatches.ligaArgentina);
   const isLoading = useSelector(state => state.apiMatches.isLoading);
   const dispatch = useDispatch();
   const params = useParams();

   const handleIsCup = () => {
    const isCupLeague = isCup[matchesLeague[params.idLeague]];
    const matches = isCupLeague ? getMatches.scheduledMatchesCup : getMatches;
    const titlePrefix = isCupLeague ? '' : 'Fecha ';
    // const currentMatchday = params.idLeague == 152 ? getMatchesArgentina.previusMatchday[0].currentMatchday : getMatches.previusMatchday[0].currentMatchday
    return (
      <>

      {
        isCup[matchesLeague[params.idLeague]]
        ? <> 
            <TitleStyle>Próxima fecha</TitleStyle>
            <ItemMatch handleState={matches} titleLeague="asca" />
            <br />  
          </>
        : <>
            <TitleStyle>{titlePrefix}anterior</TitleStyle>
            <ItemMatch handleState={params.idLeague == 152 ? getMatchesArgentina.previusMatchday : getMatches.previusMatchday} titleLeague="asd" />
            <br />
            <TitleStyle>{titlePrefix}actual:</TitleStyle>
            <ItemMatch handleState={params.idLeague == 152 ? getMatchesArgentina.currentMatchday : getMatches.currentMatchday} titleLeague="ascas" />
            <br />
            <TitleStyle>Próxima fecha</TitleStyle>
            <ItemMatch handleState={params.idLeague == 152 ? getMatchesArgentina.nextMatchday : getMatches.nextMatchday} titleLeague="asca" />
            <br />
          </>
      }

      </>
    )
  };



   useEffect(()=> {
     if(params.idLeague == 152){
      dispatch(fetchMatchesArgentina())
      console.log(getMatchesArgentina);
      console.log('renderizooo');
      return;
     } else {
      dispatch(fetchMatches(matchesLeague[params.idLeague]))
      return;
     }
   },[ params.idLeague ])

  return (
    <ContainerCards>
      {
        isLoading
        ? <Loader/>
        : handleIsCup()
      } 
    </ContainerCards>
  )
}

export default Fixture



