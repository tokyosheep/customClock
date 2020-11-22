import * as React from "react";
import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../../redux/reducer/index";
import {TimeProp} from "../../redux/reducer/type";

import HourCompo from "./hourCompo/hourCompo";

const HoursList = () =>{
    const hoursList:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const listsettings = hoursList.map((obj,index)=>{
        return(
            <li key={index}>
                <HourCompo index={index} obj={obj}/>
            </li>
        )
    });
    return(
        <div className="hoursSettings">
            <h2 className="head-small">time list</h2>
            <ul className="hoursSettings__list">
                {listsettings}
            </ul>
        </div>
    )
}

export default HoursList;