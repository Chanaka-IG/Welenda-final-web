import React,{useState} from 'react'
import Massage from '../assets/images/massage.png';
import Axios from 'axios'
import './message.css'

export const Message = (route) => {
    const email = route.location.state.foo.email
    const complainID = route.location.state.foo.complainID
    const name = route.location.state.foo.name
    const status = route.location.state.foo.status
    
    const [message,setMessage] = useState('')

    const sendReply = async() => {

        if(status == "unsolved"){
            if (window.confirm('Are you sure send the email to user?'))
            {
                const response = await Axios.put('http://localhost:8000/sendReply',{
                    email:email,
                    message:message,
                    complainID:complainID,
                })
                
                if(response.data.statusVal == "200"){
                    alert("successfully sent the email to user!")
                }
                else{
                    alert("Can not send the email!")
                }
            }

        }
        else{
            alert("This complain have already solved!")
        }

       
    }


    return (
        <div className='messageContainer'>  
            <div className='messagetitle'>
                Message
            </div>
            <div className='messageImage'>
            <img src={Massage} alt='' width='250px' height='230px'/>
            </div>
            <div className="msgArea">
            <div className="form-area">
                <form className="form-content">
                       
                        
                        <div className="mb-3">
                            <label for="UserID" className="form-label">Complain-ID</label>
                            <input type="text" className="form-control" id="userID" value={complainID} />
                        </div>
                        <div className="mb-3">
                            <label for="Message" className="form-label">User name</label>
                            <input type="text" className="form-control" id="message" value={name} />
                        </div>
                        <div className="mb-3">
                            <label for="Message" className="form-label">User email</label>
                            <input type="text" className="form-control" id="message" value={email} />
                        </div>
                        <div className="mb-3">
                            <label for="Message" className="form-label">Message</label>
                            <input type="text" className="form-control" id="message" onChange = {(e)=> setMessage(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick = {()=> sendReply()} >Send</button>
                </form>
             </div>
             </div>
        </div>
    )
}

export default Message;