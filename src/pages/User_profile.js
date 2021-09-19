import React,{useState,useEffect} from 'react';
import myprofile from '../images/profile.jpg'
import Axios from 'axios'
import image1 from '../images/id1.png'
import image2 from '../images/id2.jpg'
import './User_profile.css';


const UserProfile = (route) => {
	const email = route.location.state.foo.email
	const status = route.location.state.foo.status
	//console.log(email)
	const [seller,setSeller] = useState('')

	 

	useEffect(() => {
	  const fetchAPI = async () => {
		  const response = await Axios.post('http://localhost:8000/setseller',{
			email:email
		})
	
	  console.log(response) 
	  setSeller({userID : response.data[0].userID,userType: response.data[0].userType, status:response.data[0].status ,serviceCategory:response.data[0].serviceCategory,nic:response.data[0].nic ,name:response.data[0].name ,email:response.data[0].email,contactno:response.data[0].contactno,city:response.data[0].city,NICFirstUrl:response.data[0].NICFirstUrl,NICSecondUrl:response.data[0].NICSecondUrl, potraitUrl:response.data[0].potraitUrl})
			
	  }
	  fetchAPI()
  },[]);
 // console.log(seller.userID)

 const handleset = async()=>{
	 if(status == "active"){
		alert("Currently this user is active in the system")
	 }
	 else if(status == "deactive"){
		alert("Currently this user is deactive in the system")
	 }
	 else{
		if (window.confirm('Are tou sure update the status?'))
					{
						const response = await Axios.put('http://localhost:8000/approveseller',{
							email:email
						})
						if(response.data.statusVal == "200"){
							alert("successfully updated the status!")
						}
						else{
							alert("Failed to update the status")
						}
					}
	
	 }
 }
 
 const handlemove = async()=>{
	if(status=="deactive"){
		alert("This user already deactive in the system")
	}
	else{
		if (window.confirm('Are tou sure update the status?'))
		{
			const response = await Axios.put('http://localhost:8000/removeseller',{
				email:email
			})
			if(response.data.statusVal == "200"){
				alert("successfully updated the status!")
			}
			else{
				alert("Failed to update the status")
			}
		}
	}
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
				 
                <img src={seller.potraitUrl} alt="Avatar" class="avatar" />
				 
				<h5 className="user-name">{seller.name}</h5>
				<h6 className="user-email">{seller.email}</h6>
			</div>
			<div className="about">
				<h5>About</h5>
				<p>{seller.userType}</p>
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
					<label htmlFor="fullName">User-ID</label>
					<input type="text" className="form-control" id="fullName" value={seller.userID}  />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Service category</label>
					<input type="email" className="form-control" id="eMail" value={seller.serviceCategory}  />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">contact number</label>
					<input type="text" className="form-control" id="phone" value={seller.contactno}  />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Nearest city</label>
					<input type="url" className="form-control" id="website"  value={seller.city} />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">NIC</label>
					<input type="url" className="form-control" id="website"  value={seller.nic} />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Status</label>
					<input type="url" className="form-control" id="website" value={seller.status} />
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Nic details</h6>
			</div>
            <div className="row ml-2 mt-2" >
                 <div className="card mr-5" style={{width: '40%'}}>
                    <img className="card-img-top" src={seller.NICFirstUrl} alt=""/>
                    <div className="card-body">
                        <h5 className="text-center" >First side</h5>
                    </div>
                  </div>
                  <div className="card ml-5" style={{width: '40%', marginLeftL:120}}>
                    <img className="card-img-top" src={seller.NICSecondUrl} alt="" />
                    <div className="card-body">
                        <h5 className="text-center" >Second side</h5>
                    </div>
                  </div>
            </div>
           
		
		</div>
        
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
	
                    <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-success mr-4 " onClick={() => handleset()}>Add</button>
                     </div>
                     <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-danger ml-4 " onClick={() => handlemove()}>Remove</button>
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

export default UserProfile