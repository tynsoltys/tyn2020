import React, { Component } from "react"

const Leaf = props => {
  return (
    <div className="leaf" style={{ width: props.length }}>
      <img src="../images/og_leaf4.jpg" alt="" />
    </div>
  )
}

export default Leaf
