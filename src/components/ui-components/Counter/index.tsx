import { createComponent } from "@lit-labs/react"
import React from "react"

import { CounterWC } from "@/components/web-components/Counter"

export const Counter = createComponent({
  tagName: "counter-component",
  elementClass: CounterWC,
  react: React,
})
