import * as React from "react";
import {TextBox,NumberBox} from "./types";

export const StdTextArea = React.memo(({name,func,addClass,arg,value}:TextBox<string>) =>(
    <label className={"textArea-std "+addClass}>
        <textarea className="textArea-std__input" value={value} name={name} onChange={(e)=>func(e,arg)} rows={5} cols={20}></textarea>
    </label>
));

export const StdNumberBox = ({name,func,addClass,arg,value,max,min,step,disabled=false}:NumberBox)=>(
    <label className={"number-std "+addClass}>
        <span className="number-std__name">{name}</span>
        <input type="number" className="number-std__input" value={value} onChange={(e)=>func(e,arg)} max={max} min={min} step={step} disabled={disabled}/>
    </label>
)