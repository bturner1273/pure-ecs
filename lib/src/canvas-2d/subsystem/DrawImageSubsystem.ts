import { ComponentKey } from "../../core/Component";
import Entity from "../../core/Entity";
import Subsystem from "../../core/Subsystem";
import CanvasSystem2DContext from "../context/CanvasSystem2DContext";

export default class DrawImageSubsystem implements Subsystem {
  context: CanvasSystem2DContext;
  subsystemDependencies: Array<string>;
  componentDependencies: Array<ComponentKey>;

  constructor(context: CanvasSystem2DContext) {
    this.context = context;
    this.subsystemDependencies = [];
    this.componentDependencies = ["position", ["view", "image"]];
  }
  update: (entities: Array<Entity>, dt: number) => void = (
    entities: Array<Entity>,
    dt: number
  ) => {
    throw new Error("Not implemented");
  };

  preload: () => Promise<void> = () => {
    throw new Error("Not implemented");
  };
}
