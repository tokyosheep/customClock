import * as React from "react";
import {CheckBox} from "./types";

export const StdCheckBox = ({addClass,name,func,arg,checked}:CheckBox) =>(
    <label className={"checkbox-std "+(addClass === undefined ? "" : addClass)}>
        <input type="checkbox" className="checkbox-std__input" checked={checked} onChange={(e)=>func(e,arg)} />
        <div className="checkbox-std__cover"></div>
        <div className="checkbox-std__display"></div>
        <span className="checkbox-std__name">{name}</span>
    </label>
)

export const NoticeCheckBox = React.memo(({addClass,name,func,arg,checked}:CheckBox) =>(
    <label className={"checkbox-Notice "+(addClass === undefined ? "" : addClass)}>
        <input type="checkbox" className="checkbox-Notice__input" checked={checked} onChange={(e)=>func(e,arg)} />
        <div className="checkbox-Notice__cover"></div>
        <div className="checkbox-Notice__display"></div>
        <div className="checkbox-Notice__switch">{checked === true ? "ON" : "OFF"}</div>
    </label>
));
