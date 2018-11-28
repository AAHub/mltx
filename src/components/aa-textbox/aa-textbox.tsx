import {
  Component,
  Listen,
  Event,
  EventEmitter,
  Element,
  Prop
} from "@stencil/core";
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
  @Prop() focused: boolean;
  @Prop({ context: "store" })
  store: Store;

  @Event() focusEmit: EventEmitter;
  @Event() blurEmit: EventEmitter;

  @Element() el: HTMLElement;

  setActiveBlock: Action;
  contentSetBlock: Action;
  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setActiveBlock,
      contentSetBlock
    });
  }

  @Listen("mousedown")
  handleScrollMouseStart(ev) {
    console.log(this.block);
    this.focusEmit.emit({ ev: ev, key: this.block.key });
  }

  @Listen("mouseup")
  handleScrollMouseEnd(ev) {
    console.log(this.block);
    this.blurEmit.emit({ ev: ev, key: this.block.key });
  }

  componentDidLoad() {
    //const aa = this.el.querySelector(".aa");
    //aa.removeEventListener("focus", () => {}, false);
    //aa.removeEventListener("blur", () => {}, false);
    //aa.removeEventListener("input", () => {}, false);
    //aa.addEventListener("focus", async ev => {
    //  this.focused = true;
    //  console.log("focus:", ev);
    //  this.setActiveBlock(this.block);
    //});
    //aa.addEventListener("blur", async ev => {
    //  this.focused = true;
    //  console.log("blur:", ev);
    //});
    //aa.addEventListener("input", async ev => {
    //  console.log("input:", ev);
    //});
    //const drag = this.el.querySelector(".drag");
    //drag.removeEventListener("mousedown", () => {}, false);
    //drag.addEventListener("mousedown", ev => {
    //  this.moveStart(ev);
    //});
    //drag.removeEventListener("mouseup", () => {}, false);
    //drag.addEventListener("mouseup", ev => {
    //  this.moveEnd(ev);
    //});
  }

  async moveStart(ev) {
    setTimeout(() => {
      this.focused = true;
    }, 50);
    console.log("moveStart:", ev);
  }

  async moveMove(ev) {
    this.focused = true;
    console.log("move:", ev);
  }

  async moveEnd(ev) {
    this.focused = true;
    console.log("moveEnd:", ev);
  }

  textInput(e) {
    console.log(e);
  }

  render() {
    return (
      <div
        class="textbox"
      >
        <div
          class={`${this.focused ? "focus" : ""} aa`}
          contenteditable="true"
          onInput={e => this.textInput(e)}
        >
          {this.text}
        </div>
      </div>
    );
  }
}
