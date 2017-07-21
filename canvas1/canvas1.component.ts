import { Component, ElementRef, OnDestroy, OnInit, Renderer, ViewChild } from '@angular/core';
import { routerTransition } from './../animations';


@Component({
  selector: 'app-canvas1',
  templateUrl: './canvas1.component.html',
  styleUrls: ['./canvas1.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class Canvas1Component implements OnInit, OnDestroy {
  // Get the canvas element
  @ViewChild('myCanvas') canvasRef: ElementRef;

  private running: boolean;

  constructor() { }

  ngOnInit() {
    // Paint current framme
    this.running = true;
    this.paint();
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    // Draw background (which also effectively clears any previous drawing)
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 600);
    // drawing a circle
    // ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'lightblue';
    ctx.lineWidth = 3;
    ctx.arc(400, 200, 180, 0, 2 * Math.PI);
    ctx.arc(400, 200, 3, 0, 2 * Math.PI);
    ctx.stroke();
   // ctx.restore();
  }

  ngOnDestroy() {
    this.running = false;
  }

  private paint() {
  // Check that we're still running.
  if (!this.running) {
    return;
    }
  }

  // Toggle Animation
  toggleAnim() { };
}

class Circle  {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  public x = 0;
  public y = 0;
  public radius = 10;
  public lineWidth = 5;
  public color = 'lightblue';

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
