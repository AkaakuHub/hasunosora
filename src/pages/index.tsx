import React from "react";
import { HeadFC } from "gatsby";

import { Helmet } from 'react-helmet';

import Header from "../components/(pages)/header";
import Footer from "../components/(pages)/footer";
import LotusMenu from "../components/(parts)/lotusmenu";

import About from "../components/(pages)/about";
import Exam from "../components/(pages)/exam";
import News from "../components/(pages)/news";

import "./global.css";

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
      </Helmet>
      {/* <LotusMenu />
      <Header />
      <About />
      <Exam />
      <News />
      <Footer /> */}
      <p>
        coming soon...
      </p>
    </>
  )
}

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
    </head>
  )
}
