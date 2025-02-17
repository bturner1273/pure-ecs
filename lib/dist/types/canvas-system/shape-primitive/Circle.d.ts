import ShapePrimitive from "./ShapePrimitive";
export default interface Circle extends ShapePrimitive {
    kind: "circle";
    radius: number;
}
