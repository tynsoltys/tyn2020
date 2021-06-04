import { Link } from "gatsby"
import React, {useEffect} from "react"
import "../styles/styles.scss"
import Jelly from "jelly.js"


const shapeStyle = {
  display: 'none',
  fill: '#29303e',
  backgroundColor: '#29303e'
}

/* Setup options */
const options = {
  paths: '#circle-path',     // Shape we want to draw
  pointsNumber: 10,            // Number of points
  maxDistance: 70,             // Max distance among points
  intensity: 0.5,
  color: '#29303e',
  centroid: '.centroid-text'   // Element to move accordingly with the centroid of the shape
  // debug: true               // Uncomment this to see the points
};

/* Initializing jelly */
// const jelly = () => new Jelly('.jelly-canvas', options);

const Jelogo = () => (


    

    <Link className="logo" to="/">
      {/* { 
        useEffect(() => {
          const jelly =  new Jelly('.jelly-canvas', options)
        })
      } */}

      <h1>TYN</h1>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgBox" width="190" height="190" style={shapeStyle}>
          {/* <path id="pentagon-path" d="m200 97.218 108.07 78.524-41.28 127.04h-133.58l-41.281-127.04z"/> */}
          <path id="circle-path" d="M 20, 100
            a 50,50 0 1,1 150,0
            a 50,50 0 1,1 -150,0" style={shapeStyle}/>
      </svg>
      <div class="jelly-container">
          <canvas class="jelly-canvas" style={shapeStyle}></canvas>
          <div class="centroid-container ">
              <div class="centroid-text">TYN</div>
          </div>
      </div>
      </Link>


)


export default Jelogo
