import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import "./index.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="root">
        <StaticImage src="../../../images/icon.png" alt="蓮ノ空女学院の校章"
          layout="fixed"
          placeholder="blurred"
          width={100}
          height={100}
          className="logo-image"
        />
        <div className="school-name">私立蓮ノ空女学院</div>
      </div>

    </>
  )
}

export default Header