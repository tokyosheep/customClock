import * as path from "path";

export const imageExts = [".jpg",".jpeg",".png",".gif"];

export const isImg:(filePath:string)=>boolean = filePath => imageExts.some(img=> path.extname(filePath.toLowerCase()) === img);