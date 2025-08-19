import Component from "../../core/Component";
import { Point2D } from "../Point2D";

interface ViewComponent {
  anchorOffset: Point2D;
}

abstract class ViewComponent extends Component implements ViewComponent {
  anchorOffset: Point2D;
  static baseKey: string = "view";
  constructor(componentKey: string, anchorOffset: Point2D) {
    super([ViewComponent.baseKey, componentKey]);
    this.anchorOffset = anchorOffset;
  }
}

export class ImageViewComponent extends Component implements ViewComponent {
  assetKey: string;
  anchorOffset: Point2D;
  constructor(assetKey: string, anchorOffset?: Point2D) {
    super("image");
    this.assetKey = assetKey;
    this.anchorOffset = anchorOffset ?? { x: 0, y: 0 };
  }
}
