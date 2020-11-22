import * as React from "react";
import {useCallback,Suspense,useMemo,useState} from "react";
import {useDispatch} from "react-redux";

import {DndProvider,DropTargetMonitor} from "react-dnd";
import {HTML5Backend}from "react-dnd-html5-backend";

import {TimeProp} from "../../../redux/reducer/type";

import {setTimeProps} from "../../../redux/actions/mapDispatchToPtops";
import {imageSrc,ImgResult} from "./ImageBox";
import {StdTextArea} from "../../parts/text";
import {NoticeCheckBox} from "../../parts/checkBox";
import {SuspendLoading} from "../../parts/suspendLoad";
import {ipcRenderer} from "electron";
import {isImg} from "../../../fileSystem/imageFunc";
import {DragObjectWithType} from "react-dnd";

const turnIndexClock:(index:number)=>string = index => `${String(index+1).padStart(2,"0")}:00`;

export type ClickFunc = ()=>void;

const HourCompo:(props:{index:number,obj:TimeProp})=>JSX.Element = ({index,obj}) =>{
    console.log(obj);
    const dispatch = useDispatch();
    const handleClickImage:ClickFunc = useCallback(()=>{
        (async()=>{
            const {filePaths} = await ipcRenderer.invoke("getImgPath");
            console.log(filePaths);
            const filePath = filePaths[0];
            if(!isImg(filePath)){
                alert("the image is accepted only jpg , png , gif")
                return;
            }
            dispatch(setTimeProps(index,"image",filePath));
        })();
    },[obj.image]);
    const handleDroppedList = useCallback((item:React.PropsWithChildren<DragObjectWithType>,monitor:DropTargetMonitor)=>{
        console.log(item);
        const dropped = monitor.getItem().files;
        console.log(dropped);
        if(!isImg(dropped[0].path)){
            alert("the image is accepted only jpg , png , gif")
            return;
        }
        dispatch(setTimeProps(index,"image",dropped[0].path));
    },[obj.image]);
    const handleTextArea = useCallback((e,arg)=>dispatch(setTimeProps(index,"text",e.target.value)),[obj.text]);
    const checkedBtn = useCallback((e,arg)=>dispatch(setTimeProps(index,"noticefaction",e.target.checked)),[obj.noticefaction]);
    const imageResource = imageSrc({imgPath:obj.image});
    const ReadImg = () =><ImgResult image={imageResource.read()} handleClickImage={handleClickImage} handleDroppedList={handleDroppedList}/>;
    return(
        <div className="HourCompo">
            <span className="HourCompo__hour">{turnIndexClock(index)}</span>
            <div className="HourCompo__main">
                <StdTextArea value={obj.text} name="text" func={handleTextArea}/>
                <Suspense fallback={<SuspendLoading />}>
                    <DndProvider backend={HTML5Backend}>
                        <ReadImg />
                    </DndProvider>
                </Suspense>
            </div>
            <NoticeCheckBox func={checkedBtn} checked={obj.noticefaction} name="noticefaction"/>
        </div>
    )
}

export default React.memo(HourCompo);