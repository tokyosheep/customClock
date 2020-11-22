import * as React from "react";
import {useState,useCallback} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setClockType} from "../../redux/actions/mapDispatchToPtops";
import {StateProps} from "../../redux/reducer/index";
import {RGB,Place} from "../../redux/reducer/type";

import {clockTicking,TimeObj,writeClockTime} from "../../fileSystem/clockMain";

const getFontStyle:(rgb:RGB)=>Object = rgb =>{
    console.log(rgb);
    return{
        color:`rgb(${rgb.R},${rgb.G},${rgb.B})`,
        fontSize:"30px"
    }
}

const getPlaceStyle = key =>{
    const middleP = {
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
    }
    
    switch(key){
        case "top":
            return {
                top:"10%",
                left:"50%",
                transform:"translateX(-50%)",
            };

        case "middle":
            return middleP;

        case "bottom":
            return {
                top:"80%",
                left:"50%",
                transform:"translateY(-50%)",
            }

        default:
            return middleP;
    }
}

const ClockMain = () =>{
    const state:StateProps = useSelector(state=>state);
    const hour = parseFloat(state.timeTick.hour)-1;
    let position;
    Object.entries(state.clockTextReducer.place).forEach(([key,value])=> {
        if(value.checked === true)position = key;
    })
    return(
        <main className="clockMain" style={getPlaceStyle(position)}>
            <div className="clockMain__clock">
                <div className="clockMain__clockTime degitalTimer" style={getFontStyle(state.clockTextReducer.fontColor)}>{writeClockTime(state.timeTick)}</div>
                <div className="clockMain__clockText">{state.timePropsReducer[hour].text}</div>
            </div>
        </main>
    )
}

export default ClockMain;