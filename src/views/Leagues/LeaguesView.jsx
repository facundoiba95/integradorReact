import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import RankingTable from '../../components/molecules/RankingTable/RankingTable';
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables';
import { ApiContext } from '../../context/ApiContext';
import { ContainerDefaultStyle } from './LeaguesViewStyles';
import NavbarWithFilter from '../../components/organisms/NavbarWithFilter/NavbarWithFilter';
import { useDispatch, useSelector } from 'react-redux';
import { scorersStates } from '../../libs/getScorersStates';
import { fetchScorersByLeague, fetchScorersByLeagueArgentina } from '../../redux/features/api/apiScorersSlice';
import Loader from '../../components/molecules/Loader/Loader';
import { logoLeaguesByIdLeague } from '../../libs/getLogosLeagues';
import Scorers from '../../components/organisms/Scorers/Scorers';

const LeaguesView = () => {
    const { isAll, setIsAll } = useContext(ApiContext);
    const param = useParams();
    // const location = useLocation();
    const idLeague = Number(param.idLeague);
    // const dataScore = useSelector(state => idLeague == 152 ? state.apiScorers.scorersByLeagueArgentina : state.apiScorers.scorersByLeague);

    // const localStorageScorersArgentina = JSON.parse(localStorage.getItem('scorersLeagueArgentina'))
    // const localStorageScorers = JSON.parse(localStorage.getItem('scorersLeague'))

    const isLoading = useSelector(state => state.apiScorers.isLoading);
    const dispatch = useDispatch();
    
    useEffect(()=> {
       setIsAll(false)
      
       if(idLeague === 152){
         dispatch(fetchScorersByLeagueArgentina());
       } else {
         dispatch(fetchScorersByLeague(scorersStates[ idLeague ]))
       }
    },[ param.idLeague ])

  return (
    <ContainerDefaultStyle>
        <NavbarWithFilter/>
          <img src={logoLeaguesByIdLeague[idLeague]} alt="img logo" className='imgLeague'/>
          <ContainerTables isAll={isAll}>
            <RankingTable idLeague={idLeague}/>
          </ContainerTables> 
          <Scorers/>
    </ContainerDefaultStyle>

    
    )
}

export default LeaguesView