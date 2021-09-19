import React from 'react'
import {Link} from 'react-router-dom'
import './StylesOfCard.css'

const Card = props => {
    return ( 
        <div className="card text-center shadow cardStyles">
            <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className="card-img-top cardImage"/>
            </div>
            <div className="card-body text-dark cardBody" >
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                   {props.desc}
                </p>
                <Link to ={props.nav}><a href="#" className="btn btn-outline action-btn">Go</a></Link>
            </div>
        </div>        
     );
}
   
export default Card;