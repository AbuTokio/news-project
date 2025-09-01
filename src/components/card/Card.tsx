import type { Article } from "../../interfaces/News"

interface CardProps {
  article: Article
}

export default function Card({ article }: CardProps) {
  return (
    <>
      <h2 className="text-xl text-center text-accent font-bold">{article.title}</h2>
      <p className="text-sm">{article.description}</p>
      <div className="w-fit rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={article.urlToImage ? article.urlToImage : "https://placehold.co/600x400?text=No+image+available"}
          alt={article.title}
        />
      </div>
      <a href={article.url} target="_blank">
        <button className="bg-zinc-200 cursor-pointer text-zinc-600 ring-1 ring-zinc-400 hover:ring-2 hover:ring-accent outline-none duration-300 rounded-full px-4 py-1 shadow-md hover:shadow-lg hover:shadow-accent">
          Open Article
        </button>
      </a>
    </>
  )
}
