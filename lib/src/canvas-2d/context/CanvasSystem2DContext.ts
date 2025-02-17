import Asset from "../asset/Asset";
import RenderingContext2D from "./rendering/RenderingContext2D";
import ResourceManager from "./ResourceManager";

export default interface CanvasSystem2DContext {
  renderingContext: RenderingContext2D;
  resourceManager?: ResourceManager;
}
