

import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import './User_registration.css';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { AsyncStorage } from 'AsyncStorage';
import { useHistory } from "react-router-dom";



function Complaints(){
       let history = useHistory();
      const [complaints, setComplaints] = useState([]);

        useEffect(async() => {
          let userVal =  await AsyncStorage.getItem('userToken');
          if(userVal === 'logout'){
            history.push("/Login")
          }
          const fetchAPI = async () => {
              const response = await Axios.post('http://localhost:8000/complaints',{

            })
            setComplaints(response.data)
                
          }
          fetchAPI()
      },[]);
     // console.log(complaints)
            
      const columns = [
        {title: 'ComplainID', field:'complainID'},
        {title: 'Name', field:'name'},
        {title: 'User-category', field:'userCategory'},
        {title: 'Complaint', field:'complaint'},
        {title: 'Email', field:'email'},
        {title: 'Status', field:'status'},

      ]    

        return(
        <div class ="container">      
            <div className="table__container"> 
                <MaterialTable 
                  title="User informations"
                  data={complaints}
                  columns={columns}
                  style={{fontSize: 25}}
                  actions={[
                      {
                        icon: 'save',
                        tooltip: 'Save User',
                    /*   onClick: (event, data) => alert("Do you want to view " + data.name)*/
                      }
                    ]}
                    components={{
                      Action: props => (
                        <div className="userDetails__button" style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",marginLeft: 20,}} >
                        <Link to ={{pathname:"/Message", state:{foo:props.data}}}><Button
                          /*onClick={(event) => props.action.onClick(event, props.data)}*/
                          color="primary"
                          variant="contained"
                          style={{textTransform: 'none',border: 0, borderRadius: 10}}
                          size="small"
                        >
                        Reply
                        </Button>
                        </Link>

                        </div>
                      ),
                    }}
                  
                    options={{
                      actionsColumnIndex: -1,
                      headerStyle: {
                          backgroundColor: '#01579b',
                          color: '#FFF',
                          fontSize: 17
                        },
                        cellStyle: {
                          backgroundColor: '#EEE',
                          
                        },
                        exportButton: true
                    }}

                  style={{overflow:'hidden'}}  
                />

            </div>   

        </div>   
        ) 


}

export default Complaints