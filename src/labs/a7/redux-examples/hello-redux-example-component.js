import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // useSelector: hello is the object returned by the reducer
    const message = useSelector((state) => state.hello.message);
    return(
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;