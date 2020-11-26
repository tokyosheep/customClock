import * as React from "react";
import {useSelector} from "react-redux";
import {StateProps} from "../../redux/reducer/index";
import {TimeProp} from "../../redux/reducer/type";

const checkComplete:(obj:TimeProp)=>boolean = obj =>obj.image !== "" && obj.image !== " " && obj.text !== "";

const Complimention = () =>{
    const timeProp:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const percent = timeProp.reduce((acc,current)=> checkComplete(current) ? acc + (100/timeProp.length) : acc,0);
    console.log(percent);
    return(
        <>
            <div className="complimention__percent">{Math.floor(percent)}% finished</div>
            <div className="complimention">
                <div className="complimention__graph" style={{width:`${percent}%`}}></div>
            </div>
        </>
    )
}

export default Complimention;