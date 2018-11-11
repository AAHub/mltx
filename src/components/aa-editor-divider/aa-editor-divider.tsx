import { Component, Prop } from "@stencil/core";

@Component({
  tag: "aa-editor-divider",
  styleUrl: "aa-editor-divider.css"
})
export class AAEditorDividerComponent {
  @Prop() splits: any;

  render() {
    return [
      <div role="divider" class="divider-wrapper">
        {this.splits.map(split => {
          console.log(split);
          return [
            <div
              class="divider"
              style={{ position: "absolute", top: split * 16 + "px" }}
            />
          ];
        })}
      </div>
    ];
  }
}
