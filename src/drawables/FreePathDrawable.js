import React  from "react";
import { Line } from "react-konva";
import BaseDrawable from "./BaseDrawable";

export default class FreePathDrawable extends BaseDrawable {
    constructor(startx, starty, color, key) {
        super(startx, starty);
        this.points = [startx, starty];
        this.key = key;
        this.color = color;
    }

    registerMovement(x, y) {
        this.points = [...this.points, x, y];
    }
    render() {
        return <Line points={this.points} fill={this.color} stroke={this.color} key={this.key} />;
    }
}