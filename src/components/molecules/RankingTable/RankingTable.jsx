import React, { useEffect } from 'react'
import { ContainerTableStyle, ItemTableStyle, TitleRankingStatsStyle } from './RankingTableStyles'
import TitleContainer from '../../atoms/TitleContainer/TitleContainer'
import { useDispatch, useSelector } from 'react-redux'
import iconFutbol from '../../../../iconFutbol.png'
import Loader from '../Loader/Loader'
import { fetchApiLeagues } from '../../../redux/features/api/apiLeagueSlice'
import { leagueStates } from '../../../libs/getLeagueStates'
import { useParams } from 'react-router-dom'

const RankingTable = ({idLeague}) => {
  const isLoading = useSelector(state => state.apiLeagues.isLoading);
  const dispatch = useDispatch();
  const dataLeague = useSelector(state => state.apiLeagues[leagueStates[idLeague]]);
  const params = useParams();

  
  const renderItemRanking = (dataLeague) => {
    if(dataLeague[0] === undefined) return; // Condicion para que al cargar no tire error undefined
    return dataLeague[0].rank.map(team => {
      const name = team.fullName;
      const imgUrl = team.images.urlLogo[1] ? team.images.urlLogo[1] : iconFutbol;
      const { drawn, lost, played, points, position, won } = team.standing;
      
      return (
        <ItemTableStyle key={team.id}>
           <span className='infoTeamRanking' >
             <p>{position}</p>
             <img src={imgUrl} alt="img" />
             <small>{name}</small>
           </span>

           <span className='statsTeamRanking'>
             <p>{played}</p>
             <p>{won}</p>
             <p>{lost}</p>
             <p>{drawn}</p>
             <p><strong>{points}</strong></p>
           </span>
         </ItemTableStyle>
      )
    })
  }

  const renderNameLeague = (dataLeague) => {
    if(dataLeague[0] === undefined) return;
    return dataLeague[0].classificationHead.tournament.name;
  }


  useEffect(() => {
    dispatch(fetchApiLeagues(idLeague))
 }, [ params.idLeague ])


  return (
    <>
    { isLoading === true
    ? <Loader/>
    : <>
       <ContainerTableStyle>
       <TitleContainer>{renderNameLeague(dataLeague)}</TitleContainer>
          <TitleRankingStatsStyle>
            <small>Jugados</small>
            <small>Ganados</small>
            <small>Perdidos</small>
            <small>Empatados</small>
            <small>Puntos</small>
          </TitleRankingStatsStyle>
          { renderItemRanking(dataLeague) }
       </ContainerTableStyle>  
    </>}
    
    </>

)
}

export default RankingTable