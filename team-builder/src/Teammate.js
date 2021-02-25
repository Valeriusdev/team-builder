import React from "react";

function Teammate(props){

    const { details } = props 
    if(!details){
        return <h3>Fetching teammate details . . .</h3>
    }

    return (
        <div className="member">
            <div>
                <h2> {details.teammate} </h2>
                <p> {details.email} </p>
                <p> {details.role} </p>
            </div>
        </div>
    );
}



export default Teammate;