import * as React from "react";
import {useState,useCallback} from "react";
import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../../redux/reducer/index";
import {ClockText} from "../../redux/reducer/type";

import {setClockFonts,setClockColor} from "../../redux/actions/mapDispatchToPtops";
import {StdRadioButton} from "../parts/radio";
import {StdNumberBox} from "../parts/text";

const ClockOptions = () =>{
    const clockOption:ClockText = useSelector((state:StateProps)=>state.clockTextReducer);
    const dispatch = useDispatch();
    const handleRadioButton = useCallback((e,arg)=>dispatch(setClockFonts(arg.prop,e.target.checked)),[clockOption.place]);
    const handleNumberButton = useCallback((e,arg)=>dispatch(setClockColor(arg.prop,parseFloat(e.target.value))),[clockOption.fontColor]);
    const clockPositions = Object.entries(clockOption.place).map(([key,value])=>{
        return <li key={key}><StdRadioButton name={key} checked={value.checked} func={handleRadioButton} arg={{prop:key}}/></li>
    });
    const clockColors = Object.entries(clockOption.fontColor).map(([key,value])=>{
        return <li key={key}><StdNumberBox name={key} value={value} func={handleNumberButton} arg={{prop:key}} max={255} min={0} step={1}/></li>
    });
    return(
        <aside className="settingOptions">
            <ul className="settingOptions__position">
                {clockPositions}
            </ul>
            <ul className="clockPositions__colors">
                {clockColors}
            </ul>
        </aside>
    )
}

export default ClockOptions;