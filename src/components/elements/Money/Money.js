import React from "react";
import "./styles.scss"

function Money(props) {

    return(
        <h1 className={'money'}>{props.renderNum}</h1>
    )
}

export default Money