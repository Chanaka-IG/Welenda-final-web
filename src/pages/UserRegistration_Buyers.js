
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import './User_registration.css';
import {Link} from 'react-router-dom'


function UserRegistration_Buyers(){
        const [buyers, setBuyers] = useState([]);

        useEffect(() => {
          const fetchAPI = async () => {
              const response = await Axios.post('http://localhost:8000/getbuyers',{

            })
           setBuyers(response.data)
        
          //console.log(size) 
                
          }
          fetchAPI()
      },[]);
     
            
      const columns = [
        {title: 'UserID', field:'userID'},
        {title: 'Name', field:'name'},
        {title: 'Email', field:'email'},
        {title: 'Address', field:'address'},
        {title: 'ContactNo', field:'contactno'},
        {title: 'Status', field:'status'},
        

      ]    

      const handleRemove = async() => {

        if(buyers[0].status == "active"){
          if (window.confirm('Are tou sure update the status?'))
					{
						const response = await Axios.put('http://localhost:8000/removebuyer',{
							email:buyers[0].email
						})
						if(response.data.statusVal == "200"){
							alert("successfully updated the status!")
						}
						else{
							alert("Failed to update the status")
						}
					}
        }
        else{
          alert("This user already deactivated")
        }
         
      }

       return(
    <div class ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="Buyers information"
            data={buyers}
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
                  <Button
                  onClick = {()=> handleRemove()}
                    /*onClick={(event) => props.action.onClick(event, props.data)}*/
                    class="btn btn-outline-danger"
                    variant="contained"
                    style={{textTransform: 'none',border: 0, borderRadius: 10}}
                    size="small"
                  >
                   Remove
                  </Button>
                  

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

export default UserRegistration_Buyers