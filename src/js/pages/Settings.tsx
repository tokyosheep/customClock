import * as React from "react";
import ClockHeader from "../components/settingsCompo/clockHeader";
import ClockOptions from "../components/settingsCompo/clockOptions";
import HoursList from "../components/settingsCompo/hoursList";
import Footer from "../components/footer";

const SettingForm = () =>{
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
