import {
  DrawContext,
  DrawSettings,
  TextSettings,
  Transform,
} from "./DrawableSubsystem";
export default class CanvasRendering2dDrawContext implements DrawContext {
  private ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  clearRect(x: number, y: number, w: number, h: number): void {
    this.ctx.clearRect(x, y, w, h);
  }
  private contextTransformAcquireRelease =
    (draw: () => void) => (t: Transform) => {
      this.ctx.save();
      this.ctx.translate(t.x, t.y);
      this.ctx.rotate(t.rotation);
      this.ctx.scale(t.scale, t.scale);
      draw();
      this.ctx.restore();
    };
  private drawRectHelper(w: number, h: number, s?: DrawSettings) {
    if (s?.fillStyle) this.ctx.fillStyle = s.fillStyle;
    if (s?.strokeStyle) this.ctx.strokeStyle = s.strokeStyle;
    if (s?.lineWidth) this.ctx.lineWidth = s.lineWidth;
    this.ctx.fillRect(-w / 2, -h / 2, w, h);
    this.ctx.strokeRect(-w / 2, -h / 2, w, h);
  }
  drawRect(t: Transform, w: number, h: number, s?: DrawSettings): void {
    this.contextTransformAcquireRelease(() => this.drawRectHelper(w, h, s))(t);
  }
  private drawTextHelper(text: string, s?: TextSettings) {
    if (s?.fillStyle) this.ctx.fillStyle = s.fillStyle;
    if (s?.strokeStyle) this.ctx.strokeStyle = s.strokeStyle;
    if (s?.lineWidth) this.ctx.lineWidth = s.lineWidth;
    if (s?.font) this.ctx.font = s.font;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
  }
  drawText(text: string, t: Transform, s?: TextSettings): void {
    this.contextTransformAcquireRelease(() => this.drawTextHelper(text, s))(t);
  }
  drawImage(image: HTMLOrSVGImageElement, t: Transform): void {
    this.contextTransformAcquireRelease(() =>
      this.ctx.drawImage(image, -image.width / 2, -image.height / 2)
    )(t);
  }
}
