
import React, { Component } from 'react'
import Card from './cardUi'
import Complains from '../assets/Complains.jpg'
import money from '../assets/money.jpg'
import register from '../assets/reagister.jpg'
import search from '../assets/search.jpg'
 

const Cards = () => {
 
        return ( 
           <div className="content"> 
            <div className="card_container">
               
                <div className="col-mr-5 ml-5 mg-0">
                    <Card title="Registration" desc="You can View registration details from here" imgsrc={register} nav='../userSelect' />
                </div>
             
                <div className="col-mr-5 ml-5">
                     <Card title="Complaints" desc="You can View complaints details from here" imgsrc={Complains} nav='../Complaints'/>
                </div>
                <div className="col-mr-5 ml-5">
                     <Card title="Payments" desc="You can View payment details from here" imgsrc={money} nav='../Payments'/>
                </div>
                

                <div className="col-mr-5 ml-5">
                     <Card title="Suggestions" desc="You can View suggestions from here" imgsrc={search} nav='../Suggestion' />
                </div>
            </div>
            </div>
         );
    
}
 
export default Cards;