import React from "react";

import "./index.css";

const News: React.FC = () => {

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
      "title": "蓮華祭が開催されます",
      "kind": "行事"
    },
    {
      "date": "2024/3/12",
      "title": "仮囲い撤去に伴う通行規制のお知らせ",
      "kind": "重要"
    },
  ]

  const colorDictionary = {
    "重要": "#ff0000",
    "行事": "#0000ff",
    "入試": "#00ff00",
    "その他": "#000000",
  }

  const MakeNewsComponent = ({ news }: { news: NewsDataType }) => {
    return (
      <div>
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
      <h1>News</h1>
      {newsData.map((news, index) => (
        <MakeNewsComponent key={index} news={news} />
      ))}
    </>
  )
}

export default News