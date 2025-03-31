import React from "react";

import "./index.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-root">
        <img src="../../../images/icon.webp"
          alt="蓮ノ空女学院の校章"
          layout="fixed"
          placeholder="blurred"
          width={100}
          height={100}
          className="logo-image no-click"
        />
        <img src="../../../images/school-name.webp"
          alt="蓮ノ空女学院"
          layout="fixed"
          placeholder="blurred"
          width={910 * 0.25} // 227.5
          height={356 * 0.25} // 89
          className="school-name-image no-click"
        />
      </div>
    </>
  )
}

export default Header