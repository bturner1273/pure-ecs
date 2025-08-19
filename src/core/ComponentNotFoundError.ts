import { ComponentKey } from "./Component";
import Entity from "./Entity";
import SystemError from "./SystemError";

export default class ComponentNotFoundError extends SystemError {
  entity: Entity;
  componentKey: ComponentKey;
  constructor(componentKey: ComponentKey, entity: Entity) {
    super(`Component: ${componentKey} not found in entity: ${entity.id}`);
    this.entity = entity;
    this.componentKey = componentKey;
  }
}
