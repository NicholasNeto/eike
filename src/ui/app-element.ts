import { LitElement, html } from 'lit-element';

export class AppElement extends LitElement {

  createRenderRoot() {
    return this;
  }

}

export * from 'lit-element';