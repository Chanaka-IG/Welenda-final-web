import React from 'react';
import myprofile2 from '../images/profile2.jpg'
import receipt from '../images/receipt.png'
import './User_profile.css';


const PaymentDetails = () => {
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
				 
                <img src={myprofile2} alt="Avatar" class="avatar" />
				 
				<h5 className="user-name">Ravindu Bhagya</h5>
				<h6 className="user-email">anc@gmail.com</h6>
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
				<h6 className="mb-6 text-primary">Personal Details</h6>
			</div>
			<div className="col-xl-6 col-lg- col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" value="Ravindu"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" value="Ravindu@gmail.com" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" id="phone" value="0774586984" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Service category</label>
					<input type="text" className="form-control" id="service" value="choon pan" />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">City</label>
					<input type="text" className="form-control" id="city" value="Kirinda" />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Address</label>
					<input type="text" className="form-control" id="Addtess" value="No 10, Kirinda, Matara" />
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Receipt image</h6>
			</div>
            <div className="row ml-2 mt-2" >
                  <div className="card ml-5" style={{width: '100%', marginLeftL:120}}>
                    <img className="card-img-top" src={receipt} alt="" />
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
                           <button type="button" id="submit" name="submit" className="btn btn-primary mr-4 ">Aprove</button>
                     </div>
                     <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-danger ml-4">Reject</button>
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