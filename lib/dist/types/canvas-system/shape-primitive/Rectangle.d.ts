import ShapePrimitive from "./ShapePrimitive";
export interface Rectangle extends ShapePrimitive {
    kind: "rectangle";
    width: number;
    height: number;
}
