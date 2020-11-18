export type TimeProp = {
    image:string,
    text:string,
    noticefaction:boolean,
}

export type ClockType = {
    type1:{
        checked:boolean
    }
    type2:{
        checked:boolean
    }
}

export type ClockText = {
    place:{
        top:{
            checked:boolean
        }
        middle:{
            checked:boolean
        }
        bottom:{
            checked:boolean
        }
    },
    fontColor:{
        R:number,
        G:number,
        B:number
    }
}