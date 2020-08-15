import React, { Component } from "react"

const Squiggle = props => {
  const squiggle = {
    width: props.length,
  }

  return (
    <div
      className={props.animated ? `squiggle-a squiggle` : "squiggle"}
      style={squiggle}
    ></div>
  )
}

export default Squiggle
