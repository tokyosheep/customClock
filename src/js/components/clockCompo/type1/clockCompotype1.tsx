import * as React from "react";
import {ClockCompo,getFontStyle} from "../clockMain";
import {writeClockTime} from "../../../fileSystem/clockMain";

const ClockCompoType1:ClockCompo = ({fontColor,text,clock}) =>{
    return(
        <div className="clockMain__clockType1">
            <div className="clockMain__clockTimeType1 degitalTimer" style={getFontStyle(fontColor,"30px")}>{writeClockTime(clock)}</div>
            <div className="clockMain__clockTextType1" style={getFontStyle(fontColor,"20px")}>{text}</div>
        </div>
    )
}

export default ClockCompoType1;