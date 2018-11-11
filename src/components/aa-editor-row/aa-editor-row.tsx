import { Component, Prop } from "@stencil/core";

@Component({
  tag: "aa-editor-row",
  styleUrl: "aa-editor-row.css"
})
export class AAEditorRowComponent {
  @Prop() row: number;

  render() {
    return [
      <div role="row" class="rows-wrapper">
        {(() => {
          let nu = [];
          for (let i = 0; i < this.row; i++) {
            nu.push(
              <div class="row-wrapper">
                <div class="row">{i + 1}</div>
              </div>
            );
          }
          return nu;
        })()}
      </div>
    ];
  }
}
