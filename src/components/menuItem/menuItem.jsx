import React from 'react'
import './menuItem.scss'
import { withRouter } from "react-router";
// match history from  withRouter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl}) `,
        }}
      ></div>
      <div className="content" onClick={()=>{ history.push(`${match.url + linkUrl }`)  }}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
