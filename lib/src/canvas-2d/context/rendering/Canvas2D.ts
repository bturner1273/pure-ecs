import { Point2D } from "../../Point2D";
import RenderingContext2D from "./RenderingContext2D";

export default class Canvas2D implements RenderingContext2D {
  ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  drawImage(image: HTMLImageElement, position: Point2D): void {
    this.ctx.drawImage(image, position.x, position.y);
  }
}
