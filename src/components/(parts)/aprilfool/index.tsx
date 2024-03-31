import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { AprilfoolPropsType } from '../../../types';
import './index.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import CloseIcon from '@mui/icons-material/Close';

const Aprilfool: React.FC<AprilfoolPropsType> = ({ isAMOpen, setIsAMOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsAMOpen(false);
    }
  };

  useEffect(() => {
    if (isAMOpen) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => setIsVisible(false), 500); // 0.5秒後に非表示にする
      return () => clearTimeout(timeoutId);
    }
  }, [isAMOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const makeTweetContent = () => {
    const url = "https://hasunosora.vercel.app";
    const text = "蓮ノ空女学院 ホームページ";
    const hashtags = "蓮ノ空,エイプリルフール";
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
  };

  return (
    <>
      <div className={clsx("root", isAMOpen && "is-shown", isVisible && "is-visible")}
      >
        <div className="modal-bg"></div>
        <div className="modal" ref={menuRef}>
          <div className="modal-close-button"
            onClick={() => setIsAMOpen(false)}
          >
            <CloseIcon fontSize="large" />
          </div>
          <p className="modal-main-text">
            このサイトはエイプリルフールに制作されたものであり、公式とは一切関係ありません。
            <br />
            <a href={makeTweetContent()} target="_blank" rel="noreferrer"
              className="share-button-wrapper"
            >
              <p
                className="share-button"
                style={{
                  backgroundColor: isHovering ? "#1DA1F2" : "#000",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="icon-wrapper">
                  {isHovering ? <TwitterIcon /> : <XIcon />}
                </span>
                でシェア
              </p>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Aprilfool;
