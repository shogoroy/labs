import { createComponent } from "@lit-labs/react"
import { html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"
import React from "react"

@customElement("counter-component")
class _Counter extends LitElement {
  @property({ type: Number }) _count: number = 0

  get count() {
    return this._count
  }

  set count(value) {
    this._count = value
    this.render()
  }

  handleClickIncrement = () => {
    this.count++
  }
  handleClickDecrement = () => {
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

export const Counter = createComponent({
  tagName: "counter-component",
  elementClass: _Counter,
  react: React,
})
