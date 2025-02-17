import Circle from "./Circle";
import { Rectangle } from "./Rectangle";

type ShapePrimitive =
  | ({ kind: "circle" } & Circle)
  | ({ kind: "rectangle" } & Rectangle);
export default ShapePrimitive;
export type ExtractedShapePrimitive<T extends ShapePrimitive["kind"]> = Extract<
  ShapePrimitive,
  { kind: T }
>;
