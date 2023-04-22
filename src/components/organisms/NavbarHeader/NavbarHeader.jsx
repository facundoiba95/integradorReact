import React from 'react'
import { HeaderItemStyle, HeaderListStyle, HeaderStyle } from './NavbarHeaderStyles';
import { useNavigate } from 'react-router-dom';


const NavbarHeader = () => {
  const navigator = useNavigate();
  
  const goHome = () => navigator('/')
  const goFeed = () => navigator('/feed')
  const goProde = () => navigator('/prode')
  const goRegister = () => navigator('/register')
  const goLogin = () => navigator('/login')


  return (
    <HeaderStyle>
        <h1 onClick={goHome}>TRICAMPEÓN</h1>
        <HeaderListStyle>
          <HeaderItemStyle onClick={goHome}>Home</HeaderItemStyle>
          <HeaderItemStyle onClick={goFeed}>Feed</HeaderItemStyle>
          <HeaderItemStyle onClick={goProde}>Prode</HeaderItemStyle>
        </HeaderListStyle>
        <HeaderListStyle>
          <HeaderItemStyle onClick={goRegister} className='registerHeader'>Register</HeaderItemStyle>
          <HeaderItemStyle onClick={goLogin}>Login</HeaderItemStyle>
        </HeaderListStyle>
    </HeaderStyle>
  )
}

export default NavbarHeader