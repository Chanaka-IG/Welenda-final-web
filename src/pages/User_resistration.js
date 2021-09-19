
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import './User_registration.css';
import {Link} from 'react-router-dom'


function UserRegistration(){
          const [sellers, setSellers] = useState([]);

          useEffect(() => {
            const fetchAPI = async () => {
                const response = await Axios.post('http://localhost:8000/getsellers',{

              })
            setSellers(response.data)
          
            //console.log(size) 
                  
            }
            fetchAPI()
        },[]);
       // console.log(sellers)
              
        const columns = [
          {title: 'UserID', field:'userID'},
          {title: 'Name', field:'name'},
          {title: 'Email', field:'email'},
          {title: 'Address', field:'address'},
          {title: 'ContactNo', field:'contactno'},
          {title: 'Status', field:'status'},
          

        ]    


       return(
    <div class ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="Sellers informations"
            data={sellers}
            columns={columns}
            style={{fontSize: 25}}
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                // onClick: (event, data) => alert("Do you want to view " + data.name)
                }
              ]}
              components={{
                Action: props => (
                  <div className="userDetails__button" style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",marginLeft: 20,}} >
            
                  <Link to ={{pathname:"/user_profile", state:{foo:props.data}}}><Button
                    // onClick={(event) => props.action.onClick(event, props.data)}
                    class="btn btn-outline-info"
                    variant="contained"
                    style={{textTransform: 'none',border: 0, borderRadius: 10}}
                    size="small"
                  >
                   View
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

export default UserRegistration