import type { Article } from "../../interfaces/News"

interface CardProps {
  article: Article
}

export default function Card({ article }: CardProps) {
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div>
        <img
          src={article.urlToImage ? article.urlToImage : "https://placehold.co/600x400?text=No+image+available"}
          alt={article.title}
        />
      </div>
      <a href={article.url} target="_blank">
        <button>Open Article</button>
      </a>
    </>
  )
}
