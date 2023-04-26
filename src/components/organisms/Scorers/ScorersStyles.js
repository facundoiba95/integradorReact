import styled from "styled-components";

export const TableContainerStyles = styled.table`
width: 100%;
max-width:800px;
min-width:700px;
height:100%;
border:none;

.headTable {
    /* background-color:red; */
    text-align:left;
}

.head{
    color:yellow;
    height:40px;
    background-color:none;
}

.th{
    padding-left:10px;
}

.td{
    height:30px;
    /* background-color:red; */
    padding:10px;
    border-bottom:1px solid gray;
}
.tr:nth-child(-n+3){
    background-color:#202124;
}

.td.team{
    /* display:flex;
    justify-content:left;
    align-items:center;
    gap:10px; */
}
.td.team img{
   width:20px;
   margin-right:10px;
}

`