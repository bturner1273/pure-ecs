import SystemError from "../../core/SystemError";

export default class ExpectedHTMLCanvasElementError extends SystemError {
  element: HTMLElement;
  constructor(element: HTMLElement) {
    super(`Expected HTMLCanvasElement, got ${element}`);
    this.element = element;
  }
}
