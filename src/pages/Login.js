import React,{useState,useEffect} from 'react';
import logo from '../assets/images/logo.png';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { AsyncStorage } from 'AsyncStorage';
import { useHistory } from "react-router-dom";

const Login = () => {
  
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');

  let history = useHistory();
      useEffect(async() => {
        let userVal =  await AsyncStorage.getItem('userToken');

        if(userVal === 'logout'){
          history.push("/Login")
        }
        else{
          history.push("/Home")
        }
        
      },[])

  const handleSubmit = async() =>{

 

    //console.log(name)
      const response = await Axios.post('http://localhost:8000/selectUser',{
          username: name,
          userpassword: password,
        })    
       // console.log(response.data.userType)
    
      if (response.data.userType=="admin"){
        if( response.data.userID > 0 ){
          let Token="login"
          await AsyncStorage.setItem('userToken', Token)
          history.push("/Home")
         
         
         }
         else{
          alert("Invalid login details")
         }
      }  
      else{
        alert("Invalid login details")
      }
      
     }

 


    return(
      
        <div className='loginContainer'>
            <form className='loginForm'>
                <img src={logo} alt='' width='200px' height='190px'/>
                <h1>Login</h1>
                <input className='inputField' type='text' id='username' name='username' placeholder='User Name' onChange={(e) =>setName(e.target.value) } />
                <input className='inputField' type='password' id='password' name='password' placeholder='Password..' onChange={(e) =>setPassword(e.target.value) }/>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
               {/* <Link to = "/Home"> <input className='loginButton' type='submit' name='login' value='Login'/></Link> */}
            </form>
        </div>
    );
};

export default Login;