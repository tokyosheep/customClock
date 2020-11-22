import * as React from "react";
import ClockMain from "../components/clockCompo/clockMain";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";

import {TimeProp} from "../redux/reducer/type";
import {TimeObj} from "../fileSystem/clockMain";

const getBackGround:(timeProps:TimeProp[],tick:TimeObj)=>Object = (timeProps,tick) =>{
    return{
        background:`url(${timeProps[parseFloat(tick.hour) -1].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }
}

const ClockForm = () =>{
    const timePtrops:TimeProp[] = useSelector((state:StateProps)=>state.timePropsReducer);
    const tick:TimeObj = useSelector((state:StateProps)=>state.timeTick);

    return(
        <div className="containerClock" style={getBackGround(timePtrops,tick)}>
            <ClockMain />
        </div>
    )
}   

export default ClockForm;