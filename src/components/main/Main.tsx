import React from "react"
import type { Article, News } from "../../interfaces/News"
import Card from "../card/Card"

interface MainProps {
  news: News | undefined
  setNews: React.Dispatch<React.SetStateAction<News | undefined>>
}

export default function Main({ news }: MainProps) {
  return (
    <main>
      {news ? (
        <>
          {news.articles.map((article: Article, index: number) => {
            return (
              <div key={index}>
                <Card article={article} />
              </div>
            )
          })}
        </>
      ) : (
        <p>...</p>
      )}
    </main>
  )
}
