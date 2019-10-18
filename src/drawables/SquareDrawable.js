import React  from "react";
import { Rect } from "react-konva";
import ArrowDrawable from "./ArrowDrawable";

export default class SquareDrawable extends ArrowDrawable {
    constructor(startx, starty, color, key) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
        this.key = key;
        this.color = color;

    }
    render() {
        const dx = -(this.startx - this.x);
        const dy = -(this.starty - this.y);
        return (
            <Rect x={this.startx} y={this.starty} width={dx} height={dy} key={this.key} stroke={this.color} />
        );
    }
}
