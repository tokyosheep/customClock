import * as React from "react";
import {useCallback,Suspense,useMemo,useState} from "react";
import {useDispatch} from "react-redux";

import {DndProvider,DropTargetMonitor} from "react-dnd";
import {HTML5Backend}from "react-dnd-html5-backend";

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

const HourCompo:(props:{index:number,noticefaction:boolean,text:string,image:string})=>JSX.Element = ({index,noticefaction,image,text}) =>{
    const dispatch = useDispatch();
    
    const handleClickImage:ClickFunc = useCallback(()=>{
        (async()=>{
            const {filePaths} = await ipcRenderer.invoke("getImgPath");
            console.log(filePaths);
            if(filePaths.length < 1)return;
            const filePath = filePaths[0];
            if(!isImg(filePath)){
                alert("the image is accepted only jpg , png , gif")
                return;
            }
            dispatch(setTimeProps(index,"image",filePath));
        })();
    },[image]);
    const handleDroppedList = useCallback((item:React.PropsWithChildren<DragObjectWithType>,monitor:DropTargetMonitor)=>{
        console.log(item);
        const dropped = monitor.getItem().files;
        console.log(dropped);
        if(!isImg(dropped[0].path)){
            alert("the image is accepted only jpg , png , gif")
            return;
        }
        dispatch(setTimeProps(index,"image",dropped[0].path));
    },[image]);
    const handleTextArea = useCallback((e,arg)=>dispatch(setTimeProps(index,"text",e.target.value)),[text]);
    const checkedBtn = useCallback((e,arg)=>dispatch(setTimeProps(index,"noticefaction",e.target.checked)),[noticefaction]);
    const [imageResource,setImageResource] = useState(imageSrc({imgPath:image}));
    useMemo(()=>setImageResource(imageSrc({imgPath:image})),[image]);
    /* usememoでimageパスの更新をコントロールしないと何度もsuspenseが読み込みをしてしまう。 */
    const ReadImg = () =><ImgResult image={imageResource.read()} handleClickImage={handleClickImage} handleDroppedList={handleDroppedList}/>;
    return(
        <div className="HourCompo">
            <span className="HourCompo__hour degitalTimer">{turnIndexClock(index)}</span>
            <div className="HourCompo__main">
                <StdTextArea value={text} name="text" func={handleTextArea}/>
                <Suspense fallback={<SuspendLoading />}>
                    <DndProvider backend={HTML5Backend}>
                        <ReadImg />
                    </DndProvider>
                </Suspense>
            </div>
            <div className="HourCompo__checkBox">
                <NoticeCheckBox func={checkedBtn} checked={noticefaction} name="noticefaction"/>
                <span className="noticefactionText">noticefaction</span>
            </div>
        </div>
    )
}

export default React.memo(HourCompo);