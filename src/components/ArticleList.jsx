import DeleteArticle from "./DeleteArticle";
import UpdateArticle from "./UpdateArticle";

export default function ArticleList({ api }) {
  return (
    <>
      <tbody>
        {api.data?.articles.map((konten, index) => {
          return (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{konten.created_at}</td>
              <td>{konten.title}</td>
              <td>{konten.content}</td>
              <td className="flex">
                <UpdateArticle {...konten} />
                <DeleteArticle {...konten} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
