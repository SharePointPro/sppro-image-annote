import React from "react";
import Styles from "./toolbar.module.css";

const ToolbarButton = (props) => {
     
   return (
        <tr>
            <td onClick={props.onClick} className={Styles.toolButton + " " + (props.selected ? Styles.active : "")}>{props.children}</td>
        </tr>
    )
}

export default ToolbarButton;