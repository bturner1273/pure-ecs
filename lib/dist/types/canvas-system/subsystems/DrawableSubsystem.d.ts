export interface Transform {
    x: number;
    y: number;
    rotation: number;
    scale: number;
}
export type VerticalAnchorPositionString = "top" | "center" | "bottom";
export type HorizontalAnchorPositionString = "left" | "center" | "right";
export type AnchorPosition = {
    x: number;
    y: number;
} | {
    horizontal: HorizontalAnchorPositionString;
    vertical: VerticalAnchorPositionString;
};
export interface Drawable {
    transform: Transform;
    anchorPosition: AnchorPosition;
}
