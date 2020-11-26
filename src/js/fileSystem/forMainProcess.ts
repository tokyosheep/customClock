import * as fs from "fs";
export const makeFolder = folder => fs.promises.mkdir(folder);