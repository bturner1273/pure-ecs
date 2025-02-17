import AssetBase from "./AssetBase";
import ImageAsset from "./ImageAsset";

type Asset = ({ kind: "image" } & ImageAsset) | ({ kind: "audio" } & AssetBase);
export default Asset;
export type ExtractedAsset<T extends Asset["kind"]> = Extract<
  Asset,
  { kind: T }
>;
