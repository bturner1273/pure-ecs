import Entity from "../core/Entity";
import System, { Subsystem } from "../core/System";
import Asset from "./asset/Asset";
interface CanvasGame2DContext {
}
interface CanvasGame2DSubsystem extends Subsystem<CanvasGame2DContext> {
    id: string;
}
export default class CanvasGame2D implements System<CanvasGame2DContext> {
    tick: number;
    subsystems: Array<CanvasGame2DSubsystem>;
    entities: Array<Entity>;
    context: CanvasGame2DContext;
    assets?: Record<string, Asset>;
    constructor(subsystems?: Array<CanvasGame2DSubsystem>, entities?: Array<Entity>, assets?: Record<string, Asset>);
    private getAssets;
    preload: () => Promise<void>;
    run: () => void;
    pause: () => void;
    resume: () => void;
    exit: () => void;
}
export {};
