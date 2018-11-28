import { Component, Listen, Element, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";

@Component({
  tag: "aa-textarea",
  styleUrl: "aa-textarea.css"
})
export class AATextAreaComponent {
  @State() res: any;
  @State() blocks: any;
  @State() focusId: string = "";
  @State() activeBlock: any;

  @Element() el: HTMLElement;

  @Prop({ context: "store" })
  store: Store;

  moved: boolean = false;

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        ContentState: { res }
      } = state;
      const r = res[0];

      return {
        res: r,
        blocks: r.blocks
      };
    });
  }

  @Listen("mousedown")
  handleScrollMouseStart(ev) {
    console.log("mouseStart:", ev);
    //this.focusId = "";
  }

  @Listen("mouseup")
  handleScrollMouseEnd(ev) {
    this.moveEnd(ev);
  }

  @Listen("touchend")
  handleScrollTouchEnd(ev) {
    this.moveEnd(ev);
  }

  async moveStart(key: string) {
    console.log("moveStart:", key);
    if (!this.moved && key != "") {
      this.moved = true;
    }
  }

  outFocus() {
    this.focusId = "";
  }

  async moveEnd(ev) {
    console.log("moveEnd:", ev);
    if (this.moved && this.focusId != "") {
      this.moved = false;
    }
  }

  @Listen("mousemove")
  handleScrollMouseMove(ev) {
    console.log(ev);
    this.move(ev.clientX - 50, ev.clientY - 61);
  }
  @Listen("touchmove")
  handleScrollTouchMove(ev) {
    console.log(ev);
    if (ev.targetTouches) {
      if (ev.targetTouches[0]) {
        const touch = ev.targetTouches[0];
        this.move(touch.clientX - 50, touch.clientY - 61);
      }
    }
  }

  async move(x: number = 0, y: number = 0) {
    if (this.moved && this.focusId != "") {
      let newX = Math.round(x / 10);
      let newY = Math.round(y / 16);
      console.log("move:", newX, newY);
      for (let idx = 0; idx < this.blocks.length; idx++) {
        if (this.blocks[idx].key == this.focusId) {
          this.blocks[idx].x = newX;
          this.blocks[idx].y = newY;
          this.blocks = [...this.blocks];
        }
      }
    }
  }

  onFocus(ev) {
    console.log("focus:", ev);
    this.focusId = ev.detail.key;
  }

  onBlur(ev) {
    console.log(ev);
  }

  getActiveBlocK(key: string = "") {
    for (let block of this.blocks) {
      if (block.key == key) {
        this.activeBlock = block;
      }
    }
  }

  componentDidLoad() {
    //const textarea = this.el.querySelector("#editor-textarea");
    //textarea.removeEventListener("mousemove", () => {}, false);
    //textarea.addEventListener("mousemove", async ev => {
    //  console.log("mousemove:", ev);
    //});
    //textarea.removeEventListener("touchmove", () => {}, false);
    //textarea.addEventListener("touchmove", async ev => {
    //  console.log("touchmove:", ev);
    //});
  }
  render() {
    return [
      <div id="editor-textarea" class="editor-area" role="editor-area">
        {(() => {
          let textbox = [];
          for (let idx = 0; idx < this.blocks.length; idx++) {
            const block = this.blocks[idx];
            let visible = "hidden";
            let focused = false;
            if (this.focusId == block.key) {
              visible = "visible";
              focused = true;
            }
            textbox.push(
              <div
                class="textbox-wrapper"
                style={{
                  position: "absolute",
                  marginLeft: block.x * 10 + "px",
                  marginTop: block.y * 16 + "px"
                }}
              >
                <div
                  class="drag"
                  id={`${block.key}`}
                  style={{
                    position: "absolute",
                    visibility: visible
                  }}
                  onMouseDown={() => this.moveStart(block.key)}
                  onTouchStart={() => this.moveStart(block.key)}
                >
                  AA
                </div>
                <aa-textbox
                  block={block}
                  focused={focused}
                  text={block.text}
                  idx={idx}
                  onFocusEmit={ev => this.onFocus(ev)}
                  onBlurEmit={ev => this.onBlur(ev)}
                />
              </div>
            );
          }
          return textbox;
        })()}
      </div>
    ];
  }
}
