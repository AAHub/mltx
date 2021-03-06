/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AaEditorCol {}
  interface AaEditorColAttributes extends StencilHTMLAttributes {}

  interface AaEditorDivider {
    'splits': any;
  }
  interface AaEditorDividerAttributes extends StencilHTMLAttributes {
    'splits'?: any;
  }

  interface AaEditorRow {
    'row': number;
  }
  interface AaEditorRowAttributes extends StencilHTMLAttributes {
    'row'?: number;
  }

  interface AaEditor {}
  interface AaEditorAttributes extends StencilHTMLAttributes {}

  interface AaTextarea {}
  interface AaTextareaAttributes extends StencilHTMLAttributes {}

  interface AaTextbox {
    'block': any;
    'focused': boolean;
    'idx': number;
    'text': string;
  }
  interface AaTextboxAttributes extends StencilHTMLAttributes {
    'block'?: any;
    'focused'?: boolean;
    'idx'?: number;
    'onBlurEmit'?: (event: CustomEvent) => void;
    'onFocusEmit'?: (event: CustomEvent) => void;
    'text'?: string;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AaEditorCol': Components.AaEditorCol;
    'AaEditorDivider': Components.AaEditorDivider;
    'AaEditorRow': Components.AaEditorRow;
    'AaEditor': Components.AaEditor;
    'AaTextarea': Components.AaTextarea;
    'AaTextbox': Components.AaTextbox;
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'aa-editor-col': Components.AaEditorColAttributes;
    'aa-editor-divider': Components.AaEditorDividerAttributes;
    'aa-editor-row': Components.AaEditorRowAttributes;
    'aa-editor': Components.AaEditorAttributes;
    'aa-textarea': Components.AaTextareaAttributes;
    'aa-textbox': Components.AaTextboxAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAaEditorColElement extends Components.AaEditorCol, HTMLStencilElement {}
  var HTMLAaEditorColElement: {
    prototype: HTMLAaEditorColElement;
    new (): HTMLAaEditorColElement;
  };

  interface HTMLAaEditorDividerElement extends Components.AaEditorDivider, HTMLStencilElement {}
  var HTMLAaEditorDividerElement: {
    prototype: HTMLAaEditorDividerElement;
    new (): HTMLAaEditorDividerElement;
  };

  interface HTMLAaEditorRowElement extends Components.AaEditorRow, HTMLStencilElement {}
  var HTMLAaEditorRowElement: {
    prototype: HTMLAaEditorRowElement;
    new (): HTMLAaEditorRowElement;
  };

  interface HTMLAaEditorElement extends Components.AaEditor, HTMLStencilElement {}
  var HTMLAaEditorElement: {
    prototype: HTMLAaEditorElement;
    new (): HTMLAaEditorElement;
  };

  interface HTMLAaTextareaElement extends Components.AaTextarea, HTMLStencilElement {}
  var HTMLAaTextareaElement: {
    prototype: HTMLAaTextareaElement;
    new (): HTMLAaTextareaElement;
  };

  interface HTMLAaTextboxElement extends Components.AaTextbox, HTMLStencilElement {}
  var HTMLAaTextboxElement: {
    prototype: HTMLAaTextboxElement;
    new (): HTMLAaTextboxElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'aa-editor-col': HTMLAaEditorColElement
    'aa-editor-divider': HTMLAaEditorDividerElement
    'aa-editor-row': HTMLAaEditorRowElement
    'aa-editor': HTMLAaEditorElement
    'aa-textarea': HTMLAaTextareaElement
    'aa-textbox': HTMLAaTextboxElement
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'aa-editor-col': HTMLAaEditorColElement;
    'aa-editor-divider': HTMLAaEditorDividerElement;
    'aa-editor-row': HTMLAaEditorRowElement;
    'aa-editor': HTMLAaEditorElement;
    'aa-textarea': HTMLAaTextareaElement;
    'aa-textbox': HTMLAaTextboxElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
