"use client"

import React, { VFC } from "react"

import { Counter } from "@/components/ui-components/Counter"

const DEFAULT_COUNT_NUM = 3

const Page: VFC = () => {
  return (
    <div>
      <div>
        lit/React:
        <Counter _count={DEFAULT_COUNT_NUM} />
      </div>
      <div>
        lit/web-component:
        <counter-component _count={DEFAULT_COUNT_NUM} />
      </div>
    </div>
  )
}

export default Page
