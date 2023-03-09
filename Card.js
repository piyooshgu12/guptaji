import  { Fragment } from "react";
// import './cards.css'

export function UserOne(props){
    return (
        
        <div className="card1">
            <div>
            <img className="img1" src={props.image} ></img>
            </div>
            <h4>{props.designation}</h4>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

        </div>
        
    )

}
export function UserTwo(props){
    return (
    
    <div className="card2">
        <div >
        <img className="img2" src={props.image} ></img>
        </div>
        <h4>{props.designation}</h4>
        <h1>{props.name}</h1>
        <p>{props.description}</p>

    </div>
    
    )

}