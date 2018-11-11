import { Component, Prop } from "@stencil/core";

@Component({
  tag: "aa-textarea",
  styleUrl: "aa-textarea.css"
})
export class AATextAreaComponent {
  @Prop() re: any;

  render() {
    return [
      <div class="textarea" style={{ height: this.re.row * 16 + "px" }}>
        {(() => {
          let textbox = [];
          if (this.re) {
            for (let idx = 0; idx < this.re.blocks.length; idx++) {
              const block = this.re.blocks[idx];
              textbox.push(<aa-textbox aa={block.text} idx={idx}/>);
            }
          }
          return textbox;
        })()}
      </div>
    ];
  }
}
