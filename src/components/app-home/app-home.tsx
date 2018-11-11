import { Component, Prop } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../../store/index"; // index required due to bug
import { contentStateCreateEmpty } from "../../store/actions/content-state";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  @Prop({ context: "store" })
  store: Store;

  contentStateCreateEmpty: Action;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      contentStateCreateEmpty
    });
    this.store.setStore(configureStore({}));
    this.contentStateCreateEmpty();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>MLTX-Editor</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <aa-editor />
      </ion-content>
    ];
  }
}
