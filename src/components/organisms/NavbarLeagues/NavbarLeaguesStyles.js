import styled from "styled-components";

export const NavLeaguesStyle = styled.nav`
width:100%;
height:50px;
background-color:#2e2e2e10;
backdrop-filter: blur(10px);
margin-top: 0rem;
display:flex;
justify-content:space-around;
align-items:center;
position:fixed;
top:70px;
z-index:1000;

`
export const NavLeaguesItemStyle = styled.li`
color:yellow;
font-family:'Teko';
font-weight:100;
font-size:1.1rem;
letter-spacing:.8px;
cursor: pointer;

:hover{
    color:white;
}
`