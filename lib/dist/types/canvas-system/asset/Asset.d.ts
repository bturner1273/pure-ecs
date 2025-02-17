import ImageAsset from "./ImageAsset";
type Asset = {
    kind: "image";
} & ImageAsset;
export default Asset;
export type ExtractedAsset<T extends Asset["kind"]> = Extract<Asset, {
    kind: T;
}>;
