export interface DrawSettings {
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
}
export interface TextSettings extends DrawSettings {
  font: string;
}
export interface DrawContext {
  drawImage(image: CanvasImageSource, t: Transform): void;
  drawText(text: string, t: Transform, s?: TextSettings): void;
  drawRect(t: Transform, w: number, h: number, s?: DrawSettings): void;
  clearRect(x: number, y: number, w: number, h: number): void;
}
export interface Transform {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}
export interface Drawable {
  transform: Transform;
  texture: CanvasImageSource;
}
