const electron = require("electron");
const { ipcMain } = require("electron");
const { dialog } = require("electron");
const app = electron.app;

const DataStore = require("nedb");

export const initIpcEvent = async() =>{
    const strage = (()=>{
        try{
            return `${app.getPath("appData")}/customClockStrage`;
            //console.log(app.getPath("documents"));
        }catch(e){
            console.log(e);
        }
    })();

    const db = new DataStore({
        filename:`${strage}/clock.db`,
        //filename:databasePath,
        autoload:true
    });

    ipcMain.handle("getImgPath",event=>{
        const image = dialog.showOpenDialog({properties:["openFile"],
            filters:[{name:"images",extensions:["jpg","png","gif"]}]
        });
        return image;
    });

    ipcMain.handle("recordData",(event,docs)=>{
        return new Promise((resolve,reject)=>{
            db.remove({},{ multi: true },(err)=>{
                if(err)reject(err);
                db.insert(docs,(err,newDocs)=>{
                    if(err)reject(err);
                    console.log(newDocs);
                    resolve(true);
                });
            });
        });
    });

    ipcMain.handle("loadData",event=>{
        return new Promise((resolve,reject)=>{
            db.find({},(err,docs)=>{
                if(err)reject(err);
                resolve(docs);
            })
        })
    })
}