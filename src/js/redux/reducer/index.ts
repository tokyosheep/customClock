import {TimeProp,ClockType,ClockText} from "./type";

const initProp:TimeProp = {
    image:"",
    text:"",
    noticefaction:false
}

const initTimeProps:TimeProp[] = new Array(12).fill(initProp);

export type TimeDispatch = {index:number,prop:string,value:string|boolean};

type TimeReducer = (state:TimeProp[],action:{type:string}&TimeDispatch)=>TimeProp[];

export const timePropsReducer:TimeReducer = (state=initTimeProps,action) =>{
    switch(action.type){
        case "timeProps_set":
            const stat = {...state};
            stat[action.index][action.prop] = action.value;
            return stat; 

        default:
            return state;
    }
}

const initClockType:ClockType = {
    type1:{
        checked:true
    },
    type2:{
        checked:false
    }
}

export type ClockTypeDispatch = {prop:string,value:boolean}

type ClockFunc = (state:ClockType,action:{type:string}&ClockTypeDispatch)=>ClockType;

export const clockTypeReducer:ClockFunc = (state=initClockType,action)=>{
    switch(action.type){
        case"clockType_check":
            const clock = {...state};
            Object.keys(clock).forEach(key=> clock[key].checked = false);
            clock[action.prop] = action.value;
            return clock;

        default:
            return state;
    }
}

const initClockText:ClockText = {
    place:{
        top:{
            checked:false
        },
        middle:{
            checked:true
        },
        bottom:{
            checked:false
        }
    },
    fontColor:{
        R:255,
        G:255,
        B:255
    }
}

export type Position = "top"|"middle"|"bottom";
export type RGBProp = "R"|"G"|"B";
export type ClockPlaceDispatch = {type:"clockText_setPlace",position:Position,checked:boolean};
export type ClockColorDispatch = {type:"clockText_setColor",color:RGBProp,num:number};
type ClockTextFunc={
    (state:ClockText,action:ClockPlaceDispatch):ClockText;
    (state:ClockText,action:ClockColorDispatch):ClockText;
}

export const clockTextReducer:ClockTextFunc = (state=initClockText,action)=>{
    switch(action.type){
        case "clockText_setPlace":
            const clockObj = {...state};
            Object.keys(clockObj.place).forEach(key=>clockObj.place[key] = false);
            clockObj.place[action.position] = action.checked;
            return clockObj;

        case "clockText_setColor":
            const clockColor = {...state};
            clockColor.fontColor = action.num;
            return clockColor;

        default:
            return state;
    }
}

export type StateProps = {
    timePropsReducer:TimeReducer,
    clockTypeReducer:ClockFunc,
    clockTextReducer:ClockTextFunc
}