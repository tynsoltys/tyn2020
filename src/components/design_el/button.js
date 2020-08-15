import React, { Component } from "react"
import { Link } from "gatsby"

const Button = props => {
  return (
    <Link className="btn" to={props.url} alt={props.alt}>
      {props.children}
    </Link>
  )
}

export default Button
