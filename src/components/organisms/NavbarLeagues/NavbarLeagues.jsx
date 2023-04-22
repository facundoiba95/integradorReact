import React, { useEffect } from 'react'
import { NavLeaguesItemStyle, NavLeaguesStyle } from './NavbarLeaguesStyles'
import { useDispatch } from 'react-redux'
import { fetchApiLeagues } from '../../../redux/features/api/apiLeagueSlice';
import { useNavigate } from 'react-router-dom';

const NavbarLeagues = () => {
const navigator = useNavigate()
const dispatch = useDispatch();

const goRankingLeagues = (e) => {
   const id = Number(e.target.dataset.idleague);
   localStorage.setItem('idLeague', id)
   dispatch(fetchApiLeagues())
   window.scrollTo(0,0)
   navigator('/ranking/league')
}

  return (
    <NavLeaguesStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='152'>LIGA ARGENTINA</NavLeaguesItemStyle>       
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='103'>CHAMPIONS LEAGUE</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='109'>LIGUE 1</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='107'>SERIE A</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='165'>COPA LIBERTADORES</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='106'>PREMIER LEAGUE</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goRankingLeagues(e)} data-idleague='122'>LA LIGA</NavLeaguesItemStyle>
    </NavLeaguesStyle>
  )
}

export default NavbarLeagues