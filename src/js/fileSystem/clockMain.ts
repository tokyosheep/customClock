export type TimeObj = {
    hour:string,
    minute:string,
    second:string
}

export const clockTicking:()=>TimeObj = () =>{
    const d = new Date();
    const hour = String(d.getHours());
    const minute = String(d.getMinutes());
    const second = String(d.getSeconds());
    return {hour:hour.padStart(2,"0"),minute:minute.padStart(2,"0"),second:second.padStart(2,"0")};
}

export const writeClockTime:(TimeObj:TimeObj)=>string = timeObj => `${timeObj.hour}:${timeObj.minute}:${timeObj.second}`;