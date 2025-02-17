import Entity from "./Entity";
interface SystemBase<TContext> {
    entities: Array<Entity>;
    context: TContext;
    preload: () => Promise<void>;
    run: () => void;
    pause: () => void;
    resume: () => void;
    exit: () => void;
}
export interface Subsystem<TContext> extends SystemBase<TContext> {
    runInterval: number;
}
export default interface System<TContext> extends SystemBase<TContext> {
    tick: number;
    subsystems: Array<Subsystem<TContext>>;
}
export {};
