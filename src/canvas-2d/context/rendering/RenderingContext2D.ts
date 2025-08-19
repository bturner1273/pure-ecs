import { Point2D } from "../../Point2D";

export default interface RenderingContext2D {
  drawImage(image: HTMLImageElement, position: Point2D): void;
}
