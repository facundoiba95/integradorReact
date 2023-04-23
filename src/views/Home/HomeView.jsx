import React, { useEffect } from 'react'
import MatchsRandom from '../../components/organisms/MatchsRandom/MatchsRandom'
import MatchsTodayLeagues from '../../components/organisms/MatchsTodayLeagues/MatchsTodayLeagues'
import Button from '../../components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import NavbarLeagues from '../../components/organisms/NavbarLeagues/NavbarLeagues'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatchesArgentina } from '../../redux/features/api/apiMatchesSlice'
import Loader from '../../components/molecules/Loader/Loader'

const HomeView = () => {
  const navigator = useNavigate();;
  const goMatchs = () => navigator('/matchs/leagues');
  const isLoading = useSelector(state => state.apiMatches.isLoading);

  //states Leagues
  const premierLeague = useSelector(state => state.apiMatches.premierLeague);
  const laLiga = useSelector(state => state.apiMatches.laLiga);
  const serieA = useSelector(state => state.apiMatches.serieA);
  const ligaArgentinaLocalStorage = JSON.parse(localStorage.getItem('ligaArgentina')) || [];
  const ligaArgentina = useSelector(state => state.apiMatches.ligaArgentina);
  const dispatch = useDispatch();

/*

      VERIFICAR SI LOS PARTIDOS SON DE LA FECHA ACTUAL

      Si son de la fecha actual retornar y no hacer peticiones a Apis, 
      caso contrario, hacer peticion a Apis para actualizar datos.

      
*/


   useEffect(() => {
    setInterval(()=> {
      dispatch(fetchMatchesArgentina())
   },900000)
    if(ligaArgentinaLocalStorage.length){
      return;
    } else {
      dispatch(fetchMatchesArgentina())
    }
   }, [])

  return (
    <>
       {/* <MatchsRandom/> */}
       <NavbarLeagues/>   
       <MatchsTodayLeagues titleLeague={'Liga Profesional Argentina'}  handleState={ligaArgentinaLocalStorage.length ? ligaArgentinaLocalStorage : ligaArgentina}/>
       <MatchsTodayLeagues titleLeague={'Premier League'} idLeague={2021} handleState={premierLeague}/> 
       <MatchsTodayLeagues titleLeague={'Serie A'} idLeague={2019} handleState={serieA}/>
       <MatchsTodayLeagues titleLeague={'Liga Española'} idLeague={2014} handleState={laLiga}/>
       <Button handleFunction={goMatchs} title={'Ver mas ligas'}/>
    </>
  )
}

export default HomeView