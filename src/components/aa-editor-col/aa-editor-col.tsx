import { Component } from "@stencil/core";

@Component({
  tag: "aa-editor-col",
  styleUrl: "aa-editor-col.css"
})
export class AAEditorColComponent {
  render() {
    return [
      <div role="col" class="col-wrapper">
        {(() => {
          let col = [];
          for (let i = 0; i < 1000; i++) {
            if ((i + 1) % 100 == 0) {
              col.push(<div class="col">{i + 1}</div>);
            } else {
              col.push(<div class="col">&nbsp;</div>);
            }
          }
          return col;
        })()}
      </div>
    ];
  }
}
