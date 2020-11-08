import Rete from "rete";
import Color from "color";
import * as Socket from "../sockets";
import { TextControl } from "../controls/TextControl.js";

export class AddComponent extends Rete.Component {
  constructor() {
    super("Mix");
  }

  builder(node) {
    var inp1 = new Rete.Input("a", "Value", Socket.value);
    var inp2 = new Rete.Input("b", "Value", Socket.value);
    var out = new Rete.Output("result", "Value", Socket.value);

    inp1.addControl(new TextControl(this.editor, "a"));
    inp2.addControl(new TextControl(this.editor, "b"));

    return node
      .addInput(inp1)
      .addInput(inp2)
      .addControl(new TextControl(this.editor, "preview", true))
      .addOutput(out);
  }

  worker(node, inputs, outputs) {
    var n1 = inputs["a"].length ? inputs["a"][0] : node.data.a;
    var n2 = inputs["b"].length ? inputs["b"][0] : node.data.b;

    var sum = Color(n1).mix(Color(n2));

    this.editor.nodes
      .find(n => n.id == node.id)
      .controls.get("preview")
      .setValue(sum);
    outputs["result"] = sum;
  }
}
