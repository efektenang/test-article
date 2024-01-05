import AddArticle from "@/components/AddArticle";
import ArticleList from "@/components/ArticleList";
import { getArticle } from "@/libs/api-libs";

export default async function Home() {
  const article = await getArticle();
  return (
    <div className="mx-4">
      <div role="tablist" className="tabs tabs-lifted card shadow-xl">
        <input
          type="radio"
          name="article_tabs"
          role="tab"
          className="tab"
          aria-label="Articles"
        />
        <ArticleList api={article} />

        <input
          type="radio"
          name="article_tabs"
          role="tab"
          className="tab"
          aria-label="Add Article"
        />
        <AddArticle />
      </div>
    </div>
  );
}
