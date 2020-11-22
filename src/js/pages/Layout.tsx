import * as React from "react";
import {useMemo} from "react";
import SettingForm from "./Settings";
import ClockForm from "./Clock";
import ArrowButton from "./arrowBtn";
import Loading from "../components/parts/loading";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";
import {Mode} from "../redux/reducer/type";

const Layout = () =>{
    const dispatch = useDispatch();
    const mode:Mode = useSelector((state:StateProps)=>state.modeReducer);
    console.log(mode);
    useMemo(()=>{
        setInterval(()=>{
            dispatch({type:"setTime"});
        },1000);
    },[]);
    return(
        <>
            <ArrowButton />
            {(mode === "setting" ? <SettingForm /> : <ClockForm />)}
        </>
    )
}

export default Layout;