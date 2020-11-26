import * as React from "react";
import { useCallback , useRef } from "react";
import { VscChevronLeft } from "react-icons/vsc";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";
import {Mode} from "../redux/reducer/type";
import {setMode} from "../redux/actions/mapDispatchToPtops";
import {BasicAnime} from "../fileSystem/animation";

const ArrowButton = () =>{
    const dispatch = useDispatch();
    const mode:Mode = useSelector((state:StateProps)=>state.modeReducer);
    const arrow = useRef(null);
    const swtichMode = useCallback(()=>{
        const moveArrow = new BasicAnime(arrow.current,"left");
        console.log(arrow.current);
        moveArrow.anime(500,1,"90%","0%");
        const cover = new BasicAnime(document.getElementById("whiteCover"),"top");
        const hide = cover.anime(500,1,"-100%","0%");
        hide.addEventListener("finish",()=>{
            moveArrow.anime(500,1,"0%","90%");
            setTimeout(()=>{
                dispatch(setMode(mode));
                cover.anime(300,1,"0%","-100%"); 
            },1000);
        });
    },[mode]);

    return(
        <div className="arrowButton" onClick={swtichMode} ref={arrow}>
        </div>
    )
}

export default ArrowButton;