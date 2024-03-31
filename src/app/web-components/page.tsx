"use client"
import React, { VFC } from "react"

import { Counter } from "@/components/web-components/Counter"

const DEFAULT_COUNT_NUM = 3

const Page: VFC = () => {
  return <Counter _count={DEFAULT_COUNT_NUM} />
}

export default Page
