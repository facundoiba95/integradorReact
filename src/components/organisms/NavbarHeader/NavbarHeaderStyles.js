import styled from 'styled-components';

export const HeaderStyle = styled.header`
width:100%;
height: 70px;
background-color: #2E2E2D;
/* background-color:#29292b80; */
/* background-color: #24242480; */
display:flex;
justify-content:space-between;
align-items:center;
color:white;
padding:0 30px;
margin-bottom: 4.5rem;
position:sticky;
top:0;
z-index:1000;

h1{
    font-family:'Orbitron';
    letter-spacing:2px;
    color:yellow;
    cursor:pointer;
    width:30%;
}
`
export const HeaderListStyle = styled.ul`
width:30%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
gap:20px;
font-family:'Poppins';

.registerHeader{
    background-color:gray;
    height:50%;
    padding: 0 5px;
    border-radius:3px;
}
`
export const HeaderItemStyle = styled.li`
height:100%;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;

:hover{
    font-weight:600;
}
`
