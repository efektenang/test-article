"use client";

import { useEffect, useState } from "react";
import AddArticle from "./AddArticle";
import { getArticle } from "@/libs/api-libs";
import Pagination from "./utils/Pagination";
import { useRouter } from "next/navigation";
import DeleteArticle from "./DeleteArticle";
import UpdateArticle from "./UpdateArticle";

export default function Content() {
  const [isChecked, setIsChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [article, setArticle] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const response = await getArticle(page);
    setArticle(response);
  };

  const changeHandle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div role="tablist" className="tabs tabs-lifted card shadow-xl">
      <input
        type="radio"
        name="article_tabs"
        role="tab"
        className="tab"
        aria-label="Articles"
      />
      <div role="tabpanel" className="tab-content">
        <div className="card-body">
          <div className="card-title">Articles</div>
          <div className="text-right">
            <button className="btn bg-green-400" onClick={changeHandle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add
            </button>
          </div>
          <table className="table">
            <thead>
              <tr className="bg-green-500 text-white text-base">
                <th>#</th>
                <th>Date</th>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {article.data?.articles.map((konten, index) => {
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
          </table>
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
      <AddArticle />
    </div>
  );
}
