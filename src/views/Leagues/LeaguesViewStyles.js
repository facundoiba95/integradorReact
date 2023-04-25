import styled from "styled-components";

export const ContainerDefaultStyle = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
font-family:'Quicksand';
gap:10px;

.imgLeague{
    width:160px;
    height:160px;
    object-fit:contain;
    margin-bottom:1rem;
}

.titleSeason{
    font-weight:100;
}
`