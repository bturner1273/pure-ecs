import SystemError from "../../core/SystemError";

export default class NullRenderingContextError extends SystemError {
  contextType: string;
  constructor(contextType: string) {
    super(`${contextType} is null`);
    this.contextType = contextType;
  }
}
