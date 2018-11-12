import { Component, Element, Prop, Listen } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { setActiveBlock } from "../../store/actions/editor-state";
import { contentSetBlock } from "../../store/actions/content-state";

@Component({
  tag: "aa-textbox",
  styleUrl: "aa-textbox.css"
})
export class AATextBoxComponent {
  @Prop() block: any;
  @Prop() text: string;
  @Prop() idx: number;
  @Prop({ context: "store" })
  store: Store;

  @Element() el: HTMLElement;

  setActiveBlock: Action;
  contentSetBlock: Action;

  @Listen("paste")
  handlePaste(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const plaintext = ev.clipboardData.getData("text/plain");
    console.log(this.idx + ":", plaintext);
    let block = this.block;
    block.text = block.text + plaintext;
    this.contentSetBlock(block);
  }

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setActiveBlock,
      contentSetBlock
    });
  }

  componentDidLoad() {
    const aa = this.el.querySelector(".aa");
    console.log(aa);
    aa.addEventListener("focus", async ev => {
      console.log("focus:", ev);
      this.setActiveBlock(this.block);
    });
    aa.addEventListener("input", async ev => {
      console.log("input:", ev);
    });
  }

  render() {
    console.log(this.block);
    return (
      <div
        class="textbox"
        style={{
          position: "absolute",
          left: this.block.x * 10 + "px",
          top: this.block.y * 16 + "px"
        }}
      >
        <div class="aa" contenteditable="true">
          {this.text}
        </div>
      </div>
    );
  }
}
