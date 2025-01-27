import Component from "./Component";

export default abstract class Entity {
  private components: Map<string, Component>;
  constructor(components: Map<string, Component>) {
    this.components = components;
  }
  addComponent(component: Component) {
    this.components.set(component.key, component);
  }
  addComponents(...components: Array<Component>) {
    components.forEach(this.addComponent);
  }
  getComponent<T>(key: string): T | undefined {
    return this.components.get(key) as T | undefined;
  }
  removeComponent(key: string) {
    this.components.delete(key);
  }
}
