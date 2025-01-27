import Entity from "./Entity";

export default abstract class Component {
  key: string;
  entity: Entity;
  constructor(key: string, entity: Entity) {
    this.key = key;
    this.entity = entity;
  }
  abstract update: (tick: number) => void;
}
