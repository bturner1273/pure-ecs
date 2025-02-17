import Entity from "./Entity";
export default abstract class Component {
    key: string;
    entity: Entity;
    constructor(key: string, entity: Entity);
    abstract update: (tick: number) => void;
}
