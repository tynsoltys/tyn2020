import React from "react"
import { Link } from "gatsby"

const PortfolioThumb = ({projectTitle, img, imgAlt, client, desc, link, actionText}) => {
  return (
        <div className="portfolio-item">
          <img src="{img}" alt="{imgAlt}"/>
          {console.log(img)}
          <h4>{client}</h4>
          <h3>{projectTitle}</h3>
          <p>{desc}</p>
          <p className="action-text">{actionText}</p>
          <Link to="{link}" className="">
          </Link>
          </div>
        )
}

export default PortfolioThumb