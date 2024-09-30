/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"

export default function Accordion(props){
    return(
        <>
            <div className="question">
                <div className="ask">
                    <h4>{props.question}</h4>
                {
                    props.state
                    ?
                    <img onClick={props.toggle} src={minus} alt="minus" /> 
                    :
                    <img onClick={props.toggle} src={plus} alt="plus"  />


                }    
               
                </div>
                
                    {props.state && <p>{props.answer}</p>}
               
            </div>
        </>
    )
}