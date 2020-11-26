export const dispatchNoticefaction:(title:string,text:string)=>void = (title,text) =>{
    const myNoticefaction = new Notification(title,{
        body:text
    });
}