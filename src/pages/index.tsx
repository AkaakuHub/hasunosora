import React from "react";
import { useState, useEffect, useRef } from "react";
import { HeadFC } from "gatsby";

import clsx from "clsx";
import { useLayoutEffect } from "react";

import { Helmet } from 'react-helmet';

import Header from "../components/(pages)/header";
import Footer from "../components/(pages)/footer";
// import LotusMenu from "../components/(parts)/lotusmenu";

import About from "../components/(pages)/about";
import Exam from "../components/(pages)/exam";
import News from "../components/(pages)/news";
import Schoollife from "../components/(pages)/schoollife";

import Aprilfool from "../components/(parts)/aprilfool";

import Sachi from "../components/(parts)/sachi";

import "./index.css";
import "./global.css";
import { AprilfoolPropsType, AprilfoolTypeType } from "../types";

import { createGlobalStyle } from "styled-components";

import styled from 'styled-components';



const BackgroundImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.fade-in {
    opacity: 1;
  }
`;

const backgroundImages = [
  '/background/1.webp',
  '/background/2.webp',
  '/background/6.webp',
  '', // 最後の空文字列は、最後のセクションが背景画像を持たない場合に対応
];

const BackgroundImageComponent: React.FC<{ setIsLastImage: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsLastImage }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = scrollPosition / documentHeight;

      let newIndex = Math.floor(scrollPercentage * backgroundImages.length);
      // newIndex = Math.max(0, newIndex); // newIndexが0未満にならないようにする
      if (newIndex === -1) {
        newIndex = 0;
      }
      setActiveImageIndex(newIndex);

      // 3, 4のときはisLastImageをtrueにする
      if (newIndex >= 3) {
        setIsLastImage(true);
      } else {
        setIsLastImage(false);
      }
      console.log(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BackgroundImageWrapper>
      {backgroundImages.map((imgURL, index) => (
        <BackgroundImage
          key={index}
          src={imgURL}
          className={clsx({ 'fade-in': index === activeImageIndex })}
          style={{ zIndex: index === activeImageIndex ? 1 : 0 }}
          alt="background"
        />
      ))}
    </BackgroundImageWrapper>
  );
};

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (!sectionRect) return;

      // const isInViewport =
      //   sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight;

      // Viewport内の場合、何かの処理を行う
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="section-root" ref={sectionRef}>{children}</div>;
};


const IndexPage: React.FC = () => {
  const [isAMOpen, setIsAMOpen] = useState(false);
  const [type, setType] = useState<AprilfoolTypeType>("normal");

  const AprilfoolProps = { isAMOpen, setIsAMOpen, type, setType };

  const [isLastImage, setIsLastImage] = useState(false);

  const getRandomColor = () => {
    const colors = ["#FFBF00", "#1053A6", "#69CD82", "#E7334A", "#F79293", "#A6A6A6"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const GlobalStyles = createGlobalStyle`
    ::selection {
      color: #fff;
      background: ${getRandomColor()};
    }
  `;

  const sectionProps = { setIsLastImage };

  return (
    <>
      <Helmet>
        <html lang="ja" />
      </Helmet>
      <GlobalStyles />
      <BackgroundImageComponent {...sectionProps} />
      {/* <LotusMenu /> */}
      <Aprilfool {...AprilfoolProps} />
      <Header />
      <div className="main-page">
        <Section>
          <About />
        </Section>
        <Section>
          <News {...AprilfoolProps} />
        </Section>
        <Section>
          <Schoollife {...AprilfoolProps} />
        </Section>
        <Section>
          <Exam {...AprilfoolProps} />
        </Section>
      </div>
      <div
        className={clsx(isLastImage ? "sachi-is-shown" : "", "sachi-wrapper")}
      >
        <Sachi {...AprilfoolProps} />
      </div>
      <Footer />
      {/** クリッカブルマップのレスポンシブ */}
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <script type="text/javascript" src="jquery.rwdImageMaps.min.js"></script>
      <script>
        $('img[usemap]').rwdImageMaps();
      </script>
    </>
  );
};

export default IndexPage

export const Head: HeadFC = () => {
  const baseURL = "https://hasunosora.vercel.app";
  return (
    <head>
      <title>蓮ノ空女学院 ウェブサイト</title>
      <meta name="description" content="石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。" />
      <meta name="keywords" content="蓮ノ空女学院,ラブライブ,スクールアイドル,金沢市" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={`${baseURL}/favicon.ico`} />
      <meta property="og:title" content="蓮ノ空女学院 ウェブサイト" />
      <meta property="og:description" content="石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseURL} />
      <meta property="og:image" content={`${baseURL}/ogp_default.webp`} />
      <meta property="og:site_name" content="蓮ノ空女学院 ウェブサイト" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="蓮ノ空女学院 ウェブサイト" />
      <meta name="twitter:description" content="石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。" />
      <meta name="twitter:image" content={`${baseURL}/ogp_default.webp`} />
      <meta name="twitter:image:alt" content="蓮ノ空女学院 ウェブサイト" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Yuji+Syuku&display=swap" rel="stylesheet" />

    </head>
  )
}
