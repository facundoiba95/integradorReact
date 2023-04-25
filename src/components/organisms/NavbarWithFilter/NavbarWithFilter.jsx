import React from 'react'
import { NavbarFilterContainerStyles, SelectStyles, customStylesSelect } from './NavbarWithFilterStyles'
import { NavLeaguesItemStyle } from '../NavbarLeagues/NavbarLeaguesStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchApiLeagues } from '../../../redux/features/api/apiLeagueSlice';

const NavbarWithFilter = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const options = [
    {value:165, label:'Copa Libertadores'},
    {value:103, label:'Champions League'},
    {value:107, label:'Serie A'},
    {value:109, label:'League 1'},
    {value:152, label:'Liga Argentina'},
    {value:103, label:'Champions League'},
    {value:106, label:'Premier League'},
  ]
  const setValueDefault = options.find(league => league.value == param.idLeague);
  
  const goLeague = (e) => {
    param.idLeague = Number(e.value);
    // dispatch(fetchApiLeagues(param.idLeague));
    window.scrollTo(0,0)
    navigator(`/leagues/${param.idLeague}`)
 }

  return (
    <NavbarFilterContainerStyles>
      <SelectStyles styles={customStylesSelect}
      options={options}
      defaultValue={setValueDefault}
      onChange={(e) => goLeague(e)}
      />
      
      <NavLeaguesItemStyle>Posiciones</NavLeaguesItemStyle>
      <NavLeaguesItemStyle>Goleadores</NavLeaguesItemStyle>
      <NavLeaguesItemStyle>Fixture</NavLeaguesItemStyle>
    </NavbarFilterContainerStyles>
  )
}

export default NavbarWithFilter