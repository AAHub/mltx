import { Component, Prop, Listen } from "@stencil/core";

@Component({
  tag: "aa-textbox",
  styleUrl: "aa-textbox.css"
})
export class AATextBoxComponent {
  @Prop() block: any;
  @Prop() idx: number;

  @Listen("input")
  handleInput(ev) {
    console.log(this.idx + ":", ev);
  }

  render() {
    return (
      <div class="textbox">
        <div class="aa" contenteditable="true">
          {this.block.text}
        </div>
      </div>
    );
  }
}
