import React from "react"
import type { Article, News } from "../../interfaces/News"
import Card from "../card/Card"

interface MainProps {
  news: News | undefined
  setNews: React.Dispatch<React.SetStateAction<News | undefined>>
}

export default function Main({ news }: MainProps) {
  return (
    <main className="p-16 grid grid-cols-[repeat(auto-fit,minmax(35rem,1fr))] place-items-center gap-8">
      {news ? (
        <>
          {news.articles.map((article: Article, index: number) => {
            return (
              <div
                key={index}
                className="p-8 h-160 w-140 border-2 border-accent bg-zinc-50 shadow-md shadow-zinc-4 00 rounded-xl flex flex-col justify-between items-center">
                <Card article={article} />
              </div>
            )
          })}
        </>
      ) : (
        <p>News will be displayed when you search...</p>
      )}
    </main>
  )
}
