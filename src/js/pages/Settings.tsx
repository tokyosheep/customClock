import * as React from "react";

import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";

const SettingForm = () =>{
    const clockProps = useSelector((state:StateProps)=> state);
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log(clockProps);
    return(
        <div className="containerSetting">

        </div>
    )
}

export default SettingForm;
