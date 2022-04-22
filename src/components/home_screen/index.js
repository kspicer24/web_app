import React from "react";
import HomeComponent from "./home_component";
import Navigation from "../navigation";
import Wiki from "../wiki";


const Index = () => {
    return (
        <>
            <div className={"row header"}>
                <span>Wizards and Shit</span>
            </div>
            <div className={"row flex-noWrap"}>
                <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                    <Navigation/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-7 mainComponent"}>
                    <HomeComponent/>
                </div>
                <div className={"d-none d-sm-none d-md-none d-lg-block col-lg-2 col-xl-3 col-xxl-3 rightComponent"}>
                    <Wiki/>
                </div>
            </div>
        </>
    );
}

export default Index;