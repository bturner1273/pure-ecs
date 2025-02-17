import Entity from "./Entity";
import Preloadable from "./Preloadable";
import Subsystem from "./Subsystem";

export default interface System extends Preloadable {
  /**
   * The current tick of the system. This is a monotonically increasing
   * number representing current time in milliseconds. It is updated
   * every time the run loop iterates.
   */
  tick: number;
  entities: Array<Entity>;
  subsystems: Array<Subsystem>;
  run: () => void;
  pause: () => void;
  resume: () => void;
  exit: () => void;
}
