import React,{useEffect} from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/cards.jsx'
import { AsyncStorage } from 'AsyncStorage';
import { useHistory } from "react-router-dom";
 
const Home = () => {
 
    let history = useHistory();
      useEffect(async() => {
        let userVal =  await AsyncStorage.getItem('userToken');
        if(userVal === 'logout'){
          history.push("/Login")
        }
 
      },[])

    return(
        <>
            <HeroSection/>
            <Cards />
             
        </>
    );
};

export default Home;