import * as React from "react";
import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../../redux/reducer/index";
import {TimeProp} from "../../redux/reducer/type";
import {StdButton} from "../parts/button";
import {ipcRenderer} from "electron";

import HourCompo from "./hourCompo/hourCompo";
import {initTimeProps} from "../../redux/reducer/index";
import {setTimePropAll} from "../../redux/actions/mapDispatchToPtops";

const HoursList = () =>{
    const timeProps:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const hoursList:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const dispatch = useDispatch();
    const listsettings = hoursList.map((obj,index)=>{
        return(
            <li key={index}>
                <HourCompo index={index} text={obj.text} noticefaction={obj.noticefaction} image={obj.image} />
            </li>
        )
    });
    const saveData = async() =>{
        try{
            await ipcRenderer.invoke("recordData",timeProps);
            alert("saved");
        }catch(e){
            alert(e);
        }
    }

    const removeAll = async() =>{
        try{
            if(!confirm("are you sure ? to remove all data"))return false;
            await ipcRenderer.invoke("recordData",initTimeProps);
            dispatch(setTimePropAll(initTimeProps));
        }catch(e){
            alert(e);
        }
    }
    return(
        <div className="hoursSettings">
            <div className="hoursSettings__head">
                <StdButton name="save data" func={saveData}/>
                <StdButton name="remove all data" func={removeAll} />
                <h2 className="head-small">time list</h2>
            </div>
            <ul className="hoursSettings__list">
                {listsettings}
            </ul>
        </div>
    )
}

export default HoursList;