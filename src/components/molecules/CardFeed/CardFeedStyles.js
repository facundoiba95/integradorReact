import styled from "styled-components";

export const ContainerCardsFeedStyles = styled.ul`
width:90%;
max-width:900px;
min-width:350px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:40px;
margin:40px 0;
`


export const CardFeedContainerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
border-radius:5px;
width:90%;
max-width:900px;
min-width:350px;
gap:10px;

background-color:${props => {
    switch (props.type){
        case 'newUser':
           return '#06d6a030'
        case 'newBet':
           return '#ffff0030'
        default:
           return '#80808010'
    }
}};

border:${props => {
    switch (props.type){
        case 'newUser':
            return '1px solid #06d6a090'
        case 'newBet':
            return '1px solid #ffff0090'
        default:
            return '1px solid #80808090'
    }
}};

height:${props => {
    switch (props.type){
        case 'newUser':
            return '80px'
        case 'newBet':
            return '150px'
        default:
            return '150px'
    }
}};

.imgUser{
    width:${props => {
        switch (props.type){
        case 'newUser':
            return '50px'
        case 'newBet':
            return '80px'
        default:
            return '130px'
    }
    }};
    height:${props => {
        switch (props.type){
        case 'newUser':
            return '50px'
        case 'newBet':
            return '80px'
        default:
            return '130px'
    }
    }};
    object-fit:cover;
    border-radius:50%;
    padding:2px;
    background-color:white;
    position:absolute;
    top:${props => {
        switch (props.type){
        case 'newUser':
            return '15px'
        case 'newBet':
            return '35px'
        default:
            return '130px'
    }
    }};
    left:${props => {
        switch (props.type){
        case 'newUser':
            return '-25px'
        case 'newBet':
            return '-40px'
        default:
            return '130px'
    }
    }};
}

.newData{
    position:absolute;
    top: 10px;
    right:10px;
    font-weight:800;
}

.infoTeams{
    display:flex;
    justify-content:center;
    align-items:center;
}

.teamsContainer{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}
.team{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    
}
.nameTeam{
    width:150px;
    text-align:center;
}
.imgTeam{
    width:35px;
    height:35px; 
}




`