"use client"
import React from "react"

const TogetherJsDemoPage: React.VFC = () => {
  return (
    <>
      <script src="https://togetherjs.com/togetherjs-min.js"></script>
      <button
        onClick={() => {
          const TogetherJS = Reflect.get(window, "TogetherJS")
          TogetherJS(this)
          return false
        }}
      >
        Start TogetherJS
      </button>
    </>
  )
}

export default TogetherJsDemoPage
