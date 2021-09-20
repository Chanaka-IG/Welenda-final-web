
import React,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import './User_registration.css';
import Axios from 'axios'
import {Link} from 'react-router-dom'


function Payments(){
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        const response = await Axios.post('http://localhost:8000/paymentsDetails',{

      })
    //  console.log(response)
      setPayments(response.data)
          
    }
    fetchAPI()
},[]);
//console.log(payments)

        const columns = [
            {title: 'rollNo', field:'rollNo'},
            {title: 'Seller ID', field:'userId'},
            {title: 'Payed date', field:'paymentDate'},
            {title: 'Approved date', field:'approvalDate'},
            {title: 'Valid date', field:'toValidDate'},
            {title: 'Status', field:'paymentstatus'},
          

        ]    
     

       return(
    <div className ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="Payments"
            data={payments}
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
                  <Link to ={{pathname:"/PaymentDetails", state:{foo:props.data}}}><Button
                    /*onClick={(event) => props.action.onClick(event, props.data)}*/
                    color="primary"
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

export default Payments