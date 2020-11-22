import * as React from "react";

import {NativeTypes} from "react-dnd-html5-backend";
import { useDrop, DropTargetMonitor,DragObjectWithType} from "react-dnd";
import { wrapPromise } from "../../parts/suspendLoad";
import {ClickFunc} from "./hourCompo";



export type TargetBox = {
    onDrop:(items:DragObjectWithType,monitor:DropTargetMonitor)=>void,img:HTMLImageElement|false,clickFunc:ClickFunc
}

const ImageElm:(props:TargetBox)=>JSX.Element = React.memo(({img,clickFunc,onDrop}) => {
    const [{canDrop,isOver},drop] = useDrop({
        accept:[NativeTypes.FILE],
        drop(item,monitor){
            if(onDrop){
                onDrop(item,monitor);
            }
        },
        collect:(monitor)=>({
            isOver:monitor.isOver(),
            canDrop:monitor.canDrop()
        })
    });
    const isActive = canDrop && isOver;

    return(
        <div className={"imageBox " + (isActive ? "dropOver" : "")} ref={drop} onClick={clickFunc} >
            {(img === false ? <span>falls....</span> : <img src={img.src} style={{width:img.width < img.height ?  "100px" : "auto",height:img.height < img.width ?  "100px" : "auto" }}/>)}
        </div>
    )
})

export const imageSrc:(props:{imgPath:string})=>{read} = ({imgPath})=>{
    const promise:Promise<HTMLImageElement|false> = new Promise((resolve,reject)=>{
        const image = new Image();
        if(imgPath === "")resolve(false);
        image.src = imgPath;
        image.onload = () =>{
            resolve(image);
        }
    });
    return wrapPromise(promise);
}


export const ImgResult = ({image,handleClickImage,handleDroppedList}) => {
    return(
        <ImageElm img={image} clickFunc={handleClickImage} onDrop={handleDroppedList}/>
    )
}
