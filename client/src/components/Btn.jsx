import React from "react";
import './Btn.css'

export default function Btn(props){
    return(
        <>
        <input
           type="submit"
           value={props.value}
           className="btn btn-primary"
         />
        </>
    );
}