import React from "react";

import "./index.css";

import { Heading } from "../../(parts)/heading";

import { AprilfoolPropsType } from "../../../types";

const News: React.FC<AprilfoolPropsType> = (
  {
    isAMOpen,
    setIsAMOpen,
  }
) => {
  type NewsDataType = {
    date: string,
    title: string,
    kind: "重要" | "行事" | "入試" | "その他",
  }

  const newsData: NewsDataType[] = [
    {
      "date": "2024/3/28",
      "title": "第二音楽堂の名称が決定されました",
      "kind": "重要"
    },
    {
      "date": "2024/3/28",
      "title": "蓮華祭が開催されました",
      "kind": "行事"
    },
    {
      "date": "2024/3/12",
      "title": "仮囲い撤去に伴う通行規制のお知らせ",
      "kind": "重要"
    },
  ]

  const colorDictionary = {
    "重要": "#b51909",
    "行事": "#3f10ad",
    "入試": "#3fad10",
    "その他": "#525252",
  }

  const MakeNewsComponent = ({ news }: { news: NewsDataType }) => {
    return (
      <div className="news-card"
        onClick={() => setIsAMOpen(true)}
      >
        <p>
          <span className="news-tag" style={{ backgroundColor: colorDictionary[news.kind] }}>{news.kind}</span>
          <span>{news.date}</span>
        </p>
        <p>{news.title}</p>
      </div>
    )
  }

  return (
    <>
      <Heading as="h1">News</Heading>
      {newsData.map((news, index) => (
        <MakeNewsComponent key={index} news={news} />
      ))}
      <p onClick={() => setIsAMOpen(true)} className="show-more-news"
      >
        もっと見る
      </p>
    </>
  )
}

export default News