import { ComponentKey } from "./Component";
import Entity from "./Entity";
import Preloadable from "./Preloadable";

export default interface Subsystem extends Preloadable {
  /**
   * A list of components that a subsystem operates on.
   *
   * @remarks This ensures the system can
   */
  componentDependencies: Array<ComponentKey>;
  /**
   * A list of subsystems to run before this subsystem.
   * @remarks This ensures the system can build a proper dependency
   * graph out of the included subsystems to determine run order.
   */
  subsystemDependencies: Array<string>;
  /**
   * Update the subsystem
   * @param entities - Array of entities to update
   * @param dt - Delta time in milliseconds from last update
   * @returns void
   */
  update?: (entities: Array<Entity>, dt: number) => void;
}
