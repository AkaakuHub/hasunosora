import React from "react";

import "./index.css";

import { AprilfoolPropsType } from "../../../types";

const makeTweetContent = () => {
  const url = "https://hasunosora.vercel.app";
  const text = "蓮ノ空女学院 ホームページ";
  const hashtags = "蓮ノ空,エイプリルフール";
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
};

const Sachi: React.FC<AprilfoolPropsType> = (
  {
    isAMOpen,
    setIsAMOpen,
    type,
    setType,
  }
) => {
  const handleClickImage = (event: React.MouseEvent<HTMLAreaElement, MouseEvent>) => {
    event.preventDefault();

    setIsAMOpen(true);
    setType("sachi");
  };
  return (
    <div className="sachi-root">
      <img src="/background/7.webp" useMap="#ImageMap" alt="" className="sachi-image" />
      <map name="ImageMap">
        <area shape="poly" coords="878,800,871,853,972,854,963,798,962,799" href="#" alt="ぼやけた写真" onClick={handleClickImage} />
      </map>
    </div>
  );

}

export default Sachi;