"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateArticle(konten) {
  const [title, setTitle] = useState(konten.title);
  const [content, setContent] = useState(konten.content);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter()

  async function handleUpdate(e) {
    e.preventDefault();

    setIsMutating(true)
    await fetch(`https://api-trials.x5.com.au/api/articles/${konten.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setIsMutating(false)

    setTitle(konten.title);
    setContent(konten.content);
    setModal(false);
    router.refresh();
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-circle btn-warning text-white mr-2" onClick={handleChange}>
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Article</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold"> Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full input-bordered"
                placeholder="ex. Full name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold"> Phone: </label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input w-full input-bordered"
                placeholder="ex. 0812345667"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
