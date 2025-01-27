import Entity from "./Entity";

export default abstract class Subsystem<TContext> {
  context: TContext;
  constructor(context: TContext) {
    this.context = context;
  }
  abstract update: (tick: number, entity: Entity) => void;
}
