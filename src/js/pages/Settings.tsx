import * as React from "react";
import ClockHeader from "../components/settingsCompo/clockHeader";
import ClockOptions from "../components/settingsCompo/clockOptions";
import HoursList from "../components/settingsCompo/hoursList";
import Footer from "../components/footer";
import {useSelector,useDispatch} from "react-redux";
import {StateProps} from "../redux/reducer/index";

const SettingForm = () =>{
    const clockProps = useSelector((state:StateProps)=> state);
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log(clockProps);
    return(
        <div className="containerSetting">
            <ClockHeader />
            <ClockOptions />
            <HoursList />
            <Footer />
        </div>
    )
}

export default SettingForm;
