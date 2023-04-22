import styled from "styled-components";

export const CardContainerStyle = styled.li`
width:100%;
max-width:700px;
height:75px;
background-color:#29292b;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
font-family:'Red Hat Display';
cursor: pointer;

.containerTeam{
    display:flex;
    gap:20px;
}


.containerTeam img {
    width:35px;
    height:35px;
    object-fit:contain;
    border-radius:none;
}

.dateMatch{
 position:absolute;
 width:80px;
 left:10px;
 top:5px;
 font-size:0.8rem;
 text-align:center;
 font-weight:100;
}

.teamsMatchHome{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    text-align:left;
    gap:20px;
    width:150px
}

.teamsMatchAway{
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-start;
    align-items:center;
    text-align:right;
    gap:20px;
    width:150px
}

.containerBets{
    position:absolute;
    right:0;
    top:5px;
    padding-right:15px;
}
.status{
    width:100px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    span{
        display:flex;
        gap:10px;
        font-weight:600;
    }
}

.progress {
    background-color: ${props => props.status == 'LIVE' ? 'yellowgreen' : props.status == 'FINISHED' ? 'red' : props.status == 'PAUSED' ? 'orange' : 'none'};
    color:white;
    text-align:center;
    font-size:0.7rem;
    font-weight: 900;
    margin-top:0.5rem;
}

`