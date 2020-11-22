import * as React from "react";
import { useCallback } from "react";
import { MdRotateRight } from "react-icons/md";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";
import {Mode} from "../redux/reducer/type";
import {setMode} from "../redux/actions/mapDispatchToPtops";

const ArrowButton = () =>{
    const dispatch = useDispatch();
    const mode:Mode = useSelector((state:StateProps)=>state.modeReducer);
    const swtichMode = useCallback(()=>dispatch(setMode(mode)),[mode])
    return(
        <div className="arrowButton" onClick={swtichMode}>
            <MdRotateRight style={{width:100,height:100}}/>
        </div>
    )
}

export default ArrowButton;