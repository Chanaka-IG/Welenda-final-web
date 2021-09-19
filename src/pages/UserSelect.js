
import React from 'react';
import Card from '../components/cardUi'
import register from '../assets/reagister.jpg'
import Complains from '../assets/Complains.jpg'
import './CardStyle.css'
 
const UserSelect = () => {
 
    return(
        <div className="content"> 
        <div className="card_container">
          
           <div className="col-mr-10 ml-10 mg-20">
                <Card title="Sellers Registration" desc="You can View registration details from here" imgsrc={register} nav='../user_resistration' />
            </div>
          
         
            <div className="col-mr-5 ml-5">
                 <Card title="Buyers Registration" desc="You can View complaints details from here" imgsrc={Complains} nav='../UserRegistration_Buyers'/>
            </div>
          
        </div>
        </div>
    );
};

export default UserSelect;