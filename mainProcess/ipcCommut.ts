const electron = require("electron");
const { ipcMain } = require("electron");
const { dialog } = require("electron");

export const initIpcEvent = () =>{
    ipcMain.handle("getImgPath",event=>{
        const image = dialog.showOpenDialog({properties:["openFile"],
            filters:[{name:"images",extensions:["jpg","png","gif"]}]
        });
        return image;
    })
}