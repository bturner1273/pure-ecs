import Asset from "../asset/Asset";

export default class ResourceManager {
  assets: Map<string, Asset>;
  constructor(assets: Map<string, Asset>) {
    this.assets = assets;
  }

  async loadAssets() {
    await this.loadImages();
  }

  private async loadImages() {
    await Promise.all(
      Array.from(this.assets.values()).reduce<Array<Promise<void>>>(
        (acc, asset) => {
          if (asset.kind === "image") {
            acc.push(
              new Promise<void>((resolve, reject) => {
                const image = new Image();
                image.onload = () => {
                  asset.image = image;
                  resolve();
                };
                image.onerror = (e) => {
                  reject(e);
                };
                image.src = asset.src;
              })
            );
          }
          return acc;
        },
        []
      )
    );
  }
}
