import React, { Component } from "react"
import leaf from "../../images/og_leaf4.jpg"

const Leaf = props => {
  return (
    <div className="leaf" style={{ width: props.length }}>
      <img src={leaf} alt="" />
    </div>
  )
}

export default Leaf
