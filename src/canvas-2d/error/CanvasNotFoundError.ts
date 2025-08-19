import SystemError from "../core/SystemError";

export default class CanvasNotFoundError extends SystemError {
  canvasId: string;
  constructor(canvasId: string) {
    super(`Canvas: ${canvasId} not found`);
    this.canvasId = canvasId;
  }
}
