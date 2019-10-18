import React from "react";
import { Text } from "react-konva";
import BaseDrawable from "./BaseDrawable";
import textareaGenerator from "./textareaGenerator";

export default class TextDrawable extends BaseDrawable {
    constructor(startx, starty, color, key, fontFamily = 'Arial') {
        super(startx, starty);
        this.key = key;
        this.color = color;
        this.fontFamily = fontFamily;

    }

    renderTextArea(onBlur) {
        textareaGenerator(this.startx, this.starty, this.color, this.fontFamily, (element) => {
            this.text = element.target.value;
            if (element.target.value !== ""){
                onBlur(this);
            }
             else{
                onBlur(null);
             }
        });
    }

    render() {
        return <Text text={this.text} draggable={true} x={this.startx} y={this.starty} fill={this.color} key={this.key} fontFamily={this.fontFamily}></Text>;
    }

}