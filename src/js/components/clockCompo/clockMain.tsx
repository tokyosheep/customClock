import * as React from "react";
import {useSelector,useDispatch} from "react-redux";
import {setClockType} from "../../redux/actions/mapDispatchToPtops";
import {StateProps} from "../../redux/reducer/index";
import {RGB} from "../../redux/reducer/type";

import {TimeObj,getHourIndex} from "../../fileSystem/clockMain";
import ClockCompoType1 from "./type1/clockCompotype1";
import ClockCompoType2 from "./type2/clockCompoType2";

export type ClockCompo = (props:{fontColor:RGB,text:string,clock:TimeObj})=>JSX.Element;

export const getFontStyle:(rgb:RGB,fontSize:string)=>Object = (rgb,fontSize) =>{
    console.log(rgb);
    return{
        color:`rgb(${rgb.R},${rgb.G},${rgb.B})`,
        fontSize:fontSize
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
                transform:"translateX(-50%)",
            }

        default:
            return middleP;
    }
}

const ClockMain = () =>{
    const state:StateProps = useSelector(state=>state);
    const typeMode = state.clockTypeReducer;
    const hour = getHourIndex(state.timeTick);
    let position;
    Object.entries(state.clockTextReducer.place).forEach(([key,value])=> {
        if(value.checked === true)position = key;
    });
    return(
        <main className="clockMain"  style={getPlaceStyle(position)}>
            {(
                typeMode.type1.checked ?
                    <ClockCompoType1 fontColor={state.clockTextReducer.fontColor} text={state.timePropsReducer[hour].text} clock={state.timeTick}/>
                :   <ClockCompoType2 fontColor={state.clockTextReducer.fontColor} text={state.timePropsReducer[hour].text} clock={state.timeTick}/>
            )}
        </main>
    )
}

export default ClockMain;