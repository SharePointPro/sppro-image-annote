import React, { Component }  from "react";
import Styles from "./toolbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCircle, faLongArrowAltRight, faFont, faSquareFull, faUndo, faSave} from '@fortawesome/free-solid-svg-icons'
import ToolbarButton from "./ToolbarButton";
import { PhotoshopPicker } from 'react-color';

export default class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showColorPicker: false,
            color: props.defaultColor,
            prevColor: props.defaultColor,
            selected: "FreePathDrawable"
        }
    }
    onColorChange = (color, e) => {
        this.props.onColorChanged(color.hex);
        this.setState({ color: color.hex});
    }

    onColorCancel = (e) => {
        this.setState({color: this.state.defaultColor, showColorPicker: false});
    }
    onShowColor = () => {
        this.setState({showColorPicker: !this.state.showColorPicker, defaultColor: this.state.color})
    }

    onDrawableChange = (e) => {
        this.props.onClick(e);
        this.setState({selected: e});
    }
    
    render() {
        return (
            <div className={Styles.toolbar}>
                <table className={Styles.toolbarTable}>
                    <tbody>
                        <ToolbarButton selected={this.state.selected === "FreePathDrawable"} onClick={(e) => this.onDrawableChange("FreePathDrawable")}><FontAwesomeIcon icon={faPencilAlt} color="white" /></ToolbarButton>
                        <ToolbarButton selected={this.state.selected === "CircleDrawable"} onClick={(e) => this.onDrawableChange("CircleDrawable")}><FontAwesomeIcon icon={faCircle} color="white" /></ToolbarButton>
                        <ToolbarButton selected={this.state.selected === "ArrowDrawable"} onClick={(e) => this.onDrawableChange("ArrowDrawable")}><FontAwesomeIcon icon={faLongArrowAltRight} color="white" /></ToolbarButton>
                        <ToolbarButton selected={this.state.selected === "TextDrawable"} onClick={(e) => this.onDrawableChange("TextDrawable")}><FontAwesomeIcon icon={faFont} color="white" /></ToolbarButton>
                        <ToolbarButton><FontAwesomeIcon onClick={this.onShowColor} icon={faSquareFull} color={this.state.color} /></ToolbarButton>
                        <ToolbarButton><FontAwesomeIcon onClick={this.props.onUndo} icon={faUndo} color="white" /></ToolbarButton>
                        <ToolbarButton><FontAwesomeIcon onClick={this.props.onSave} icon={faSave} color="white" /></ToolbarButton>

                    </tbody>
                </table> 
                    {this.state.showColorPicker && <PhotoshopPicker color={this.state.color} 
                    onChangeComplete={this.onColorChange} 
                    onAccept={() => this.setState({showColorPicker: false})}
                    onCancel={this.onColorCancel}
                     />}
            </div>
        )
    }
}

// const Toolbar = (props) => {.
//     //const [showColorPicker, setShowColorPicker] = useState(false);
//     const showColorPicker = false;
//     return (
//         <div className={Styles.toolbar}>
//             <table className={Styles.toolbarTable}>
//                 <tbody>
//                     <ToolbarButton onClick={(e) => props.onClick("FreePathDrawable")}><FontAwesomeIcon icon={faPencilAlt} color="white" /></ToolbarButton>
//                     <ToolbarButton onClick={(e) => props.onClick("CircleDrawable")}><FontAwesomeIcon icon={faCircle} color="white" /></ToolbarButton>
//                     <ToolbarButton onClick={(e) => props.onClick("ArrowDrawable")}><FontAwesomeIcon icon={faLongArrowAltRight} color="white" /></ToolbarButton>
//                     <ToolbarButton><FontAwesomeIcon icon={faFont} color="white" /></ToolbarButton>
//                     <ToolbarButton><FontAwesomeIcon onClick={(e) => setShowColorPicker(!showColorPicker)} icon={faSquareFull} color="white" /></ToolbarButton>
//                 </tbody>
//             </table>
//             {showColorPicker && <SketchPicker />}
//         </div>
//     )
// }
