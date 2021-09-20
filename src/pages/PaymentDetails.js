import React,{useState,useEffect} from 'react';
import myprofile2 from '../images/profile2.jpg'
import receipt from '../images/receipt.png'
import Axios from 'axios'
import './User_profile.css';


const PaymentDetails = (route) => {

	const rollNo = route.location.state.foo.rollNo
	const paymentstatus = route.location.state.foo.paymentstatus
	const paymentDate = route.location.state.foo.paymentDate
	const toValidDate = route.location.state.foo.toValidDate
 
 

	const [payments,setPayments] = useState('')

	 

	useEffect(() => {
	  const fetchAPI = async () => {
		  const response = await Axios.post('http://localhost:8000/setpayments',{
			rollNo:rollNo,
			
		})
	
	  console.log(response) 
	  setPayments({paymentDate : response.data[0].paymentDate,userID: response.data[0].userID,paymentstatus: response.data[0].paymentstatus, email:response.data[0].email,name:response.data[0].name,potraitUrl:response.data[0].potraitUrl ,contactno:response.data[0].contactno ,slipUrl:response.data[0].slipUrl,serviceCategory:response.data[0].serviceCategory,city:response.data[0].city, rollNo:response.data[0].rollNo})
			
	  }
	  fetchAPI()
  },[]);

  const handleset = async() => {
	console.log("awa")

	if(paymentstatus == "pending"){
		const response = await Axios.post('http://localhost:8000/approvepayments',{
							rollNo:rollNo,
							paymentDate:paymentDate,
							toValidDate:toValidDate
						
			})

			if(response.data.statusVal == "200"){
				alert("Successfully updated the status")
			}	
			else{
				alert("Status update unsuccessful!.")
			}


	 }
	else{
		alert("This payment has been already approved.")
	} 
  }

  const rejectpayments = () => {
	  
}

    return(
        <>

<div className = "user__profile__container">

<div className="user__profile__content">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="account-settings">
			<div className="user-profile">
				 
                <img src={payments.potraitUrl} alt="Avatar" class="avatar" />
				 
				<h5 className="user-name">{payments.name}</h5>
				<h6 className="user-email">{payments.email}</h6>
			</div>
			<div className="about">
            <h2>Rating</h2>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-6 text-primary">Payment details</h6>
			</div>
			<div className="col-xl-6 col-lg- col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">Roll NO</label>
					<input type="text" className="form-control" id="fullName" value={payments.rollNo} />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Payment Date</label>
					<input type="email" className="form-control" id="eMail" value={payments.paymentDate} />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">Contact number</label>
					<input type="text" className="form-control" id="phone" value={payments.contactno} />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Service category</label>
					<input type="text" className="form-control" id="service" value={payments.serviceCategory} />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Payment status</label>
					<input type="text" className="form-control" id="city" value={payments.paymentstatus} />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">User ID</label>
					<input type="text" className="form-control" id="Addtess" value={payments.userID} />
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Receipt image</h6>
			</div>
            <div className="row ml-2 mt-2" >
                  <div className="card ml-5" style={{width: '50%'}}>
                    <img className="card-img-top" src={payments.slipUrl} alt="" />
                    <div className="card-body">
                        <h5 className="text-center" >Front side</h5>
                    </div>
                  </div>
            </div>
           
		
		</div>
        
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
                    <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-primary mr-4" onClick={() => handleset()}>Aprove</button>
                     </div>
                     <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-danger ml-4" onClck = {() =>rejectpayments()}>Reject</button>
                     </div>    
					
				
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</div>
       </> 
    )
}

export default PaymentDetails