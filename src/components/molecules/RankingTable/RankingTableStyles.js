import styled from "styled-components";

export const ContainerTableStyle = styled.ul`
width:100%;
height:100%;
display:flex;
gap:10px;
flex-direction:column;
background-color:#333436;
border-radius:5px;
gap:10px;
padding:10px;
font-family:'Poppins';
font-weight:300;
`
export const ItemTableStyle = styled.li`
width:100%;
height:50px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #242424;

.infoTeamRanking{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:300px;

    img {
        display:block;
        width:30px;
        object-fit:cover;
    }
    small{
        width:150px;
        text-align:left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;      
        font-weight:600;  
    }

}

.statsTeamRanking{
    display:flex;
    gap:10px;
    width:40%;
    justify-content:space-around;
    align-items:center;
    text-align:center;
}
`
export const TitleRankingStatsStyle = styled.span`
width:100%;
height:30px;
display:flex;
justify-content: flex-end;
align-items:center;
gap:10px;
font-family:'Red Hat Display';
background-color:#4f4e4e;
padding-right:5px;
`