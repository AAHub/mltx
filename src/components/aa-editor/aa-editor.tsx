import { Component, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";

@Component({
  tag: "aa-editor",
  styleUrl: "aa-editor.css"
})
export class AAEditorComponent {
  @State() res: any;

  @Prop({ context: "store" })
  store: Store;

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        ContentState: { res }
      } = state;
      console.log(res);
      const r = res[0];

      return {
        res: r
      };
    });
  }

  render() {
    return [
      <div id="editor" class="editor">
        <aa-editor-col />
        <div class="editor-wrapper">
          <div class="info-wrapper">
            <aa-editor-row row={this.res.row} />
          </div>
          <div class="editor-area" role="editor-area">
            {(() => {
              let textbox = [];
              for (let idx = 0; idx < this.res.blocks.length; idx++) {
                const block = this.res.blocks[idx];
                textbox.push(<aa-textbox block={block} text={block.text} idx={idx} />);
              }
              return textbox;
            })()}
          </div>
        </div>
      </div>
    ];
  }
}
