import * as React from "react";
import {Button} from "./types";

export const StdButton = ({func,name,arg,addClass}:Button)=>(
    <button className={"button-std " + addClass} onClick={(e)=>func(e,arg)}>{name}</button>
)