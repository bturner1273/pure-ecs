import Component, { ComponentKey } from "./Component";
import ComponentNotFoundError from "./ComponentNotFoundError";

export default abstract class Entity {
  id: string;
  components: Array<Component>;
  constructor(id: string, components: Array<Component>) {
    this.id = id;
    this.components = components;
  }
  getFirstComponent<T extends Component>(componentKey: ComponentKey): T {
    return this.getComponentHelper(this.components, componentKey);
  }
  getLastComponent<T extends Component>(componentKey: ComponentKey): T {
    const components = this.components.slice().reverse();
    return this.getComponentHelper(components, componentKey);
  }
  getComponents<T extends Component>(componentKey: ComponentKey): Array<T> {
    const components = this.components.filter((c) =>
      c.isMatchingComponentType(componentKey)
    );
    if (!components.length)
      throw new ComponentNotFoundError(componentKey, this);
    return components as Array<T>;
  }
  hasComponent(componentKey: ComponentKey): boolean {
    return this.components.some((c) => c.isMatchingComponentType(componentKey));
  }
  removeFirstComponent(componentKey: ComponentKey): void {
    const index = this.getComponentIndexHelper(this.components, componentKey);
    this.components.splice(index, 1);
  }
  removeLastComponent(componentKey: ComponentKey): void {
    const index = this.getComponentIndexHelper(
      this.components.slice().reverse(),
      componentKey
    );
    this.components.splice(index, 1);
  }
  removeComponents(componentKey: ComponentKey): void {
    this.components = this.components.filter(
      (c) => !c.isMatchingComponentType(componentKey)
    );
  }

  private getComponentHelper<T extends Component>(
    components: Array<Component>,
    componentKey: ComponentKey
  ): T {
    const component = components.find((c) =>
      c.isMatchingComponentType(componentKey)
    );
    if (!component) throw new ComponentNotFoundError(componentKey, this);
    return component as T;
  }
  private getComponentIndexHelper(
    components: Array<Component>,
    componentKey: ComponentKey
  ): number {
    const index = components.findIndex((c) =>
      c.isMatchingComponentType(componentKey)
    );
    if (index === -1) throw new ComponentNotFoundError(componentKey, this);
    return index;
  }
}
