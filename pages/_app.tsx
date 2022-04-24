import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
declare global {
    var variables: any;
    var set: any;
}
var variableEvent: any = () => {};
global.variables = { abc: true };
global.set = (key: string, value: any) => {
    global.variables[key] = value;
    variableEvent();
};

function MyApp({ Component, pageProps }: AppProps) {
    let [cefGlobals, setCefGlobals] = React.useState({});
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);
    variableEvent = () => {
        setCefGlobals(global.variables);
        forceUpdate();
    };
    // onEvent("variables", () => {

    //     setTimeout(() => {
    //         setCefGlobals(global.variables);
    //     }, 150);
    //     // alert(JSON.stringify(global.variables))
    // });
    return <Component {...pageProps} globals={cefGlobals} />;
}

export default MyApp;
