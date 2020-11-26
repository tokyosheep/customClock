import * as React from "react";
import {CheckBox} from "./types";

export const StdRadioButton = ({checked,name,func,arg,disabled=false}:CheckBox)=>(
    <label className="stdRadio">
        <input type="radio" className="stdRadio__input" onChange={(e)=>func(e,arg)} checked={checked} disabled={disabled}/>
        <span className="stdRadio__name">{name}</span>
        <div className="stdRadio__box"></div>
    </label>
)