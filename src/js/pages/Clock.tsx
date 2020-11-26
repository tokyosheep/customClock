import * as React from "react";
import ClockMain from "../components/clockCompo/clockMain";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";

import {TimeProp,ClockType} from "../redux/reducer/type";
import {TimeObj,getHourIndex} from "../fileSystem/clockMain";

const getBackGround:(timeProps:TimeProp[],tick:TimeObj)=>Object = (timeProps,tick) =>{
    console.log(parseFloat(tick.hour));
    
    return{
        background:`url(${timeProps[getHourIndex(tick)].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }
}

const ClockForm = () =>{
    const timePtrops:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const tick:TimeObj = useSelector((state:StateProps)=>state.timeTick);
    const typeMode:ClockType = useSelector((state:StateProps)=>state.clockTypeReducer);
    return(
        <div className={"containerClock " + (typeMode.type2.checked ? "darkMode" : "")} style={getBackGround(timePtrops,tick)}>
            <ClockMain />
        </div>
    )
}   

export default ClockForm;