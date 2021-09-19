
import React,{useEffect} from 'react'
import './Topbar.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { AsyncStorage } from 'AsyncStorage';
import { useHistory } from "react-router-dom";

function Topbar() {
    let history = useHistory();

    useEffect(async() => {
        let userVal =  await AsyncStorage.getItem('userToken');
        //console.log(userVal)
            if(userVal === 'logout'){
            history.push("/Login")
            }
           
      },[])

    const handleLogout = async() =>{
        let Token="logout"
        await AsyncStorage.setItem('userToken', Token)
        history.push("/Login")
    }


    return (
        <div className="nav">
            <div ClassName="leftside">
            <Link to ="/Home"><img src={logo} alt="Welenda Logo" /> </Link>
                <span className="title">Admin Panel</span>

            </div>
                <ul className="nav-links">
               
                    <li><button type="button" className="btn btn-danger btnDanger" style={{color:'#fbfbfb'}} onClick={()=> handleLogout()} >Logout</button></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
        </div>

    )
}
export default Topbar
