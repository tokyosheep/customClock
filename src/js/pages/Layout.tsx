import * as React from "react";
import {useMemo} from "react";
import SettingForm from "./Settings";
import ClockForm from "./Clock";
import ArrowButton from "./arrowBtn";
import Loading from "../components/parts/loading";
import Cover from "./Cover";
import {makeFolder} from "../fileSystem/forMainProcess";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";
import {Mode,TimeProp} from "../redux/reducer/type";
import {setTimePropAll} from "../redux/actions/mapDispatchToPtops";
import { ipcRenderer } from "electron";
import {TimeObj,getHourIndex} from "../fileSystem/clockMain";
import {dispatchNoticefaction} from "../fileSystem/clockEvent";

const Layout = () =>{
    const dispatch = useDispatch();
    const mode:Mode = useSelector((state:StateProps)=>state.modeReducer);
    const timeTick:TimeObj = useSelector((state:StateProps)=>state.timeTick);
    const timeProp:TimeProp = useSelector((state:StateProps)=>state.timePropsReducer);
    const index = getHourIndex(timeTick);
    if(timeTick.minute==="00"&&timeTick.second==="00"&&timeProp[index].noticefaction){
        dispatchNoticefaction(timeTick.hour,timeProp[index].text);
    }
    useMemo(()=>{
        setInterval(()=>{
            dispatch({type:"setTime"});
        },1000);
        (async()=>{
            try{
                const docs = await ipcRenderer.invoke("loadData");
                console.log(docs);
                dispatch(setTimePropAll(docs));
            }catch(e){
                alert(e);
            }finally{
                document.getElementById("loading").classList.add("hide");
            }
        })();
    },[]);
    return(
        <>
            <Cover />
            <Loading />
            <ArrowButton />
            {(mode === "setting" ? <SettingForm /> : <ClockForm />)}
        </>
    )
}

export default Layout;