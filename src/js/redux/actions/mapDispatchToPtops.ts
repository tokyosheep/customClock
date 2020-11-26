import {TimeDispatch,ClockTypeDispatch,Position,RGBProp,ClockPlaceDispatch,ClockColorDispatch,ModeFunc} from "../reducer/index";
import {Mode,TimeProp} from "../reducer/type";

export const setTimeProps:(index:number,prop:string,value:string|boolean)=>{type:"timeProps_set"}&TimeDispatch = (index,prop,value) =>{
    return{type:"timeProps_set",index:index,prop:prop,value:value};
}

export const setTimePropAll:(array:TimeProp[])=>{type:string,array:TimeProp[]} = array=>{
    return{type:"timeProps_loaded",array:array}
}

export const setClockType:(prop:string,value:boolean)=>ClockTypeDispatch = (prop,value)=>{
    return{type:"clockType_check",prop:prop,value:value};
}

export const setClockFonts:(position:Position,checked:boolean)=>ClockPlaceDispatch = (position,checked) =>{
    return{type:"clockText_setPlace",position:position,checked:checked};
}

export const setClockColor:(RGBProp:RGBProp,num:number)=>ClockColorDispatch = (RGBProp,num)=>{
    return{type:"clockText_setColor",color:RGBProp,num:num};
}

export const setMode:(mode:Mode)=>{type:string,mode:Mode} = mode =>{
    return{type:"mode_set",mode:mode}
}