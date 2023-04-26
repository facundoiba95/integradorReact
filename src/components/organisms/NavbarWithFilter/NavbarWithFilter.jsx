import React, { useEffect } from 'react'
import { NavbarFilterContainerStyles, SelectStyles, customStylesSelect } from './NavbarWithFilterStyles'
import { NavLeaguesItemStyle } from '../NavbarLeagues/NavbarLeaguesStyles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchApiLeagues } from '../../../redux/features/api/apiLeagueSlice';

const NavbarWithFilter = () => {
  const param = useParams();
  const navigator = useNavigate();
  const location = useLocation();

  const options = [
    {value:165, label:'Copa Libertadores'},
    {value:103, label:'Champions League'},
    {value:107, label:'Serie A'},
    {value:109, label:'League 1'},
    {value:152, label:'Liga Argentina'},
    {value:106, label:'Premier League'},
    {value:122, label:'La Liga'}
  ]
  const setValueDefault = options.find(league => league.value == param.idLeague);
  const routesNavBarFilter = {
    posiciones: ( id ) => navigator(`/leagues/${id}/ranking`),
    goleadores: ( id ) => navigator(`/leagues/${id}/scorers`),
    fixture: ( id ) => navigator(`/leagues/${id}/fixture`)
  }
  
   const handleRoutesSelect = (e) => {
    switch (location.pathname) {
      case `/leagues/${param.idLeague}/ranking`:
        routesNavBarFilter.posiciones(e.value)
        break;
        
      case `/leagues/${param.idLeague}/scorers`:
        routesNavBarFilter.goleadores(e.value)
        default:
          break;
    }
  }

  const handleRoutesItem = (e) => {
    const valueItem = e.target.dataset.valueitem;
    switch (valueItem) {
      case 'posiciones':
        routesNavBarFilter.posiciones(param.idLeague)
        break;
        
      case 'goleadores':
        routesNavBarFilter.goleadores(param.idLeague)
        break;

      case 'fixture':
        routesNavBarFilter.fixture(param.idLeague)
        break;
        default:
          routesNavBarFilter.posiciones(param.idLeague)
          break;
    }
  }

     
 return (
    <NavbarFilterContainerStyles>
      <SelectStyles styles={customStylesSelect}
      options={options}
      defaultValue={setValueDefault}
      onChange={(e) => handleRoutesSelect(e)}
      />
      
      <NavLeaguesItemStyle data-valueitem={'posiciones'} onClick={(e) => handleRoutesItem(e)}>Posiciones</NavLeaguesItemStyle>
      <NavLeaguesItemStyle data-valueitem={'goleadores'} onClick={(e) => handleRoutesItem(e)}>Goleadores</NavLeaguesItemStyle>
      <NavLeaguesItemStyle data-valueitem={'fixture'} onClick={(e) => handleRoutesItem(e)}>Fixture</NavLeaguesItemStyle>
    </NavbarFilterContainerStyles>
  )
}

export default NavbarWithFilter