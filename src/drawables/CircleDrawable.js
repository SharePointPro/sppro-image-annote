import React  from "react";
import { Circle } from "react-konva";
import ArrowDrawable from "./ArrowDrawable";

export default class CircleDrawable extends ArrowDrawable {
    constructor(startx, starty, color, key) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
        this.key = key;
        this.color = color;

    }
    render() {
        const dx = this.startx - this.x;
        const dy = this.starty - this.y;
        const radius = Math.sqrt(dx * dx + dy * dy);
        return (
            <Circle radius={radius} x={this.startx} y={this.starty} key={this.key} stroke={this.color} />
        );
    }
}
