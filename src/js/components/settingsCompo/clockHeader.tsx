import * as React from "react";
import {useState,useCallback} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setClockType} from "../../redux/actions/mapDispatchToPtops";
import {StateProps} from "../../redux/reducer/index";
import {ClockType} from "../../redux/reducer/type";

import {StdRadioButton} from "../parts/radio";
import {clockTicking,TimeObj,writeClockTime} from "../../fileSystem/clockMain";

const ClockHeader = () =>{
    const dispatch = useDispatch();
    const typeClock:ClockType = useSelector((state:StateProps)=>state.clockTypeReducer);
    const tick:TimeObj = useSelector((state:StateProps)=>state.timeTick);
    console.log("tick");
    console.log(tick);
    /*
    const [tick,setTick] = useState("");
    setInterval(()=>{
        const timeObj = clockTicking();
        setTick(`${timeObj.hour}:${timeObj.minute}:${timeObj.second}`);
    },1000);
    */
    const handleRadioButton = useCallback((e,arg)=>dispatch(setClockType(arg.prop,e.target.checked)),[typeClock]);
    const clockRadios = Object.entries(typeClock).map(([key,value])=>{
        return <li key={key}><StdRadioButton name={key} checked={value.checked} arg={{prop:key}} func={handleRadioButton}/></li>
    });
    return(
        <header className="clockHeader">
            <div className="clockHeader__titles">
                <h1 className="head-large">setting</h1>
                <div className="clockHead__clock">
                    {(writeClockTime(tick))}
                </div>
            </div>
            <ul className="clockHeader__type">
                {clockRadios}
            </ul>
        </header>
    )
}

export default ClockHeader;