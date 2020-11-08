import Rete from "rete";
import { TextControl } from "../controls/TextControl.js";
import * as Socket from "../sockets";

export class ColorComponent extends Rete.Component {
  constructor() {
    super("Color");
  }

  builder(node) {
    var out1 = new Rete.Output("color", "Color", Socket.color);

    return node
      .addControl(new TextControl(this.editor, "color"))
      .addOutput(out1);
  }

  worker(node, inputs, outputs) {
    outputs["color"] = node.data.color;
  }
}
