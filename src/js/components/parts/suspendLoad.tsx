import * as React from "react";

export const SuspendLoading = () =>{
    return(
        <div className="suspend">
            <ul className="suspend__circle">
                <li></li>
                <li></li>
            </ul>
            <span className="suspend__text">loading...</span>
        </div>
    )
}

export const wrapPromise:(promise:Promise<unknown>)=>{read:()=>unknown} = promise =>{
    let status = "pending";
    let result;

    const suspender = promise.then(
        (r)=>{
            status = "fullfilled";
            result = r;
        },
        (e)=>{
            status = "rejected";
            result = e;
        }
    );

    const read = () =>{
        if(status === "pending"){
            throw suspender;
        }else if(status === "rejected"){
            throw result;
        }else{
            return result;
        }
    }

    return { read };
}