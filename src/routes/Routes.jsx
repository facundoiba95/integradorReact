import { Routes as RoutesRouterDom, Route, BrowserRouter } from "react-router-dom";
import React from 'react'

//Vistas
import HomeView from '../views/Home/HomeView'
import RegisterView from '../views/Register/RegisterView'
import LoginView from '../views/Login/LoginView';
import FixtureView from '../views/Fixture/FixtureView';
import RankingView from '../views/Ranking/RankingView';
import ProfileView from '../views/Profile/ProfileView';
import FeedView from "../views/Feed/FeedView";
import NavbarHeader from "../components/organisms/NavbarHeader/NavbarHeader";
import Matchs from "../views/Matchs/Matchs";
import Footer from "../components/organisms/Footer/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavbarHeader/>
    <RoutesRouterDom>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/register' element={<RegisterView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/fixture' element={<FixtureView/>}/>
        <Route path='/rankingLeague' element={<RankingView/>}/>
        <Route path='/profile' element={<ProfileView/>}/>
        <Route path='/feed' element={<FeedView/>}/>
        <Route path='/matchs' element={<Matchs/>}/>
        <Route path='/matchs/leagues' element={<Matchs/>}/>
        <Route path='/ranking/league' element={<RankingView/>}/>
    </RoutesRouterDom>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routes