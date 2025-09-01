import { useState } from "react"
import { Language } from "../../enums/Language"
import type { News } from "../../interfaces/News"
import { Parameter } from "../../enums/Parameter"

interface HeaderProps {
  news: News | undefined
  setNews: React.Dispatch<React.SetStateAction<News | undefined>>
}

export default function Header({ setNews }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>()
  const [language, setLanguage] = useState<Language>()
  const [sortValue, setSortValue] = useState<string>()
  const [API_BASE_URL] = useState<string>("https://newsapi.org/v2/everything?")

  const fetchNews = async (url: string): Promise<void> => {
    const resp: Response = await fetch(url)
    const news: News = await resp.json()
    setNews(news)
  }

  const searchNews = async (): Promise<void> => {
    const apiParameters: string[] = []
    apiParameters[Parameter.SEARCH_VALUE] = `q=${searchValue}`
    apiParameters[Parameter.LANGUAGE] = `language=${language}`
    apiParameters[Parameter.SORT_BY] = `sortBy=${sortValue}`
    const url: string = `${API_BASE_URL}${apiParameters.join("&")}&apiKey=${import.meta.env.VITE_API_KEY}`
    await fetchNews(url)
  }

  return (
    <header className="border-b-1 p-16 flex flex-col gap-16">
      <h1 className="text-8xl font-bold text-accent text-center">Breaking News</h1>
      <form className="flex justify-center items-center gap-8">
        <input
          className="bg-zinc-200 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2 focus:ring-accent outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-accent"
          type="text"
          placeholder="Type to search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <select
          className="bg-zinc-200 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2 focus:ring-accent outline-none duration-300 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-accent"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value as Language)}
          defaultValue={""}>
          <option value="" disabled hidden>
            Select your language
          </option>
          {Object.entries(Language).map(([key, value]) => {
            return (
              <option key={key} value={key.toLowerCase()}>
                {value}
              </option>
            )
          })}
        </select>
        <select
          className="bg-zinc-200 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2 focus:ring-accent outline-none duration-300 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-accent"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value)}>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Newest</option>
        </select>
        <button
          className="bg-zinc-200 cursor-pointer text-zinc-600 ring-1 ring-zinc-400 hover:ring-2 hover:ring-accent outline-none duration-300 rounded-full px-4 py-1 shadow-md hover:shadow-lg hover:shadow-accent"
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            searchNews()
          }}>
          Search
        </button>
      </form>
    </header>
  )
}
