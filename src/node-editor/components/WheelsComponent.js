import Rete from "rete";
import * as Socket from "../sockets";
import { assignMaterialColor } from "../helpers/color";

export class WheelsComponent extends Rete.Component {
  constructor(car) {
    super("Wheels");
    this.car = car;
  }

  builder(node) {
    const inp = new Rete.Input("color", "Color", Socket.color);

    node.addInput(inp);
  }

  worker(node, inputs, outputs) {
    if (this.car.wheelMaterial)
      assignMaterialColor(this.car.wheelMaterial, inputs["color"][0]);
  }
}
