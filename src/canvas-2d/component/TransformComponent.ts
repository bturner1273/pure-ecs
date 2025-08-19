import Component from "../../core/Component";

export default class TransformComponent extends Component {
  rotation: number;
  scale: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  vr: number;
  ar: number;
  constructor(
    rotation: number,
    scale: number,
    vx: number,
    vy: number,
    ax: number,
    ay: number,
    vr: number,
    ar: number
  ) {
    super("transform");
    this.rotation = rotation;
    this.scale = scale;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.vr = vr;
    this.ar = ar;
  }
}
