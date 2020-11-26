import * as React from "react";

const Loading = () =>(
    <div className="loading" id="loading">
        <ul className="loading__circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div className="loading__title">loading</div>
    </div>
)

export default Loading;