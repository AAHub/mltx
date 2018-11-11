import { Component, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";

@Component({
  tag: "aa-editor",
  styleUrl: "aa-editor.css"
})
export class AAEditorComponent {
  @State() blocks: any;
  @State() row: number;
  @State() splits: any;

  @Prop({ context: "store" })
  store: Store;

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        ContentState: { blocks, row, splits }
      } = state;

      return {
        blocks,
        row,
        splits
      };
    });
  }

  render() {
    return [
      <div id="editor" class="editor">
        <aa-editor-col />
        <div class="editor-wrapper">
          <div class="info-wrapper">
            <aa-editor-row row={this.row} />
            <aa-editor-divider splits={this.splits} />
          </div>
          <div class="editor-area" role="editor-area">
            {(() => {
              let textbox = [];
              for (let idx = 0; idx < this.blocks.length; idx++) {
                const block = this.blocks[idx];
                textbox.push(<aa-textbox block={block} idx={idx} />);
              }
              return textbox;
            })()}
          </div>
        </div>
      </div>
    ];
  }
}
