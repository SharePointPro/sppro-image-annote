import React  from "react";
import { Arrow } from "react-konva";
import BaseDrawable from "./BaseDrawable";

export default class ArrowDrawable extends BaseDrawable {
    constructor(startx, starty, color, key) {
        super(startx, starty);
        this.x = startx;
        this.y = starty;
        this.key = key;
        this.color = color;    
    }
    registerMovement(x, y) {
        this.x = x;
        this.y = y;
    }
    render() {
        const points = [this.startx, this.starty, this.x, this.y];
        return <Arrow points={points} fill={this.color} stroke={this.color} key={this.key} />;
    }
}
