import * as React from "react";
import {ClockCompo,getFontStyle} from "../clockMain";
import {clockTicking, writeClockTime} from "../../../fileSystem/clockMain";
import {RGB} from "../../../redux/reducer/type";

const setRGBA:(RGB:RGB,trans:number)=>string = (RGB,trans) => `rgba(${RGB.R},${RGB.G},${RGB.B},${trans})`;

const ClockCompoType2:ClockCompo = ({fontColor,text,clock}) =>{
    const clockStyle = {
        textShadow:`0px 0px 6px ${setRGBA(fontColor,0.8)} , 0px 0px 3px ${setRGBA(fontColor,1)}`,
        fontColor:setRGBA(fontColor,0.1),
        fontSize:"40px"
    };
    const textStyle = {
        textShadow:`0px 0px 6px ${setRGBA(fontColor,0.8)}`,
        ...getFontStyle(fontColor,"25px")
    }
    console.log(clockStyle);
    return(
        <div className="clockMain__clockType2">
            <div className="clockMain__clockTimeType2 degitalTimer" style={clockStyle}>{writeClockTime(clock)}</div>
            <div className="clockMain__clockTextType2" style={textStyle}>{text}</div>
        </div>
    )
}

export default ClockCompoType2;