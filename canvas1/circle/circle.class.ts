import { Component, ElementRef, OnDestroy, OnInit, Renderer, ViewChild } from '@angular/core';

// interface IShape {
//   x: number;
//   y: number;
//   radius: number;
//   lineWidth: number;
//   color: string;
// }

export class Circle  {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  public x: number = 0;
  public y: number = 0;
  public radius: number = 10;
  public lineWidth: number = 5;
  public color: string = 'lightblue';

  constructor( x: number, y: number, radius: number, lineWidth: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lineWidth =  lineWidth;
    this.color = color;
  }

  public draw = (): void => {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }
}
