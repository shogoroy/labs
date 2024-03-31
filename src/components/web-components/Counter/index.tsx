import { html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

export const WEB_COMPONENTS_NAME = "counter-component" as const

@customElement(WEB_COMPONENTS_NAME)
export class CounterWC extends LitElement {
  @property({ type: Number }) _count: number = 0

  private get count() {
    return this._count
  }

  private set count(value) {
    this._count = value
    this.render()
  }

  private handleClickIncrement = () => {
    this.count++
  }
  private handleClickDecrement = () => {
    this.count--
  }

  render() {
    return html`
      <button @click="${this.handleClickDecrement}">Decrement</button>
      <span>${this.count}</span>
      <button @click="${this.handleClickIncrement}">Increment</button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [WEB_COMPONENTS_NAME]: CounterWC
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      [WEB_COMPONENTS_NAME]: { _count?: number }
    }
  }
}
