import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Stage, Layer, Image, Text } from "react-konva";
import FreePathDrawable from "./drawables/FreePathDrawable";
import ArrowDrawable from "./drawables/ArrowDrawable";
import CircleDrawable from "./drawables/CircleDrawable";
import TextDrawable from "./drawables/TextDrawable";
import Toolbar from "./toolbar/Toolbar";
import Styles from "./index.module.css";

const DEFAULT_COLOR = "black";

export default class SpproImageAnnote extends Component {
  static propTypes = {
    url: PropTypes.string
  }

  constructor(props) {
    super(props);
    const img = document.createElement('img');
    img.addEventListener('load', this.onload);
    img.addEventListener('error', this.onerror);
    img.src = props.url;
    this.state = {
      img: img,
      drawables: [],
      newDrawable: [],
      newDrawableType: "FreePathDrawable",
      color: DEFAULT_COLOR,
      stageClass: Styles.crosshair
    }
  }


  /* Events */

  onload = () => {
    this.setState({ status: 'loaded' });
  }

  onerror = () => {
    this.setState({ status: 'failed' });
  }


  onMouseDown = e => {
    const { x, y } = e.target.getStage().getPointerPosition();
    if (this.state.newDrawableType === "TextDrawable") {
      if (!this.state.textAreaInView) {
        const newDrawable = new TextDrawable(x, y, this.state.color, this.state.drawables.length);
        newDrawable.renderTextArea((textElement) => {
          this.setState({ textAreaInView: false });
          if (textElement) {
            const { drawables } = this.state;
            drawables.push(textElement);
            this.setState({ drawables })
          }
        });
        this.setState({ textAreaInView: true });
      }
    }
    else {
      const { newDrawable } = this.state;
      if (newDrawable.length === 0) {

        const newDrawable = this.getNewDrawableBasedOnType(
          x,
          y,
          this.state.newDrawableType,
          this.state.drawables.length
        );
        this.setState({
          newDrawable: [newDrawable]
        });
      }
    }
  };

  onMouseUp = e => {
    if (this.state.newDrawableType === "TextDrawable") {

    }
    else {
      const { newDrawable, drawables } = this.state;
      if (newDrawable.length === 1) {
        const { x, y } = e.target.getStage().getPointerPosition();
        const drawableToAdd = newDrawable[0];
        drawableToAdd.registerMovement(x, y);
        drawables.push(drawableToAdd);
        this.setState({
          newDrawable: [],
          drawables
        });
      }
    }
  };

  onMouseMove = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const updatedNewDrawable = newDrawable[0];
      updatedNewDrawable.registerMovement(x, y);
      this.setState({
        newDrawable: [updatedNewDrawable]
      });
    }
  };

  onDrawableTypeChange = drawableType => {
    this.setState({ newDrawableType: drawableType });
    switch (drawableType) {
      case "TextDrawable":
        this.setState({ stageClass: Styles.text, newDrawableType: drawableType })
        break;
      default:
        this.setState({ stageClass: Styles.crosshair, newDrawableType: drawableType })
        break;
    }
  }

  onUndo = () => {
    let { drawables } = this.state;
    if (drawables && drawables.length > 0) {
      drawables.pop();
    }else{
      drawables = [];
    }
    this.setState({
      newDrawable: [],
      drawables
    });
  }

  onSave = () => {
    this.props.onSave(this.stageRef.toDataURL())
  }

  /* End Events */

  getNewDrawableBasedOnType = (x, y, type, key) => {
    const drawableClasses = {
      FreePathDrawable,
      ArrowDrawable,
      CircleDrawable,
      TextDrawable
    };
    return new drawableClasses[type](x, y, this.state.color, key);
  };


  render() {
    const drawables = [...this.state.drawables, ...this.state.newDrawable];
    if (this.state.status === 'loaded') {
      return (
        <div className={Styles.overlay}>
          <Toolbar
            onClick={this.onDrawableTypeChange}
            onColorChanged={(color) => this.setState({ color: color })}
            onUndo={this.onUndo}
            onSave={this.onSave}
            defaultColor={DEFAULT_COLOR} />
          <div className={Styles.centeredBox}>
            <div>
              <Stage
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
                width={this.state.img.width}
                height={this.state.img.height}
                className={this.state.stageClass}
                ref={ref => { this.stageRef = ref; }}
              >
                <Layer>
                  <Image image={this.state.img} />
                  {drawables.map(drawable => {
                    return drawable.render();
                  })}
                </Layer>
              </Stage>
            </div>
          </div>
        </div>
      )
    }
    else
      return (
        <div>Loading..</div>
      )

  }
}
