import {TimeDispatch,ClockTypeDispatch,Position,RGBProp,ClockPlaceDispatch,ClockColorDispatch} from "../reducer/index";

export const setTimeProps:(index:number,prop:string,value:string|boolean)=>{type:"timeProps_set"}&TimeDispatch = (index,prop,value) =>{
    return{type:"timeProps_set",index:index,prop:prop,value:value};
}

export const setClockType:(prop:string,value:boolean)=>ClockTypeDispatch = (prop,value)=>{
    return{prop:prop,value:value};
}

export const setClockFonts:(position:Position,checked:boolean)=>ClockPlaceDispatch = (position,checked) =>{
    return{type:"clockText_setPlace",position:position,checked:checked};
}

export const setClockColor:(RGBProp:RGBProp,num:number)=>ClockColorDispatch = (RGBProp,num)=>{
    return{type:"clockText_setColor",color:RGBProp,num:num};
}