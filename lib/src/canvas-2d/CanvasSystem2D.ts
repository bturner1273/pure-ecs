import Entity from "../core/Entity";
import Subsystem from "../core/Subsystem";
import System from "../core/System";
import Asset from "./asset/Asset";
import CanvasNotFoundError from "./error/CanvasNotFoundError";
import CanvasSystem2DContext from "./context/CanvasSystem2DContext";
import Canvas2D from "./context/rendering/Canvas2D";
import ResourceManager from "./context/ResourceManager";
import ExpectedHTMLCanvasElementError from "./error/ExpectedHTMLCanvasElementError";
import NullRenderingContextError from "./error/NullRenderingContextError";

export default class CanvasSystem2D implements System {
  tick: number;
  subsystems: Array<Subsystem>;
  entities: Array<Entity>;
  context: CanvasSystem2DContext;
  assets?: Map<string, Asset>;
  canvas: HTMLCanvasElement;

  constructor(
    canvasId: string,
    subsystems?: Array<Subsystem>,
    entities?: Array<Entity>,
    assets?: Map<string, Asset>
  ) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) throw new CanvasNotFoundError(canvasId);
    if (!(canvas instanceof HTMLCanvasElement))
      throw new ExpectedHTMLCanvasElementError(canvas);
    this.canvas = canvas;
    this.tick = 0;
    this.subsystems = subsystems ?? [];
    this.entities = entities ?? [];
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new NullRenderingContextError("2d");
    let resourceManager: ResourceManager | undefined;
    if (assets) {
      resourceManager = new ResourceManager(assets);
    }
    this.context = {
      renderingContext: new Canvas2D(ctx),
      resourceManager,
    };
    this.assets = assets;
  }

  async preload() {
    await Promise.all(
      this.subsystems.reduce<Array<Promise<void>>>((acc, subsystem) => {
        if (subsystem.preload) {
          acc.push(subsystem.preload());
        }
        return acc;
      }, [])
    );
  }
  run: () => void = () => {
    throw new Error("Not implemented");
  };
  pause: () => void = () => {
    throw new Error("Not implemented");
  };
  resume: () => void = () => {
    throw new Error("Not implemented");
  };
  exit: () => void = () => {
    throw new Error("Not implemented");
  };
}
