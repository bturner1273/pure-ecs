import Entity from "./Entity";
import Subsystem from "./Subsystem";

export default abstract class System<TContext> {
  tick: number = 0;
  entities: Array<Entity> = [];
  abstract subsystems: Array<Subsystem<TContext>>;
  abstract context: TContext;
  abstract preload: () => Promise<void>;
  abstract run: () => void;
  abstract pause: () => void;
  abstract resume: () => void;
  abstract exit: () => void;
}
