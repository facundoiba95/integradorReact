import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RankingTable from '../../components/molecules/RankingTable/RankingTable';
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables';
import { ApiContext } from '../../context/ApiContext';
import { ContainerDefaultStyle } from './LeaguesViewStyles';
import imgTest from '../../assets/ligue1.png';
import TitleContainer from '../../components/atoms/TitleContainer/TitleContainer';
import NavbarWithFilter from '../../components/organisms/NavbarWithFilter/NavbarWithFilter';

const LeaguesView = () => {
    const { isAll, setIsAll } = useContext(ApiContext);
    const param = useParams();
    const idLeague = Number(param.idLeague);
    

    useEffect(()=> setIsAll(false),[])

  return (
    <ContainerDefaultStyle>
        <NavbarWithFilter/>
        <img src={imgTest} alt="img logo" className='imgLeague'/>
        <TitleContainer>Ligue 1</TitleContainer>
      <ContainerTables isAll={isAll}>
        <RankingTable idLeague={idLeague}/>
      </ContainerTables>
    </ContainerDefaultStyle>

    
    )
}

export default LeaguesView