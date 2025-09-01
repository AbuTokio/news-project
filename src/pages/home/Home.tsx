import { useState } from "react"
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"
import type { News } from "../../interfaces/News"

export default function Home() {
  const [news, setNews] = useState<News>()

  return (
    <>
      <Header news={news} setNews={setNews} />
      <Main news={news} setNews={setNews} />
    </>
  )
}
