import Component from "../../core/Component";
import { Point2D } from "../Point2D";

export default class PositionComponent extends Component {
  position: Point2D;
  zIndex: number;
  constructor(position: Point2D, zIndex: number) {
    super("position");
    this.position = position;
    this.zIndex = zIndex;
  }
}
