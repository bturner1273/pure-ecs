import Component from "./Component";
export default abstract class Entity {
    private components;
    constructor(components: Map<string, Component>);
    addComponent(component: Component): void;
    addComponents(...components: Array<Component>): void;
    getComponent<T>(key: string): T | undefined;
    removeComponent(key: string): void;
}
