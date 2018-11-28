import { Component } from "@stencil/core";

@Component({
  tag: "aa-editor",
  styleUrl: "aa-editor.css"
})
export class AAEditorComponent {
  moved: boolean = false;

  render() {
    return [
      <div id="editor" class="editor">
        <aa-editor-col />
        <div class="editor-wrapper">
          <div class="info-wrapper">
            <aa-editor-row row={10} />
          </div>
          <aa-textarea style={{ width: "100%" }} />
        </div>
      </div>
    ];
  }
}
